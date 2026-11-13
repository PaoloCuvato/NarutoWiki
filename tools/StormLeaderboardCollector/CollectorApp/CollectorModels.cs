namespace StormLeaderboardCollector;

internal sealed record BoardInfo(
    string Name,
    string Label,
    string Category,
    string Region,
    string ScoreLabel);

internal sealed record BoardResponse(
    string DefaultBoard,
    BoardInfo[] Boards);

internal sealed record AuthStatus(
    bool LoggedOn,
    string? AccountName,
    string? State,
    string? ChallengeUrl,
    string? LastError);

internal sealed record RefreshStatus(
    bool Running,
    bool Succeeded,
    string? Error);

internal sealed record MultiCaptureStatus(
    bool Running,
    int GamesProcessed,
    int BoardsFound,
    int BoardsSaved,
    string Message,
    string? Error,
    double ProgressPercent);
