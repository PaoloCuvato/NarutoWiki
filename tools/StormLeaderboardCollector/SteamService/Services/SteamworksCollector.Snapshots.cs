using System.Text.Json;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

public sealed partial class SteamworksCollector
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web)
    {
        WriteIndented = true
    };

    public bool TryGetCached(string boardName, out LeaderboardSnapshot? snapshot)
    {
        return _snapshots.TryGetValue(boardName, out snapshot);
    }

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
                var saved = JsonSerializer.Deserialize<LeaderboardSnapshot>(
                    File.ReadAllText(file),
                    JsonOptions);

                if (saved is not null && Boards.Any(board => board.Name == saved.BoardName))
                {
                    _snapshots[saved.BoardName] = saved;
                }
            }
            catch (JsonException)
            {
                // This may be the playtime cache, not a leaderboard snapshot.
            }
        }
    }

    private void SaveSnapshot(LeaderboardSnapshot snapshot)
    {
        Directory.CreateDirectory(_snapshotsFolder);

        var destination = Path.Combine(
            _snapshotsFolder,
            $"{snapshot.BoardName}_{snapshot.RangeStart}_{snapshot.RangeEnd}.json");
        var temporary = destination + ".tmp";

        File.WriteAllText(temporary, JsonSerializer.Serialize(snapshot, JsonOptions));
        File.Move(temporary, destination, true);
        _snapshots[snapshot.BoardName] = snapshot;
    }
}
