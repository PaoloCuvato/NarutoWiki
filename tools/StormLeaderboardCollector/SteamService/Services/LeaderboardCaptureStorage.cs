using System.Text.Json;
using Storm4Leaderboard.Models;

namespace Storm4Leaderboard.Services;

/// <summary>
/// Saves paged leaderboard data to public/leaderboards/{appId}.
/// Each completed chunk and its manifest are written atomically, allowing a later
/// capture to resume without loading the entire leaderboard into memory.
/// </summary>
internal sealed class LeaderboardCaptureStorage
{
    public const int ChunkSize = 250;

    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web)
    {
        WriteIndented = true
    };

    private readonly string _root;

    public LeaderboardCaptureStorage(string root)
    {
        _root = root;
    }

    public string GetGameDirectory(uint appId)
    {
        return Path.Combine(_root, appId.ToString(System.Globalization.CultureInfo.InvariantCulture));
    }

    public static string SafeBoardName(string name)
    {
        return string.Concat(name.Select(character =>
            char.IsAsciiLetterOrDigit(character) || character is '_' or '-'
                ? character
                : '_'));
    }

    public BoardCaptureManifest? LoadManifest(uint appId, string boardName)
    {
        var path = GetManifestPath(appId, boardName);

        try
        {
            if (!File.Exists(path))
            {
                return null;
            }

            return JsonSerializer.Deserialize<BoardCaptureManifest>(
                File.ReadAllText(path), JsonOptions);
        }
        catch (IOException)
        {
            return null;
        }
        catch (JsonException)
        {
            return null;
        }
    }

    public bool HasChunk(uint appId, string boardName, int start, int end)
    {
        return File.Exists(GetChunkPath(appId, boardName, start, end));
    }

    public async Task SaveCatalogAsync(
        uint appId,
        IReadOnlyList<BoardInfoDto> boards,
        CancellationToken cancellationToken)
    {
        if (boards.Count == 0)
        {
            return;
        }

        var catalog = new GameBoardCatalog(boards[0].Name, boards);
        var path = Path.Combine(GetGameDirectory(appId), "boards.json");
        await WriteJsonAsync(path, catalog, cancellationToken);
    }

    public async Task SaveChunkAsync(
        LeaderboardSnapshot snapshot,
        CancellationToken cancellationToken)
    {
        var path = GetChunkPath(
            snapshot.AppId,
            snapshot.BoardName,
            snapshot.RangeStart,
            snapshot.RangeEnd);

        await WriteJsonAsync(path, snapshot, cancellationToken);
    }

    public async Task SaveManifestAsync(
        BoardCaptureManifest manifest,
        CancellationToken cancellationToken)
    {
        var path = GetManifestPath(manifest.AppId, manifest.BoardName);
        await WriteJsonAsync(path, manifest, cancellationToken);
    }

    private string GetManifestPath(uint appId, string boardName)
    {
        return Path.Combine(GetGameDirectory(appId), $"{SafeBoardName(boardName)}.manifest.json");
    }

    private string GetChunkPath(uint appId, string boardName, int start, int end)
    {
        return Path.Combine(
            GetGameDirectory(appId),
            $"{SafeBoardName(boardName)}_{start}_{end}.json");
    }

    private static async Task WriteJsonAsync<T>(
        string destination,
        T value,
        CancellationToken cancellationToken)
    {
        Directory.CreateDirectory(Path.GetDirectoryName(destination)!);
        var temporaryPath = destination + ".tmp";

        try
        {
            await File.WriteAllTextAsync(
                temporaryPath,
                JsonSerializer.Serialize(value, JsonOptions),
                cancellationToken);

            File.Move(temporaryPath, destination, overwrite: true);
        }
        finally
        {
            if (File.Exists(temporaryPath))
            {
                File.Delete(temporaryPath);
            }
        }
    }
}

public sealed record GameBoardCatalog(
    string DefaultBoard,
    IReadOnlyList<BoardInfoDto> Boards);

public sealed record BoardCaptureManifest(
    uint AppId,
    string BoardName,
    int TotalEntries,
    int CapturedEntries,
    int ChunkSize,
    bool Complete,
    DateTimeOffset UpdatedAtUtc);
