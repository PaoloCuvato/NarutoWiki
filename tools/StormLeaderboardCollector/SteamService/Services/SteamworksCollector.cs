using System.Collections.Concurrent;
using Steamworks;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

// All Steamworks calls and callbacks run on the worker thread.
public sealed partial class SteamworksCollector : BackgroundService
{
    public const uint AppId = 349040;
    public const string DefaultBoard = "BATTLE_RANKING_BP_ALL";

    private static readonly BoardInfoDto[] Boards =
    [
        new("BATTLE_RANKING_BP_ALL", "Global BP", "Battle Points", "All Regions", "BP"),
        new("BATTLE_RANKING_BP_NA", "North America BP", "Battle Points", "North America", "BP"),
        new("BATTLE_RANKING_BP_EU", "Europe BP", "Battle Points", "Europe", "BP"),
        new("BATTLE_RANKING_BP_JP", "Japan BP", "Battle Points", "Japan", "BP"),
        new("BATTLE_RANKING_BP_ASIA", "Asia BP", "Battle Points", "Asia", "BP"),
        new("BATTLE_RANKING_RANK_WIN_ALL", "Global Ranked Wins", "Ranked Wins", "All Regions", "Wins"),
        new("BATTLE_RANKING_RANK_WIN_NA", "North America Ranked Wins", "Ranked Wins", "North America", "Wins"),
        new("BATTLE_RANKING_RANK_WIN_EU", "Europe Ranked Wins", "Ranked Wins", "Europe", "Wins"),
        new("BATTLE_RANKING_RANK_WIN_JP", "Japan Ranked Wins", "Ranked Wins", "Japan", "Wins"),
        new("BATTLE_RANKING_RANK_WIN_ASIA", "Asia Ranked Wins", "Ranked Wins", "Asia", "Wins"),
        new("BATTLE_RANKING_CHARA_USED", "Character Usage", "Character Usage", "All Regions", "Score")
    ];

    private readonly ILogger<SteamworksCollector> _logger;
    private readonly string _snapshotsFolder;
    private readonly ConcurrentQueue<string> _queue = new();
    private readonly ConcurrentDictionary<string, RefreshStatus> _refreshes = new();
    private readonly ConcurrentDictionary<string, LeaderboardSnapshot> _snapshots = new();
    private readonly object _stateLock = new();

    private bool _initialized;
    private string _state = "Starting Steamworks";
    private string? _error;
    private string? _accountName;
    private string? _steamId;
    private DateTimeOffset? _lastSuccessful;
    private CaptureJob? _active;

    public SteamworksCollector(ILogger<SteamworksCollector> logger, IWebHostEnvironment environment)
    {
        _logger = logger;
        var root = Environment.GetEnvironmentVariable("NARUTOWIKI_ROOT")
            ?? Path.GetFullPath(Path.Combine(environment.ContentRootPath, "..", "..", ".."));
        _snapshotsFolder = Path.Combine(root, "public", "leaderboards");
        LoadSnapshots();
    }

    public IReadOnlyList<BoardInfoDto> GetBoardInfos() => Boards;

    public SteamConnectionStatus GetStatus()
    {
        lock (_stateLock)
        {
            return new SteamConnectionStatus(
                _initialized,
                _initialized,
                _state,
                _accountName,
                _steamId,
                _steamId is null ? null : $"https://steamcommunity.com/profiles/{_steamId}",
                _error,
                _lastSuccessful);
        }
    }

    public SteamAuthStatus GetAuthStatus()
    {
        lock (_stateLock)
        {
            return new SteamAuthStatus(
                _initialized,
                _initialized,
                false,
                _state,
                _accountName,
                null,
                _error);
        }
    }

    private void SetStatus(string state, string? error = null)
    {
        lock (_stateLock)
        {
            _state = state;
            _error = error;
        }
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        // This is a development-only Steamworks app context, not a separate account login.
        // Steam may reject external use of a game App ID.
        var appIdFile = Path.Combine(AppContext.BaseDirectory, "steam_appid.txt");
        if (!File.Exists(appIdFile))
        {
            await File.WriteAllTextAsync(appIdFile, AppId.ToString(), stoppingToken);
        }

        try
        {
            if (!SteamAPI.Init())
            {
                SetStatus("Steamworks initialization failed",
                    "Steam must be running, the current Steam account must own STORM 4, " +
                    "and Steam must permit this application to use AppID 349040.");
                return;
            }

            _initialized = true;
            _steamId = SteamUser.GetSteamID().m_SteamID.ToString();
            _accountName = SteamFriends.GetPersonaName();
            SetStatus("Connected to Steam Desktop");

            while (!stoppingToken.IsCancellationRequested)
            {
                SteamAPI.RunCallbacks();
                TickCapture();
                await Task.Delay(40, stoppingToken);
            }
        }
        catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
        {
        }
        catch (Exception exception)
        {
            SetStatus("Steamworks error", exception.Message);
            _logger.LogError(exception, "Steamworks worker failed");
        }
        finally
        {
            if (_initialized)
            {
                SteamAPI.Shutdown();
                _initialized = false;
            }
        }
    }

    public sealed record RefreshStatus(
        bool Running,
        bool Succeeded,
        string? Error,
        DateTimeOffset? UpdatedAtUtc);
}
