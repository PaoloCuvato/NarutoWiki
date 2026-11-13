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
    public bool TryGetCached(string boardName, int start, int end, out LeaderboardSnapshot? snapshot)
        => _cache.TryGetValue(CacheKey(boardName, start, end), out snapshot);

    // Refresh requests are accepted immediately. The last successful snapshot remains visible.
    public RefreshCheck StartRefresh(string board, int start = 1, int end = 250)
    {
        ValidateBoard(board);
        start = Math.Max(1, start);
        end = Math.Clamp(end, start, start + MaxPageSize - 1);
        var key = CacheKey(board, start, end);
        if (_refreshPending.TryAdd(key, 0))
        {
            var current = new RefreshCheck(true, false, null, DateTimeOffset.UtcNow);
            _refreshChecks[key] = current;
            _ = Task.Run(async () =>
            {
                try
                {
                    using var deadline = new CancellationTokenSource(TimeSpan.FromSeconds(22));
                    await GetLeaderboardAsync(board, start, end, true, deadline.Token);
                    _refreshChecks[key] = new RefreshCheck(false, true, null, DateTimeOffset.UtcNow);
                }
                catch (Exception ex)
                {
                    _logger.LogWarning(ex, "Steam refresh failed for {Board}", board);
                    _refreshChecks[key] = new RefreshCheck(false, false, ex.Message, DateTimeOffset.UtcNow);
                }
                finally
                {
                    _refreshPending.TryRemove(key, out _);
                }
            });
            return current;
        }
        return _refreshChecks.TryGetValue(key, out var status)
            ? status : new RefreshCheck(true, false, null, DateTimeOffset.UtcNow);
    }

    public RefreshCheck GetRefreshStatus(string board, int start = 1, int end = 250)
    {
        ValidateBoard(board);
        return _refreshChecks.TryGetValue(CacheKey(board, start, end), out var status)
            ? status : new RefreshCheck(false, false, null, null);
    }

    public sealed record PlaytimeCheck(bool Available, double? HoursOnRecord, string Status, DateTimeOffset CheckedAtUtc);
    public sealed record RefreshCheck(bool Running, bool Succeeded, string? Error, DateTimeOffset? UpdatedAtUtc);
}
