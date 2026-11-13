using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using System.Windows;
using System.Windows.Media.Imaging;
using System.Windows.Threading;
using QRCoder;

namespace StormLeaderboardCollector;

public partial class MainWindow : Window
{
    private static readonly Uri ApiBase = new("http://127.0.0.1:23636/");

    private readonly HttpClient _http = new()
    {
        BaseAddress = ApiBase,
        Timeout = TimeSpan.FromSeconds(7)
    };

    private readonly DispatcherTimer _statusTimer = new()
    {
        Interval = TimeSpan.FromSeconds(2)
    };

    private readonly CancellationTokenSource _lifetime = new();
    private readonly string _websiteRoot;
    private readonly string _dataFolder;

    private Process? _service;
    private bool _busy;
    private string? _currentChallenge;

    public MainWindow()
    {
        InitializeComponent();

        _websiteRoot = FindWebsiteRoot();
        _dataFolder = Path.Combine(_websiteRoot, "public", "leaderboards");
        Directory.CreateDirectory(_dataFolder);

        _statusTimer.Tick += async (_, _) => await RefreshStatusAsync();
        Loaded += async (_, _) => await InitializeAsync();
        Closed += OnClosed;
    }

    private static string FindWebsiteRoot()
    {
        var path = new DirectoryInfo(AppContext.BaseDirectory);

        for (var i = 0; i < 9 && path is not null; i++, path = path.Parent)
        {
            if (File.Exists(Path.Combine(path.FullName, "angular.json")) &&
                Directory.Exists(Path.Combine(path.FullName, "public")))
            {
                return path.FullName;
            }
        }

        throw new DirectoryNotFoundException(
            "Place this utility inside NarutoWiki/tools/StormLeaderboardCollector.");
    }

    private async Task InitializeAsync()
    {
        try
        {
            var available = await IsServiceAvailableAsync();
            if (!available)
            {
                // Both executables are built directly into the solution's Build folder.
                // Never depend on an absolute developer path or the source project folder.
                var outputDirectory = AppContext.BaseDirectory;
                var serviceExe = Path.Combine(outputDirectory, "SteamService.exe");
                var serviceDll = Path.Combine(outputDirectory, "SteamService.dll");

                ProcessStartInfo startInfo;

                if (File.Exists(serviceExe))
                {
                    startInfo = new ProcessStartInfo(serviceExe);
                }
                else if (File.Exists(serviceDll))
                {
                    startInfo = new ProcessStartInfo("dotnet");
                    startInfo.ArgumentList.Add(serviceDll);
                }
                else
                {
                    throw new FileNotFoundException(
                        "SteamService was not found in the shared Build folder. " +
                        "Build the entire StormLeaderboardCollector solution.",
                        serviceExe);
                }

                startInfo.WorkingDirectory = outputDirectory;
                startInfo.UseShellExecute = false;
                startInfo.CreateNoWindow = true;
                startInfo.Environment["NARUTOWIKI_ROOT"] = _websiteRoot;

                _service = Process.Start(startInfo)
                    ?? throw new InvalidOperationException("SteamService failed to start.");

                Log("Starting local Steam connection…");
            }
            else
            {
                Log("Connected to an existing local Steam collector service.");
            }

            _statusTimer.Start();

            for (var attempt = 0; attempt < 20 && !_lifetime.IsCancellationRequested; attempt++)
            {
                if (await IsServiceAvailableAsync())
                {
                    await RefreshStatusAsync();
                    return;
                }

                await Task.Delay(750, _lifetime.Token);
            }

            Log("The Steam service did not start. Check that .NET 8 SDK is installed.");
        }
        catch (OperationCanceledException)
        {
        }
        catch (Exception ex)
        {
            Log($"Startup failed: {ex.Message}");
        }
    }

    private async Task<bool> IsServiceAvailableAsync()
    {
        try
        {
            using var response = await _http.GetAsync("api/status", _lifetime.Token);
            return response.IsSuccessStatusCode;
        }
        catch (Exception)
        {
            return false;
        }
    }

    private async Task RefreshStatusAsync()
    {
        try
        {
            var status = await _http.GetFromJsonAsync<AuthStatus>("api/auth", _lifetime.Token);
            if (status is null)
            {
                return;
            }

            ConnectionText.Text = status.LoggedOn
                ? $"Signed in to Steam: {status.AccountName}"
                : "Steam account sign-in required";
            var loggedInElsewhere = status.LastError?.Contains(
                "LoggedInElsewhere",
                StringComparison.OrdinalIgnoreCase) == true ||
                status.LastError?.Contains(
                    "signed in elsewhere",
                    StringComparison.OrdinalIgnoreCase) == true ||
                status.State?.Contains(
                    "LoggedInElsewhere",
                    StringComparison.OrdinalIgnoreCase) == true;

            StatusText.Text = status.LoggedOn
                ? status.State ?? "Connected"
                : loggedInElsewhere
                    ? "Steam ended this session because the account signed in elsewhere. Retry Sign-In to try again."
                    : status.LastError ?? status.State ?? "Connecting…";

            RetrySignInButton.Visibility = !status.LoggedOn &&
                (loggedInElsewhere ||
                 status.State?.Contains("failed", StringComparison.OrdinalIgnoreCase) == true ||
                 status.State?.Contains("disconnected", StringComparison.OrdinalIgnoreCase) == true)
                ? Visibility.Visible
                : Visibility.Collapsed;

            var challenge = status.LoggedOn
                ? null
                : status.ChallengeUrl;
            if (challenge != _currentChallenge)
            {
                _currentChallenge = challenge;
                ShowChallenge(challenge);
            }

            SignInPanel.Visibility = status.LoggedOn || string.IsNullOrWhiteSpace(challenge)
                ? Visibility.Collapsed
                : Visibility.Visible;

            CaptureAllButton.IsEnabled = status.LoggedOn && !_busy;
        }
        catch (OperationCanceledException)
        {
        }
        catch (Exception)
        {
            ConnectionText.Text = "Connecting to local Steam service…";
        }
    }

    private void ShowChallenge(string? challenge)
    {
        if (string.IsNullOrWhiteSpace(challenge))
        {
            LoginQrImage.Source = null;
            LoginQrImage.Visibility = Visibility.Collapsed;
            OpenLoginButton.Visibility = Visibility.Collapsed;
            LoginInstructions.Text = "Saved Steam session detected, or waiting for sign-in.";
            return;
        }

        // The QR is local to this desktop collector. The website never hosts a login page.
        using var generator = new QRCodeGenerator();
        using var data = generator.CreateQrCode(challenge, QRCodeGenerator.ECCLevel.Q);
        using var png = new PngByteQRCode(data);
        using var stream = new MemoryStream(png.GetGraphic(5));

        var image = new BitmapImage();
        image.BeginInit();
        image.CacheOption = BitmapCacheOption.OnLoad;
        image.StreamSource = stream;
        image.EndInit();
        image.Freeze();

        LoginQrImage.Source = image;
        LoginQrImage.Visibility = Visibility.Visible;
        OpenLoginButton.Visibility = Visibility.Visible;
        LoginInstructions.Text = "Approve sign-in using Steam Mobile. The collector saves your session locally for future captures.";
    }

    private void OpenLogin_Click(object sender, RoutedEventArgs e)
    {
        if (_currentChallenge is null)
        {
            return;
        }

        Process.Start(new ProcessStartInfo(_currentChallenge) { UseShellExecute = true });
    }

    private async void RetrySignIn_Click(object sender, RoutedEventArgs e)
    {
        RetrySignInButton.IsEnabled = false;

        StatusText.Text = "Reconnecting to Steam…";

        try
        {
            using var response = await _http.PostAsync(
                "api/auth/retry",
                null,
                _lifetime.Token);

            response.EnsureSuccessStatusCode();
            var retry = await response.Content.ReadFromJsonAsync<RetryResponse>(
                cancellationToken: _lifetime.Token);
            await RefreshStatusAsync();

            if (retry?.Started == false)
            {
                StatusText.Text = "Reconnect was not started. Check the Steam connection and retry.";
            }
        }
        catch (Exception ex) when (ex is not OperationCanceledException)
        {
            StatusText.Text = $"Retry failed: {ex.Message}";
        }
        finally
        {
            RetrySignInButton.IsEnabled = true;
        }
    }

    private async void CaptureAll_Click(object sender, RoutedEventArgs e)
    {
        if (_busy)
        {
            return;
        }

        _busy = true;
        CaptureAllButton.IsEnabled = false;
        CaptureProgress.Visibility = Visibility.Visible;
        CaptureProgress.Value = 0;
        ProgressText.Text = "Discovering Steam leaderboards...";

        try
        {
            using var response = await _http.PostAsync("api/games/capture", null, _lifetime.Token);
            response.EnsureSuccessStatusCode();

            // Capture runs within the service. A single slow game must not lock the UI.
            while (!_lifetime.IsCancellationRequested)
            {
                await Task.Delay(800, _lifetime.Token);

                var status = await _http.GetFromJsonAsync<MultiCaptureStatus>(
                    "api/games/capture/status", _lifetime.Token);

                if (status is null)
                {
                    break;
                }

                ProgressText.Text = status.Message;
                CaptureProgress.Value = Math.Clamp(status.ProgressPercent, 0, 100);

                if (!status.Running)
                {
                    if (status.Error is not null)
                    {
                        ProgressText.Text += " — " + status.Error;
                    }

                    break;
                }
            }
        }
        catch (OperationCanceledException)
        {
        }
        catch (Exception exception)
        {
            ProgressText.Text = $"Capture failed: {exception.Message}";
        }
        finally
        {
            _busy = false;
            await RefreshStatusAsync();
        }
    }

    private void Log(string message)
    {
        if (!_busy)
        {
            ProgressText.Text = message;
        }

        Debug.WriteLine($"[Storm Leaderboard] {message}");
    }

    private void OnClosed(object? sender, EventArgs e)
    {
        _statusTimer.Stop();
        _lifetime.Cancel();
        _http.Dispose();

        if (_service is { HasExited: false })
        {
            try
            {
                _service.Kill(entireProcessTree: true);
            }
            catch
            {
                // Service may already have exited.
            }
        }

        _service?.Dispose();
        _lifetime.Dispose();
    }

}

internal sealed record RetryResponse(bool Started);
