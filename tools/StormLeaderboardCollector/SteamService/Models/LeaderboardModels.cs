namespace Storm4Leaderboard.Models;

public sealed record LeaderboardEntryDto(
    int GlobalRank,
    string SteamId,
    string PlayerName,
    string? AvatarUrl,
    int Score,
    IReadOnlyList<int> Details,
    string UgcId,
    string SteamProfileUrl);

public sealed record LeaderboardSnapshot(
    uint AppId,
    string Game,
    string BoardName,
    int LeaderboardId,
    int TotalEntries,
    string SortMethod,
    string DisplayType,
    int RangeStart,
    int RangeEnd,
    DateTimeOffset FetchedAtUtc,
    IReadOnlyList<LeaderboardEntryDto> Entries);

public sealed record BoardInfoDto(
    string Name,
    string Label,
    string Category,
    string Region,
    string ScoreLabel);

public sealed record CharacterCatalogEntryDto(
    int Id,
    string Code,
    string DisplayName);

public sealed record CharacterCatalogStatusDto(
    bool Loaded,
    string State,
    string? Source,
    int CharacterCount);

public sealed record CharacterCandidateDto(
    int DetailIndex,
    int RawValue,
    int CharacterId,
    string Code,
    string DisplayName,
    int? FollowingValue);

public sealed record Storm4PlaytimeDto(
    bool Available,
    double? HoursOnRecord,
    double? HoursLastTwoWeeks,
    string Status,
    string Source);

public sealed record PlayerBoardStatDto(
    string BoardName,
    string Label,
    string Category,
    string Region,
    string ScoreLabel,
    bool Found,
    int? GlobalRank,
    int? Score,
    IReadOnlyList<int> Details,
    string? UgcId);

public sealed record PlayerProfileDto(
    string SteamId,
    string PlayerName,
    string? AvatarUrl,
    string SteamProfileUrl,
    DateTimeOffset FetchedAtUtc,
    Storm4PlaytimeDto Playtime,
    IReadOnlyList<PlayerBoardStatDto> Leaderboards);

public sealed record SteamConnectionStatus(
    bool Connected,
    bool LoggedOn,
    string State,
    string? AccountName,
    string? SteamId,
    string? SteamProfileUrl,
    string? LastError,
    DateTimeOffset? LastSuccessfulFetchUtc);

public sealed record SteamAuthStatus(
    bool Connected,
    bool LoggedOn,
    bool AuthenticationRequired,
    string State,
    string? AccountName,
    string? ChallengeUrl,
    string? LastError);
