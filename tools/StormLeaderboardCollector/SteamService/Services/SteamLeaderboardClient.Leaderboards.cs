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
    public async Task<LeaderboardSnapshot> GetLeaderboardAsync(
        string boardName,
        int start,
        int end,
        bool forceRefresh,
        CancellationToken cancellationToken)
    {
        ValidateBoard(boardName);

        start = Math.Max(1, start);
        end = Math.Max(start, end);
        end = Math.Min(end, start + MaxPageSize - 1);

        var cacheKey = CacheKey(boardName, start, end);
        if (!forceRefresh && _cache.TryGetValue(cacheKey, out var cached))
        {
            return cached;
        }
        EnsureLoggedOn();
        await WaitForAppContextAsync(cancellationToken);
        await _requestGate.WaitAsync(cancellationToken);

        try
        {
            if (!forceRefresh && _cache.TryGetValue(cacheKey, out cached))
            {
                return cached;
            }
            var board = await ResolveBoardAsync(boardName, cancellationToken);
            SetState($"reading {BoardInfo[boardName].Label} {start:N0}-{end:N0}");

            SteamUserStats.LeaderboardEntriesCallback response;
            try
            {
                response = await WaitForSteamAsync(
                    async () => await _steamUserStats.GetLeaderboardEntries(
                        Storm4AppId, board.Id, start, end, ELeaderboardDataRequest.Global),
                    TimeSpan.FromSeconds(16), cancellationToken);
            }
            catch (TaskCanceledException ex) when (!cancellationToken.IsCancellationRequested)
            {
                throw new TimeoutException(
                    $"Steam found {boardName} but did not answer the entry request for ranks {start}-{end}.",
                    ex);
            }

            if (response.Result != EResult.OK)
                throw new InvalidOperationException($"GetLeaderboardEntries returned {response.Result} for {boardName}.");

            var steamIds = response.Entries.Select(x => x.SteamID).ToArray();
            await RequestPersonaDataAsync(steamIds, cancellationToken);

            var entries = response.Entries.Select(ToEntryDto).ToArray();
            var snapshot = new LeaderboardSnapshot(
                Storm4AppId,
                "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
                boardName,
                board.Id,
                board.EntryCount,
                board.SortMethod,
                board.DisplayType,
                start,
                end,
                DateTimeOffset.UtcNow,
                entries);

            _cache[cacheKey] = snapshot;
            SaveSnapshot(snapshot);
            MarkOnline(snapshot.FetchedAtUtc);
            return snapshot;
        }
        catch (Exception ex)
        {
            MarkLeaderboardError(ex);
            throw;
        }
        finally
        {
            _requestGate.Release();
        }
    }

    private async Task<SteamUserStats.LeaderboardEntriesCallback> DownloadLeaderboardEntriesForUsersCompatAsync(
        int leaderboardId,
        IReadOnlyCollection<SteamID> users)
    {
        var msg = new ClientMsgProtobuf<CMsgClientLBSGetLBEntries>(EMsg.ClientLBSGetLBEntries);
        msg.SourceJobID = _steamClient.GetNextJobID();
        msg.ProtoHeader.routing_appid = Storm4AppId;

        msg.Body.app_id = (int)Storm4AppId;
        msg.Body.leaderboard_id = leaderboardId;
        msg.Body.leaderboard_data_request = (int)ELeaderboardDataRequest.Users;

        foreach (var user in users)
            msg.Body.steamids.Add(user.ConvertToUInt64());

        var job = new AsyncJob<SteamUserStats.LeaderboardEntriesCallback>(_steamClient, msg.SourceJobID);
        _steamClient.Send(msg);
        return await job;
    }

    private async Task<ResolvedBoard> ResolveBoardAsync(string boardName, CancellationToken cancellationToken, bool forceRefresh = false)
    {
        if (!forceRefresh && _boardCache.TryGetValue(boardName, out var cached) &&
            DateTimeOffset.UtcNow - cached.FetchedAtUtc < TimeSpan.FromHours(24))
        {
            return cached;
        }

        SetState($"finding {BoardInfo[boardName].Label}");
        _logger.LogInformation(
            "Finding Storm 4 leaderboard {Board} for AppID {AppId} as {Account}.",
            boardName,
            Storm4AppId,
            _accountName ?? "Steam session");

        SteamUserStats.FindOrCreateLeaderboardCallback board;
        try
        {
            board = await WaitForSteamAsync(
                async () => await _steamUserStats.FindLeaderboard(Storm4AppId, boardName),
                TimeSpan.FromSeconds(14), cancellationToken);
        }
        catch (TaskCanceledException ex) when (!cancellationToken.IsCancellationRequested)
        {
            throw new TimeoutException(
                $"Steam did not answer FindLeaderboard for {boardName}. Make sure the signed-in Steam account can access STORM 4 (AppID {Storm4AppId}).",
                ex);
        }

        if (board.Result != EResult.OK)
            throw new InvalidOperationException($"FindLeaderboard returned {board.Result} for {boardName}.");

        var resolved = new ResolvedBoard(
            board.ID,
            board.EntryCount,
            board.SortMethod.ToString(),
            board.DisplayType.ToString(),
            DateTimeOffset.UtcNow);

        _boardCache[boardName] = resolved;
        _logger.LogInformation(
            "Found {Board}: ID={LeaderboardId}, entries={EntryCount}, sort={Sort}, display={Display}.",
            boardName,
            resolved.Id,
            resolved.EntryCount,
            resolved.SortMethod,
            resolved.DisplayType);

        return resolved;
    }
}
