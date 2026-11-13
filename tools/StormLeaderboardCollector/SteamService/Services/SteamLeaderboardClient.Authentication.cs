using System.Collections.Concurrent;
using System.Text.Json;
using Microsoft.AspNetCore.DataProtection;
using SteamKit2;
using SteamKit2.Authentication;
using SteamKit2.Internal;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

public sealed partial class SteamLeaderboardClient
{
    private async Task BeginAuthenticationAsync()
    {
        if (_loggedOn || _authInProgress)
        {
            return;
        }
        _authInProgress = true;

        try
        {
            var configuredAccount = Environment.GetEnvironmentVariable("STORM4_STEAM_ACCOUNT");
            var configuredRefreshToken = Environment.GetEnvironmentVariable("STORM4_STEAM_REFRESH_TOKEN");

            if (!string.IsNullOrWhiteSpace(configuredAccount) && !string.IsNullOrWhiteSpace(configuredRefreshToken))
            {
                _usingSavedToken = false;
                StartTokenLogon(configuredAccount, configuredRefreshToken, "logging in with configured Steam token");
                return;
            }

            if (TryLoadSavedAuth(out var savedAccount, out var savedRefreshToken))
            {
                _usingSavedToken = true;
                StartTokenLogon(savedAccount!, savedRefreshToken!, "restoring saved Steam login");
                return;
            }

            _usingSavedToken = false;
            SetState("Steam sign-in required · preparing login challenge");

            var authSession = await _steamClient.Authentication.BeginAuthSessionViaQRAsync(new AuthSessionDetails());

            void PublishChallenge()
            {
                lock (_stateLock)
                {
                    _challengeUrl = authSession.ChallengeURL;
                    _lastError = null;
                    _state = "Steam sign-in approval required";
                }

                _logger.LogInformation("Steam QR login is ready. Scan the QR code in the Steam Leaderboard Collector desktop app.");
            }

            authSession.ChallengeURLChanged = PublishChallenge;
            PublishChallenge();

            var pollResponse = await authSession.PollingWaitForResultAsync();
            _pendingRefreshToken = pollResponse.RefreshToken;

            lock (_stateLock)
            {
                _accountName = pollResponse.AccountName;
                _challengeUrl = null;
                _state = $"logging in as {pollResponse.AccountName}";
            }

            _steamUser.LogOn(new SteamUser.LogOnDetails
            {
                Username = pollResponse.AccountName,
                AccessToken = pollResponse.RefreshToken
            });
        }
        catch (Exception ex)
        {
            lock (_stateLock)
            {
                _lastError = ex.Message;
                _state = "Steam authentication failed";
            }

            _logger.LogError(ex, "Steam authentication failed.");
            _authInProgress = false;
        }
    }

    private void StartTokenLogon(string account, string refreshToken, string state)
    {
        lock (_stateLock)
        {
            _accountName = account;
            _challengeUrl = null;
            _lastError = null;
            _state = state;
        }

        _steamUser.LogOn(new SteamUser.LogOnDetails
        {
            Username = account,
            AccessToken = refreshToken
        });
    }

    private void OnLoggedOn(SteamUser.LoggedOnCallback callback)
    {
        _authInProgress = false;

        if (callback.Result == EResult.OK)
        {
            _loggedOn = true;
            _accountSteamId = _anonymousMode ? null : _steamClient.SteamID?.ConvertToUInt64().ToString();
            if (_anonymousMode)
            {
                _accountName = "Anonymous";
                lock (_stateLock)
                {
                    _challengeUrl = null;
                    _lastError = null;
                    _state = "anonymous Steam session online · checking leaderboard permissions";
                }

                _logger.LogInformation("Anonymous Steam logon succeeded. Attempting STORM 4 leaderboard requests now; logon alone does not prove access.");
                AnnounceStorm4AppContext();
                _appContextReadyAtUtc = DateTimeOffset.UtcNow.AddSeconds(2);
                return;
            }

            if (!string.IsNullOrWhiteSpace(_pendingRefreshToken) && !string.IsNullOrWhiteSpace(_accountName))
            {
                SaveAuth(_accountName, _pendingRefreshToken);
                _pendingRefreshToken = null;
            }

            _usingSavedToken = false;

            lock (_stateLock)
            {
                _challengeUrl = null;
                _lastError = null;
                _state = $"online · {_accountName ?? "Steam"}";
            }

            _steamFriends.SetPersonaState(EPersonaState.Online);
            AnnounceStorm4AppContext();
            _appContextReadyAtUtc = DateTimeOffset.UtcNow.AddSeconds(2);

            _logger.LogInformation(
                "Authenticated Steam logon succeeded as {Account}. STORM 4 AppID {AppId} context announced.",
                _accountName ?? "Steam user",
                Storm4AppId);
            return;
        }

        var savedTokenFailed = _usingSavedToken;
        _usingSavedToken = false;
        _pendingRefreshToken = null;

        lock (_stateLock)
        {
            _lastError = $"Steam logon failed: {callback.Result} / {callback.ExtendedResult}";
            _state = "Steam logon failed";
        }

        _logger.LogError(
            "Steam user logon failed: {Result} / {ExtendedResult}.",
            callback.Result,
            callback.ExtendedResult);

        if (!_anonymousMode && savedTokenFailed)
        {
            DeleteSavedAuth();
            _logger.LogWarning("Saved Steam login was rejected. Falling back to a fresh QR login.");
            _ = BeginAuthenticationAsync();
        }
    }

    private void SaveAuth(string accountName, string refreshToken)
    {
        try
        {
            var directory = Path.GetDirectoryName(_savedAuthPath)!;
            Directory.CreateDirectory(directory);
            var json = JsonSerializer.Serialize(new StoredAuth(accountName, refreshToken));
            File.WriteAllText(_savedAuthPath, _authProtector.Protect(json));
            _logger.LogInformation("Saved the Steam login for automatic local reconnects.");
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Could not save the Steam login. QR login will be required again next launch.");
        }
    }

    private bool TryLoadSavedAuth(out string? accountName, out string? refreshToken)
    {
        accountName = null;
        refreshToken = null;

        try
        {
            if (!File.Exists(_savedAuthPath))
            {
                return false;
            }
            var protectedPayload = File.ReadAllText(_savedAuthPath);
            var json = _authProtector.Unprotect(protectedPayload);
            var saved = JsonSerializer.Deserialize<StoredAuth>(json);
            if (saved is null || string.IsNullOrWhiteSpace(saved.AccountName) || string.IsNullOrWhiteSpace(saved.RefreshToken))
            {
                return false;
            }
            accountName = saved.AccountName;
            refreshToken = saved.RefreshToken;
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Saved Steam login could not be read and will be replaced.");
            DeleteSavedAuth();
            return false;
        }
    }

    private void DeleteSavedAuth()
    {
        try
        {
            if (File.Exists(_savedAuthPath))
            {
                File.Delete(_savedAuthPath);
            }
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Could not delete the saved Steam login.");
        }
    }
}
