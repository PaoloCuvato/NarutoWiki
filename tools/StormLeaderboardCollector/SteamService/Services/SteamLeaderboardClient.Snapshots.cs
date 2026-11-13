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
    private void MigrateLegacySnapshots(string contentRoot)
    {
        var oldFolder = Path.Combine(contentRoot, "data", "leaderboards");
        if (!Directory.Exists(oldFolder))
        {
            return;
        }

        Directory.CreateDirectory(_snapshotsFolder);
        foreach (var source in Directory.EnumerateFiles(oldFolder, "*.json"))
        {
            var destination = Path.Combine(_snapshotsFolder, Path.GetFileName(source));
            if (!File.Exists(destination))
            {
                File.Copy(source, destination);
            }
        }
    }

    // Only real, successfully retrieved data is stored. Never fabricate player rows.
    // Each board/range keeps its last successful capture until Refresh is clicked.
    private void LoadSnapshots()
    {
        if (!Directory.Exists(_snapshotsFolder))
        {
            return;
        }
        foreach (var file in Directory.EnumerateFiles(_snapshotsFolder, "*.json"))
        {
            try
            {
                var snapshot = JsonSerializer.Deserialize<LeaderboardSnapshot>(File.ReadAllText(file),
                    new JsonSerializerOptions(JsonSerializerDefaults.Web));
                if (snapshot is null || !AllowedBoards.Contains(snapshot.BoardName, StringComparer.Ordinal)) continue;
                _cache[CacheKey(snapshot.BoardName, snapshot.RangeStart, snapshot.RangeEnd)] = snapshot;
                _logger.LogInformation("Loaded saved Steam snapshot {Board} from {Date}", snapshot.BoardName, snapshot.FetchedAtUtc);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Could not read saved snapshot {File}", file);
            }
        }
    }

    private void SaveSnapshot(LeaderboardSnapshot snapshot)
    {
        try
        {
            Directory.CreateDirectory(_snapshotsFolder);
            var file = Path.Combine(_snapshotsFolder, $"{snapshot.BoardName}_{snapshot.RangeStart}_{snapshot.RangeEnd}.json");
            var temp = file + ".tmp";
            File.WriteAllText(temp, JsonSerializer.Serialize(snapshot, new JsonSerializerOptions(JsonSerializerDefaults.Web) { WriteIndented = true }));
            File.Move(temp, file, true);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Unable to save Steam leaderboard snapshot");
        }
    }
}
