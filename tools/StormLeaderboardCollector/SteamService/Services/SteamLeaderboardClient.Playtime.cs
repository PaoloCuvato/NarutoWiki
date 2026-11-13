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
    // Never treat hidden playtime as zero hours. Steam returns null for private profiles.
    public IReadOnlyDictionary<string, PlaytimeCheck> GetPlaytimeChecks(IEnumerable<string> steamIds)
    {
        var output = new Dictionary<string, PlaytimeCheck>(StringComparer.Ordinal);
        foreach (var id in steamIds.Distinct(StringComparer.Ordinal).Take(250))
        {
            if (!ulong.TryParse(id, out var steamId))
            {
                continue;
            }
            if (_playtimeChecks.TryGetValue(id, out var known))
            {
                output[id] = known;
                // Retry unavailable profiles occasionally, not on every poll.
                if (DateTimeOffset.UtcNow - known.CheckedAtUtc < (known.Available ? TimeSpan.FromHours(24) : TimeSpan.FromMinutes(30)))
                {
                    continue;
                }
            }
            if (_loggedOn && _playtimePending.Count < 8 && _playtimePending.TryAdd(id, 0))
            {
                _ = Task.Run(() => FetchPlaytimeAsync(id, steamId));
            }
        }
        return output;
    }

    private async Task FetchPlaytimeAsync(string id, ulong steamId)
    {
        var entered = false;
        try
        {
            // Limit concurrent lookups; the leaderboard capture never waits on these.
            await _playtimeGate.WaitAsync();
            entered = true;
            using var deadline = new CancellationTokenSource(TimeSpan.FromSeconds(9));
            var playtime = await GetStorm4PlaytimeAsync(steamId, deadline.Token);
            _playtimeChecks[id] = new PlaytimeCheck(playtime.Available, playtime.HoursOnRecord,
                playtime.Status, DateTimeOffset.UtcNow);
            SavePlaytimeChecks();
        }
        catch (Exception ex)
        {
            _playtimeChecks[id] = new PlaytimeCheck(false, null, "Playtime could not be verified", DateTimeOffset.UtcNow);
            _logger.LogDebug(ex, "Playtime lookup unavailable for {SteamId}", id);
        }
        finally
        {
            if (entered)
            {
                _playtimeGate.Release();
            }
            _playtimePending.TryRemove(id, out _);
        }
    }

    private void LoadPlaytimeChecks()
    {
        try
        {
            if (!File.Exists(_playtimeFile))
            {
                return;
            }

            var values = JsonSerializer.Deserialize<Dictionary<string, PlaytimeCheck>>(
                File.ReadAllText(_playtimeFile));
            if (values is null)
            {
                return;
            }

            foreach (var (id, data) in values)
            {
                _playtimeChecks[id] = data;
            }
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Could not read saved playtime checks");
        }
    }

    private void SavePlaytimeChecks()
    {
        lock (_playtimeFileLock)
        {
            try
            {
                Directory.CreateDirectory(_snapshotsFolder);
                var temp = _playtimeFile + ".tmp";
                File.WriteAllText(temp, JsonSerializer.Serialize(_playtimeChecks.ToDictionary(x => x.Key, x => x.Value)));
                File.Move(temp, _playtimeFile, true);
            }
            catch (Exception ex)
            {
                _logger.LogDebug(ex, "Could not save playtime cache");
            }
        }
    }

    private async Task<Storm4PlaytimeDto> GetStorm4PlaytimeAsync(
        ulong steamIdValue,
        CancellationToken cancellationToken)
    {
        cancellationToken.ThrowIfCancellationRequested();

        try
        {
            var request = new CPlayer_GetOwnedGames_Request
            {
                steamid = steamIdValue,
                include_appinfo = false,
                include_played_free_games = true
            };
            request.appids_filter.Add(Storm4AppId);

            var response = await WaitForSteamAsync(
                async () => await _playerService.GetOwnedGames(request),
                TimeSpan.FromSeconds(6), cancellationToken);
            if (response.Result != EResult.OK)
            {
                return new Storm4PlaytimeDto(
                    false,
                    null,
                    null,
                    $"Steam returned {response.Result} for STORM 4 playtime.",
                    "Steam Player.GetOwnedGames#1");
            }

            var game = response.Body.games.FirstOrDefault(x => x.appid == (int)Storm4AppId);
            if (game is null)
            {
                return new Storm4PlaytimeDto(
                    false,
                    null,
                    null,
                    "STORM 4 playtime is private or not exposed for this player.",
                    "Steam Player.GetOwnedGames#1");
            }

            double? hoursOnRecord = game.ShouldSerializeplaytime_forever()
                ? game.playtime_forever / 60.0
                : null;
            double? hoursLastTwoWeeks = game.ShouldSerializeplaytime_2weeks()
                ? game.playtime_2weeks / 60.0
                : null;

            return new Storm4PlaytimeDto(
                hoursOnRecord.HasValue || hoursLastTwoWeeks.HasValue,
                hoursOnRecord,
                hoursLastTwoWeeks,
                hoursOnRecord.HasValue || hoursLastTwoWeeks.HasValue
                    ? "STORM 4 playtime from Steam"
                    : "Steam found STORM 4 but did not expose playtime minutes.",
                "Steam Player.GetOwnedGames#1");
        }
        catch (TaskCanceledException) when (!cancellationToken.IsCancellationRequested)
        {
            return new Storm4PlaytimeDto(
                false,
                null,
                null,
                "Steam timed out while reading STORM 4 playtime.",
                "Steam Player.GetOwnedGames#1");
        }
        catch (Exception ex) when (!cancellationToken.IsCancellationRequested)
        {
            _logger.LogDebug(ex, "Could not read STORM 4 playtime for {SteamId}.", steamIdValue);
            return new Storm4PlaytimeDto(
                false,
                null,
                null,
                "STORM 4 playtime could not be read.",
                "Steam Player.GetOwnedGames#1");
        }
    }
}
