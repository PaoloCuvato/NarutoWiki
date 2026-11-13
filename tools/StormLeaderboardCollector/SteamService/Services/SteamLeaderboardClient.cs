using System.Collections.Concurrent;
using System.Text.Json;
using Microsoft.AspNetCore.DataProtection;
using SteamKit2;
using SteamKit2.Authentication;
using SteamKit2.Internal;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

public sealed partial class SteamLeaderboardClient : BackgroundService
{
    public const uint Storm4AppId = 349040;
    public const string DefaultBoard = "BATTLE_RANKING_BP_ALL";
    private const int MaxPageSize = 500;

    public static readonly string[] AllowedBoards =
    [
        "BATTLE_RANKING_BP_ALL",
        "BATTLE_RANKING_BP_NA",
        "BATTLE_RANKING_BP_EU",
        "BATTLE_RANKING_BP_JP",
        "BATTLE_RANKING_BP_ASIA",
        "BATTLE_RANKING_RANK_WIN_ALL",
        "BATTLE_RANKING_RANK_WIN_NA",
        "BATTLE_RANKING_RANK_WIN_EU",
        "BATTLE_RANKING_RANK_WIN_JP",
        "BATTLE_RANKING_RANK_WIN_ASIA",
        "BATTLE_RANKING_CHARA_USED"
    ];

    private static readonly IReadOnlyDictionary<string, BoardInfoDto> BoardInfo =
        new Dictionary<string, BoardInfoDto>(StringComparer.Ordinal)
        {
            ["BATTLE_RANKING_BP_ALL"] = new(
                "BATTLE_RANKING_BP_ALL",
                "Global BP",
                "Battle Points",
                "All Regions",
                "BP"),
            ["BATTLE_RANKING_BP_NA"] = new(
                "BATTLE_RANKING_BP_NA",
                "North America BP",
                "Battle Points",
                "North America",
                "BP"),
            ["BATTLE_RANKING_BP_EU"] = new(
                "BATTLE_RANKING_BP_EU",
                "Europe BP",
                "Battle Points",
                "Europe",
                "BP"),
            ["BATTLE_RANKING_BP_JP"] = new(
                "BATTLE_RANKING_BP_JP",
                "Japan BP",
                "Battle Points",
                "Japan",
                "BP"),
            ["BATTLE_RANKING_BP_ASIA"] = new(
                "BATTLE_RANKING_BP_ASIA",
                "Asia BP",
                "Battle Points",
                "Asia",
                "BP"),
            ["BATTLE_RANKING_RANK_WIN_ALL"] = new(
                "BATTLE_RANKING_RANK_WIN_ALL",
                "Global Ranked Wins",
                "Ranked Wins",
                "All Regions",
                "Wins"),
            ["BATTLE_RANKING_RANK_WIN_NA"] = new(
                "BATTLE_RANKING_RANK_WIN_NA",
                "North America Ranked Wins",
                "Ranked Wins",
                "North America",
                "Wins"),
            ["BATTLE_RANKING_RANK_WIN_EU"] = new(
                "BATTLE_RANKING_RANK_WIN_EU",
                "Europe Ranked Wins",
                "Ranked Wins",
                "Europe",
                "Wins"),
            ["BATTLE_RANKING_RANK_WIN_JP"] = new(
                "BATTLE_RANKING_RANK_WIN_JP",
                "Japan Ranked Wins",
                "Ranked Wins",
                "Japan",
                "Wins"),
            ["BATTLE_RANKING_RANK_WIN_ASIA"] = new(
                "BATTLE_RANKING_RANK_WIN_ASIA",
                "Asia Ranked Wins",
                "Ranked Wins",
                "Asia",
                "Wins"),
            ["BATTLE_RANKING_CHARA_USED"] = new(
                "BATTLE_RANKING_CHARA_USED",
                "Character Usage",
                "Character Usage",
                "All Regions",
                "Score")
        };

    private readonly ILogger<SteamLeaderboardClient> _logger;
    private readonly SteamClient _steamClient;
    private readonly CallbackManager _callbackManager;
    private readonly SteamUser _steamUser;
    private readonly SteamUserStats _steamUserStats;
    private readonly SteamFriends _steamFriends;
    private readonly IDataProtector _authProtector;
    private readonly Player _playerService;
    private readonly string _savedAuthPath;
    private readonly string _snapshotsFolder;
    private readonly ConcurrentDictionary<string, LeaderboardSnapshot> _cache = new(StringComparer.Ordinal);
    private readonly ConcurrentDictionary<string, PlayerProfileDto> _profileCache = new(StringComparer.Ordinal);
    private readonly ConcurrentDictionary<string, ResolvedBoard> _boardCache = new(StringComparer.Ordinal);
    private readonly SemaphoreSlim _requestGate = new(1, 1);
    private readonly SemaphoreSlim _playtimeGate = new(2, 2);
    private readonly ConcurrentDictionary<string, PlaytimeCheck> _playtimeChecks = new(StringComparer.Ordinal);
    private readonly ConcurrentDictionary<string, byte> _playtimePending = new(StringComparer.Ordinal);
    private readonly ConcurrentDictionary<string, byte> _refreshPending = new(StringComparer.Ordinal);
    private readonly ConcurrentDictionary<string, RefreshCheck> _refreshChecks = new(StringComparer.Ordinal);
    private readonly object _playtimeFileLock = new();
    private readonly string _playtimeFile;

    private readonly object _stateLock = new();

    // Account login is the default. Anonymous mode is opt-in for diagnostics only.
    private readonly bool _anonymousMode = string.Equals(
        Environment.GetEnvironmentVariable("STORM4_STEAM_AUTH_MODE"),
        "anonymous", StringComparison.OrdinalIgnoreCase);
    private volatile bool _connected;
    private volatile bool _loggedOn;
    private volatile bool _authInProgress;
    private bool _usingSavedToken;
    private string _state = "starting";
    private string? _accountName;
    private string? _accountSteamId;
    private string? _challengeUrl;
    private string? _pendingRefreshToken;
    private string? _lastError;
    private DateTimeOffset? _lastSuccessfulFetchUtc;
    private DateTimeOffset _appContextReadyAtUtc = DateTimeOffset.MinValue;

    public SteamLeaderboardClient(
        ILogger<SteamLeaderboardClient> logger,
        IDataProtectionProvider dataProtectionProvider,
        IWebHostEnvironment environment)
    {
        _logger = logger;
        _steamClient = new SteamClient();
        _callbackManager = new CallbackManager(_steamClient);
        _steamUser = _steamClient.GetHandler<SteamUser>()
            ?? throw new InvalidOperationException("SteamUser handler is unavailable.");
        _steamUserStats = _steamClient.GetHandler<SteamUserStats>()
            ?? throw new InvalidOperationException("SteamUserStats handler is unavailable.");
        _steamFriends = _steamClient.GetHandler<SteamFriends>()
            ?? throw new InvalidOperationException("SteamFriends handler is unavailable.");
        var unifiedMessages = _steamClient.GetHandler<SteamUnifiedMessages>()
            ?? throw new InvalidOperationException("SteamUnifiedMessages handler is unavailable.");
        _playerService = unifiedMessages.CreateService<Player>();

        _authProtector = dataProtectionProvider.CreateProtector("Storm4Leaderboard.SteamAuth.v1");
        var localData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        _savedAuthPath = Path.Combine(localData, "NarutoWiki", "steam-auth.dat");
        var wikiRoot = Environment.GetEnvironmentVariable("NARUTOWIKI_ROOT");
        if (string.IsNullOrWhiteSpace(wikiRoot))
        {
            throw new InvalidOperationException(
                "NARUTOWIKI_ROOT was not set by the collector. Start the collector app rather than the service directly.");
        }

        _snapshotsFolder = Path.Combine(
            Path.GetFullPath(wikiRoot),
            "public",
            "leaderboards");
        _playtimeFile = Path.Combine(_snapshotsFolder, "steam-playtime.json");
        MigrateLegacySnapshots(Path.Combine(Path.GetFullPath(wikiRoot), "steam-api"));
        LoadSnapshots();
        LoadPlaytimeChecks();

        _callbackManager.Subscribe<SteamClient.ConnectedCallback>(OnConnected);
        _callbackManager.Subscribe<SteamClient.DisconnectedCallback>(OnDisconnected);
        _callbackManager.Subscribe<SteamUser.LoggedOnCallback>(OnLoggedOn);
        _callbackManager.Subscribe<SteamUser.LoggedOffCallback>(OnLoggedOff);
    }

    public IReadOnlyList<BoardInfoDto> GetBoardInfos()
        => AllowedBoards.Select(name => BoardInfo[name]).ToArray();

    public SteamConnectionStatus GetStatus()
    {
        lock (_stateLock)
        {
            var profileUrl = string.IsNullOrWhiteSpace(_accountSteamId)
                ? null
                : $"https://steamcommunity.com/profiles/{_accountSteamId}";

            return new SteamConnectionStatus(
                _connected,
                _loggedOn,
                _state,
                _accountName,
                _accountSteamId,
                profileUrl,
                _lastError,
                _lastSuccessfulFetchUtc);
        }
    }

    public SteamAuthStatus GetAuthStatus()
    {
        lock (_stateLock)
        {
            return new SteamAuthStatus(
                _connected,
                _loggedOn,
                !_loggedOn && !_anonymousMode,
                _state,
                _accountName,
                _challengeUrl,
                _lastError);
        }
    }

    public string? GetChallengeUrl()
    {
        lock (_stateLock)
            return _challengeUrl;
    }

    private static Task<T> WaitForSteamAsync<T>(Func<Task<T>> factory, TimeSpan duration, CancellationToken ct)
        => factory().WaitAsync(duration, ct);

    private void EnsureLoggedOn()
    {
        if (!_loggedOn)
            throw new InvalidOperationException(_anonymousMode
                ? $"Anonymous Steam logon unavailable ({GetStatus().State}). Check /api/status; set STORM4_STEAM_AUTH_MODE=account to test the normal account flow."
                : "Steam account login is required. Sign in through the Steam Leaderboard Collector app.");
    }

    private static void ValidateBoard(string boardName)
    {
        if (!AllowedBoards.Contains(boardName, StringComparer.Ordinal))
        {
            throw new ArgumentException("Unknown Storm 4 leaderboard.", nameof(boardName));
        }
    }

    private void MarkOnline(DateTimeOffset fetchedAt)
    {
        lock (_stateLock)
        {
            _lastSuccessfulFetchUtc = fetchedAt;
            _lastError = null;
            _state = $"online · {_accountName ?? "Steam"}";
        }
    }

    private void MarkLeaderboardError(Exception ex)
    {
        lock (_stateLock)
        {
            _lastError = ex.Message;
            _state = "leaderboard error";
        }

        _logger.LogError(ex, "Storm 4 leaderboard request failed.");
    }

    private void SetState(string state)
    {
        lock (_stateLock)
            _state = state;
    }

    private static string CacheKey(string boardName, int start, int end) => $"{boardName}:{start}:{end}";

    private sealed record ResolvedBoard(int Id, int EntryCount, string SortMethod, string DisplayType, DateTimeOffset FetchedAtUtc);
    private sealed record StoredAuth(string AccountName, string RefreshToken);
}
