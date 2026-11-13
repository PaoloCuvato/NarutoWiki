using Steamworks;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

public sealed partial class SteamworksCollector
{
    private sealed class CaptureJob
    {
        public required string BoardName { get; init; }
        public DateTimeOffset StartedAt { get; } = DateTimeOffset.UtcNow;
        public CallResult<LeaderboardFindResult_t>? FindResult { get; set; }
        public CallResult<LeaderboardScoresDownloaded_t>? ScoresResult { get; set; }
        public SteamLeaderboard_t Leaderboard { get; set; }
    }

    public IResult StartRefresh(string name)
    {
        if (!Boards.Any(board => board.Name == name))
        {
            return Results.BadRequest(new { error = "Unknown leaderboard" });
        }

        if (!_initialized)
        {
            return Results.Problem(
                title: "Steamworks unavailable",
                detail: GetStatus().LastError ?? GetStatus().State,
                statusCode: 503);
        }

        var current = _refreshes.GetOrAdd(
            name,
            _ => new RefreshStatus(false, false, null, null));

        if (current.Running)
        {
            return Results.Ok(current);
        }

        var pending = new RefreshStatus(true, false, null, DateTimeOffset.UtcNow);
        _refreshes[name] = pending;
        _queue.Enqueue(name);
        return Results.Ok(pending);
    }

    public RefreshStatus GetRefreshStatus(string name)
    {
        return _refreshes.TryGetValue(name, out var status)
            ? status
            : new RefreshStatus(false, false, null, null);
    }

    private void TickCapture()
    {
        if (_active is not null)
        {
            if (DateTimeOffset.UtcNow - _active.StartedAt > TimeSpan.FromSeconds(18))
            {
                FailCapture("Steam did not answer within 18 seconds.");
            }

            return;
        }

        if (!_queue.TryDequeue(out var name))
        {
            return;
        }

        _active = new CaptureJob { BoardName = name };
        SetStatus($"Finding {name}");

        try
        {
            _active.FindResult = CallResult<LeaderboardFindResult_t>.Create();
            _active.FindResult.Set(
                SteamUserStats.FindLeaderboard(name),
                OnLeaderboardFound);
        }
        catch (Exception exception)
        {
            FailCapture(exception.Message);
        }
    }

    private void OnLeaderboardFound(LeaderboardFindResult_t result, bool ioFailure)
    {
        if (_active is null)
        {
            return;
        }

        if (ioFailure || result.m_bLeaderboardFound == 0)
        {
            FailCapture("Steam did not return this leaderboard for the current App ID.");
            return;
        }

        try
        {
            _active.Leaderboard = result.m_hSteamLeaderboard;
            _active.ScoresResult = CallResult<LeaderboardScoresDownloaded_t>.Create();
            _active.ScoresResult.Set(
                SteamUserStats.DownloadLeaderboardEntries(
                    _active.Leaderboard,
                    ELeaderboardDataRequest.k_ELeaderboardDataRequestGlobal,
                    1,
                    250),
                OnScoresDownloaded);
            SetStatus($"Downloading {_active.BoardName}");
        }
        catch (Exception exception)
        {
            FailCapture(exception.Message);
        }
    }

    private void OnScoresDownloaded(LeaderboardScoresDownloaded_t result, bool ioFailure)
    {
        if (_active is null)
        {
            return;
        }

        if (ioFailure)
        {
            FailCapture("Steam could not download the leaderboard entries.");
            return;
        }

        try
        {
            var entries = new List<LeaderboardEntryDto>(result.m_cEntryCount);

            for (var index = 0; index < result.m_cEntryCount; index++)
            {
                var details = new int[64];

                if (!SteamUserStats.GetDownloadedLeaderboardEntry(
                        result.m_hSteamLeaderboardEntries,
                        index,
                        out var entry,
                        details,
                        details.Length))
                {
                    continue;
                }

                var id = entry.m_steamIDUser.m_SteamID.ToString();
                SteamFriends.RequestUserInformation(entry.m_steamIDUser, true);
                var name = SteamFriends.GetFriendPersonaName(entry.m_steamIDUser);

                if (string.IsNullOrWhiteSpace(name) || name == "[unknown]")
                {
                    name = id;
                }

                entries.Add(new LeaderboardEntryDto(
                    entry.m_nGlobalRank,
                    id,
                    name,
                    null,
                    entry.m_nScore,
                    details.Take(Math.Clamp(entry.m_cDetails, 0, details.Length)).ToArray(),
                    "0",
                    $"https://steamcommunity.com/profiles/{id}"));
            }

            var boardName = _active.BoardName;
            var leaderboard = _active.Leaderboard;
            var snapshot = new LeaderboardSnapshot(
                AppId,
                "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
                boardName,
                unchecked((int)leaderboard.m_SteamLeaderboard),
                SteamUserStats.GetLeaderboardEntryCount(leaderboard),
                SteamUserStats.GetLeaderboardSortMethod(leaderboard).ToString(),
                SteamUserStats.GetLeaderboardDisplayType(leaderboard).ToString(),
                1,
                250,
                DateTimeOffset.UtcNow,
                entries);

            SaveSnapshot(snapshot);
            _lastSuccessful = snapshot.FetchedAtUtc;
            _refreshes[boardName] = new RefreshStatus(false, true, null, DateTimeOffset.UtcNow);
            _active = null;
            SetStatus("Connected to Steam Desktop");
        }
        catch (Exception exception)
        {
            FailCapture(exception.Message);
        }
    }

    private void FailCapture(string error)
    {
        if (_active is null)
        {
            return;
        }

        _logger.LogWarning("Capture {Board} failed: {Error}", _active.BoardName, error);
        _refreshes[_active.BoardName] = new RefreshStatus(
            false,
            false,
            error,
            DateTimeOffset.UtcNow);
        _active = null;
        SetStatus("Connected to Steam Desktop", error);
    }
}
