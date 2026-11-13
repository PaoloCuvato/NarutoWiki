using System.Xml.Linq;
using SteamKit2;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

public sealed partial class SteamLeaderboardClient
{
    private static readonly HttpClient DiscoveryClient = new()
    {
        Timeout = TimeSpan.FromSeconds(10)
    };

    public static IReadOnlyList<SteamGameInfo> SupportedGames { get; } =
    [
        new(495140, "STORM 1"),
        new(543870, "STORM 2"),
        new(234670, "STORM 3 Full Burst"),
        new(272510, "STORM Revolution"),
        new(349040, "STORM 4"),
        new(1020790, "STORM Connections")
    ];

    private readonly object _multiCaptureLock = new();
    private MultiCaptureStatus _multiCapture = new(false, 0, 0, 0, "Ready", null);

    public MultiCaptureStatus GetMultiCaptureStatus()
    {
        lock (_multiCaptureLock)
        {
            return _multiCapture;
        }
    }

    public MultiCaptureStatus StartMultiCapture()
    {
        EnsureLoggedOn();

        lock (_multiCaptureLock)
        {
            if (_multiCapture.Running)
            {
                return _multiCapture;
            }

            _multiCapture = new(true, 0, 0, 0, "Finding Steam leaderboards", null);
        }

        _ = Task.Run(CaptureAllGamesAsync);
        return GetMultiCaptureStatus();
    }

    private void UpdateMultiCapture(
        int processed,
        int found,
        int saved,
        string message,
        string? error = null,
        bool running = true,
        double progressPercent = 0)
    {
        lock (_multiCaptureLock)
        {
            _multiCapture = new(running, processed, found, saved, message, error, progressPercent);
        }
    }

    private async Task CaptureAllGamesAsync()
    {
        var processed = 0;
        var found = 0;
        var saved = 0;
        var failures = new List<string>();
        var storage = new LeaderboardCaptureStorage(_snapshotsFolder);

        try
        {
            foreach (var game in SupportedGames)
            {
                if (!_loggedOn)
                {
                    failures.Add("Steam disconnected; reconnect and resume Capture All.");
                    break;
                }

                var boardNames = game.AppId == Storm4AppId
                    ? AllowedBoards.ToArray()
                    : await DiscoverBoardsAsync(game.AppId);

                if (boardNames.Length == 0)
                {
                    failures.Add($"{game.Name}: Steam did not expose a public board catalog");
                    processed++;
                    UpdateMultiCapture(
                        processed, found, saved, $"Checked {game.Name}",
                        progressPercent: 100.0 * processed / SupportedGames.Count);
                    continue;
                }

                var metadata = boardNames.Select(name =>
                    game.AppId == Storm4AppId
                        ? GetBoardInfos().First(board => board.Name == name)
                        : new BoardInfoDto(name, name.Replace('_', ' '), "Leaderboard", "All Regions", "Score"))
                    .ToArray();

                try
                {
                    await storage.SaveCatalogAsync(game.AppId, metadata, CancellationToken.None);
                }
                catch (Exception ex)
                {
                    failures.Add($"{game.Name}: could not write board catalog ({ex.Message})");
                    continue;
                }

                found += boardNames.Length;

                var completedBoardsInGame = 0;
                foreach (var boardName in boardNames)
                {
                    try
                    {
                        await CaptureCompleteBoardAsync(game, boardName, storage,
                            (captured, total) => UpdateMultiCapture(
                                processed,
                                found,
                                saved,
                                $"{game.Name}: {boardName} — {captured:N0} / {total:N0} players",
                                progressPercent: 100.0 *
                                    (processed + (completedBoardsInGame +
                                        (total == 0 ? 1.0 : (double)captured / total)) /
                                        boardNames.Length) / SupportedGames.Count));

                        saved++;
                    }
                    catch (Exception ex)
                    {
                        failures.Add($"{game.Name}/{boardName}: {ex.Message}");
                        _logger.LogWarning(ex, "Could not finish {Game}/{Board}", game.Name, boardName);
                    }
                    finally
                    {
                        completedBoardsInGame++;
                    }
                }

                processed++;
                UpdateMultiCapture(
                    processed, found, saved, $"Finished {game.Name}",
                    progressPercent: 100.0 * processed / SupportedGames.Count);
            }
        }
        catch (Exception ex)
        {
            failures.Add(ex.Message);
        }
        finally
        {
            UpdateMultiCapture(
                processed,
                found,
                saved,
                $"Captured {saved} of {found} boards across {processed} games",
                failures.Count > 0 ? string.Join(" | ", failures.Take(4)) : null,
                running: false,
                progressPercent: 100.0 * processed / SupportedGames.Count);
        }
    }

    private async Task CaptureCompleteBoardAsync(
        SteamGameInfo game,
        string boardName,
        LeaderboardCaptureStorage storage,
        Action<int, int> onProgress)
    {
        // All Steam leaderboard calls share one gate. Do not overlap jobs.
        await _requestGate.WaitAsync();

        try
        {
            using var lookupDeadline = new CancellationTokenSource(TimeSpan.FromSeconds(20));
            var board = await WaitForSteamAsync(
                async () => await _steamUserStats.FindLeaderboard(game.AppId, boardName),
                TimeSpan.FromSeconds(15),
                lookupDeadline.Token);

            if (board.Result != EResult.OK)
            {
                throw new InvalidOperationException($"FindLeaderboard returned {board.Result}");
            }

            var total = Math.Max(0, board.EntryCount);
            var previous = storage.LoadManifest(game.AppId, boardName);
            var captured = 0;

            // Validate every saved batch, not only the final batch.
            // A missing middle file must never be counted as captured.
            if (previous is not null &&
                previous.TotalEntries == total &&
                previous.ChunkSize == LeaderboardCaptureStorage.ChunkSize)
            {
                var verifiedEnd = 0;

                for (var start = 1; start <= previous.CapturedEntries; start += LeaderboardCaptureStorage.ChunkSize)
                {
                    var end = Math.Min(total, start + LeaderboardCaptureStorage.ChunkSize - 1);
                    if (!storage.HasChunk(game.AppId, boardName, start, end))
                    {
                        break;
                    }

                    verifiedEnd = end;
                }

                if (!previous.Complete || verifiedEnd < total)
                {
                    captured = verifiedEnd;
                }
            }

            var manifest = new BoardCaptureManifest(
                game.AppId,
                boardName,
                total,
                captured,
                LeaderboardCaptureStorage.ChunkSize,
                false,
                DateTimeOffset.UtcNow);

            // Keep the prior completed snapshot visible until the first
            // replacement page is actually downloaded successfully.
            if (captured > 0 || total == 0)
            {
                await storage.SaveManifestAsync(manifest, CancellationToken.None);
            }

            onProgress(captured, total);

            while (captured < total)
            {
                if (!_loggedOn)
                {
                    throw new InvalidOperationException("Steam session disconnected");
                }

                var start = captured + 1;
                var end = Math.Min(total, start + LeaderboardCaptureStorage.ChunkSize - 1);
                SteamUserStats.LeaderboardEntriesCallback? response = null;

                for (var attempt = 1; attempt <= 3; attempt++)
                {
                    try
                    {
                        using var deadline = new CancellationTokenSource(TimeSpan.FromSeconds(20));
                        response = await WaitForSteamAsync(
                            async () => await _steamUserStats.GetLeaderboardEntries(
                                game.AppId,
                                board.ID,
                                start,
                                end,
                                ELeaderboardDataRequest.Global),
                            TimeSpan.FromSeconds(16),
                            deadline.Token);

                        if (response.Result != EResult.OK)
                        {
                            throw new InvalidOperationException(
                                $"GetLeaderboardEntries returned {response.Result}");
                        }

                        break;
                    }
                    catch (Exception ex) when (attempt < 3)
                    {
                        _logger.LogWarning(ex,
                            "Retrying {Game}/{Board} ranks {Start}-{End}, attempt {Attempt}",
                            game.Name,
                            boardName,
                            start,
                            end,
                            attempt);

                        await Task.Delay(TimeSpan.FromMilliseconds(750 * attempt));
                    }
                }

                if (response is null)
                {
                    throw new InvalidOperationException($"No leaderboard response for ranks {start}-{end}");
                }

                var entries = response.Entries.ToArray();
                var expected = end - start + 1;

                // Never call a truncated page complete. This also protects against
                // Steam imposing a smaller per-request limit than expected.
                if (entries.Length != expected)
                {
                    throw new InvalidOperationException(
                        $"Steam returned {entries.Length} of {expected} requested entries " +
                        $"for ranks {start}-{end}; capture paused without skipping players");
                }

                // Resolve display names/avatars where Steam exposes them. If this
                // fails, still persist the real Steam IDs, ranks and scores.
                using var personaDeadline = new CancellationTokenSource(TimeSpan.FromSeconds(4));
                try
                {
                    await RequestPersonaDataAsync(
                        entries.Select(item => item.SteamID).ToArray(),
                        personaDeadline.Token);
                }
                catch (OperationCanceledException)
                {
                }

                var snapshot = new LeaderboardSnapshot(
                    game.AppId,
                    game.Name,
                    boardName,
                    board.ID,
                    total,
                    board.SortMethod.ToString(),
                    board.DisplayType.ToString(),
                    start,
                    end,
                    DateTimeOffset.UtcNow,
                    entries.Select(ToEntryDto).ToArray());

                // Commit each page before advancing the manifest. Failed captures
                // preserve all previously downloaded pages for later resumption.
                await storage.SaveChunkAsync(snapshot, CancellationToken.None);
                captured = end;

                manifest = manifest with
                {
                    CapturedEntries = captured,
                    UpdatedAtUtc = DateTimeOffset.UtcNow
                };

                await storage.SaveManifestAsync(manifest, CancellationToken.None);
                onProgress(captured, total);

                // Give Steam space between jobs rather than flooding callbacks.
                await Task.Delay(125);
            }

            manifest = manifest with
            {
                Complete = true,
                UpdatedAtUtc = DateTimeOffset.UtcNow
            };

            await storage.SaveManifestAsync(manifest, CancellationToken.None);
        }
        finally
        {
            _requestGate.Release();
        }
    }

    private static async Task<string[]> DiscoverBoardsAsync(uint appId)
    {
        // This public catalog is not available for every title. No fabricated
        // board names are returned when discovery is unavailable.
        var uri = $"https://steamcommunity.com/stats/{appId}/leaderboards/?xml=1";

        try
        {
            using var response = await DiscoveryClient.GetAsync(uri);
            if (!response.IsSuccessStatusCode)
            {
                return [];
            }

            var xml = await response.Content.ReadAsStringAsync();
            var document = XDocument.Parse(xml);

            return document.Descendants()
                .Where(element => element.Name.LocalName.Equals(
                    "leaderboard", StringComparison.OrdinalIgnoreCase))
                .Select(element => element.Elements().FirstOrDefault(child =>
                    child.Name.LocalName.Equals("name", StringComparison.OrdinalIgnoreCase))
                    ?.Value?.Trim())
                .Where(name => !string.IsNullOrWhiteSpace(name))
                .Select(name => name!)
                .Distinct(StringComparer.Ordinal)
                .Take(10_000)
                .ToArray();
        }
        catch (HttpRequestException)
        {
            return [];
        }
        catch (TaskCanceledException)
        {
            return [];
        }
        catch (System.Xml.XmlException)
        {
            return [];
        }
    }
}

public sealed record SteamGameInfo(uint AppId, string Name);

public sealed record MultiCaptureStatus(
    bool Running,
    int GamesProcessed,
    int BoardsFound,
    int BoardsSaved,
    string Message,
    string? Error,
    double ProgressPercent = 0);
