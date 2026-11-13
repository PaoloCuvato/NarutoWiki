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
    public async Task<PlayerProfileDto> GetPlayerProfileAsync(
        string steamIdText,
        bool forceRefresh,
        CancellationToken cancellationToken)
    {
        EnsureLoggedOn();

        if (!ulong.TryParse(steamIdText, out var steamIdValue))
        {
            throw new ArgumentException("Invalid SteamID64.", nameof(steamIdText));
        }
        var steamId = new SteamID(steamIdValue);
        var cacheKey = steamIdValue.ToString();

        if (!forceRefresh && _profileCache.TryGetValue(cacheKey, out var cached) &&
            DateTimeOffset.UtcNow - cached.FetchedAtUtc < TimeSpan.FromMinutes(2))
        {
            return cached;
        }

        await WaitForAppContextAsync(cancellationToken);
        await _requestGate.WaitAsync(cancellationToken);

        try
        {
            if (!forceRefresh && _profileCache.TryGetValue(cacheKey, out cached) &&
                DateTimeOffset.UtcNow - cached.FetchedAtUtc < TimeSpan.FromMinutes(2))
            {
                return cached;
            }

            SetState($"reading player {steamIdValue}");
            await RequestPersonaDataAsync([steamId], cancellationToken);

            var playerName = GetPersonaName(steamId);
            var avatarUrl = GetAvatarUrl(steamId);
            var stats = new List<PlayerBoardStatDto>(AllowedBoards.Length);

            foreach (var boardName in AllowedBoards)
            {
                cancellationToken.ThrowIfCancellationRequested();
                var metadata = BoardInfo[boardName];
                var board = await ResolveBoardAsync(boardName, cancellationToken);

                SteamUserStats.LeaderboardEntriesCallback response;
                try
                {
                    response = await DownloadLeaderboardEntriesForUsersCompatAsync(
                        board.Id,
                        [steamId]);
                }
                catch (TaskCanceledException ex) when (!cancellationToken.IsCancellationRequested)
                {
                    throw new TimeoutException($"Steam timed out while reading {metadata.Label} for {steamIdValue}.", ex);
                }

                var entry = response.Result == EResult.OK ? response.Entries.FirstOrDefault() : null;
                var details = entry?.Details.ToArray() ?? [];

                stats.Add(new PlayerBoardStatDto(
                    boardName,
                    metadata.Label,
                    metadata.Category,
                    metadata.Region,
                    metadata.ScoreLabel,
                    entry is not null,
                    entry?.GlobalRank,
                    entry?.Score,
                    details,
                    entry?.UGCId.ToString()));
            }

            var playtime = await GetStorm4PlaytimeAsync(steamIdValue, cancellationToken);

            var profile = new PlayerProfileDto(
                steamIdValue.ToString(),
                playerName,
                avatarUrl,
                $"https://steamcommunity.com/profiles/{steamIdValue}",
                DateTimeOffset.UtcNow,
                playtime,
                stats);

            _profileCache[cacheKey] = profile;
            MarkOnline(profile.FetchedAtUtc);
            return profile;
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

    private async Task RequestPersonaDataAsync(IReadOnlyCollection<SteamID> steamIds, CancellationToken cancellationToken)
    {
        if (steamIds.Count == 0)
        {
            return;
        }
        _steamFriends.RequestFriendInfo(steamIds);
        await Task.Delay(500, cancellationToken);
    }

    private LeaderboardEntryDto ToEntryDto(SteamUserStats.LeaderboardEntriesCallback.LeaderboardEntry entry)
    {
        var steamId64 = entry.SteamID.ConvertToUInt64().ToString();
        return new LeaderboardEntryDto(
            entry.GlobalRank,
            steamId64,
            GetPersonaName(entry.SteamID),
            GetAvatarUrl(entry.SteamID),
            entry.Score,
            entry.Details.ToArray(),
            entry.UGCId.ToString(),
            $"https://steamcommunity.com/profiles/{steamId64}");
    }

    private string GetPersonaName(SteamID steamId)
    {
        var name = _steamFriends.GetFriendPersonaName(steamId);
        if (!string.IsNullOrWhiteSpace(name) && name != "[unknown]")
        {
            return name;
        }
        return steamId.ConvertToUInt64().ToString();
    }

    private string? GetAvatarUrl(SteamID steamId)
    {
        var hash = _steamFriends.GetFriendAvatar(steamId);
        if (hash is null || hash.Length == 0 || hash.All(x => x == 0))
        {
            return null;
        }
        var hex = Convert.ToHexString(hash).ToLowerInvariant();
        return $"https://avatars.cloudflare.steamstatic.com/{hex}_full.jpg";
    }
}
