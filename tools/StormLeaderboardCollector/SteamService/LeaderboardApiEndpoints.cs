using System.Net;
using Storm4Leaderboard.Services;

namespace Storm4Leaderboard;

public static class LeaderboardApiEndpoints
{
    public static WebApplication MapLeaderboardApi(this WebApplication app)
    {
        app.MapGet("/api/status", (SteamLeaderboardClient steam) =>
            Results.Ok(steam.GetStatus()));

        app.MapGet("/api/boards", (SteamLeaderboardClient steam) => Results.Ok(new
        {
            platform = "steam",
            appId = SteamLeaderboardClient.Storm4AppId,
            defaultBoard = SteamLeaderboardClient.DefaultBoard,
            boards = steam.GetBoardInfos()
        }));

        app.MapGet("/api/leaderboard", async (
            string? board,
            int? start,
            int? end,
            bool? refresh,
            SteamLeaderboardClient steam,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var result = await steam.GetLeaderboardAsync(
                    board ?? SteamLeaderboardClient.DefaultBoard,
                    Math.Clamp(start ?? 1, 1, 1_000_000),
                    Math.Clamp(end ?? 250, 1, 1_000_000),
                    refresh ?? false,
                    cancellationToken);

                return Results.Ok(result);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { error = exception.Message });
            }
            catch (Exception exception)
            {
                return Results.Problem(
                    title: "Steam leaderboard unavailable",
                    detail: exception.Message,
                    statusCode: 503);
            }
        });

        // Cached snapshots are available immediately, including while Steam is offline.
        app.MapGet("/api/snapshot", (
            string? board,
            int? start,
            int? end,
            SteamLeaderboardClient steam) =>
        {
            var boardName = board ?? SteamLeaderboardClient.DefaultBoard;
            if (!SteamLeaderboardClient.AllowedBoards.Contains(boardName, StringComparer.Ordinal))
            {
                return Results.BadRequest(new { error = "Unknown leaderboard" });
            }

            return steam.TryGetCached(boardName, start ?? 1, end ?? 250, out var snapshot)
                ? Results.Ok(snapshot)
                : Results.NotFound();
        });

        // Refresh occurs independently so a slow Steam request does not block the website.
        app.MapPost("/api/refresh", (string? board, SteamLeaderboardClient steam) =>
        {
            try
            {
                return Results.Ok(steam.StartRefresh(board ?? SteamLeaderboardClient.DefaultBoard));
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { error = exception.Message });
            }
        });

        app.MapGet("/api/refresh/status", (string? board, SteamLeaderboardClient steam) =>
        {
            try
            {
                return Results.Ok(steam.GetRefreshStatus(board ?? SteamLeaderboardClient.DefaultBoard));
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { error = exception.Message });
            }
        });

        app.MapGet("/api/playtimes", (string? ids, SteamLeaderboardClient steam) =>
        {
            var steamIds = (ids ?? string.Empty).Split(
                ',',
                StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

            return Results.Ok(steam.GetPlaytimeChecks(steamIds));
        });

        app.MapGet("/api/player/{playerId}", async (
            string playerId,
            SteamLeaderboardClient steam,
            CancellationToken cancellationToken) =>
        {
            if (!steam.GetStatus().LoggedOn)
            {
                return Results.StatusCode(503);
            }

            try
            {
                var profile = await steam.GetPlayerProfileAsync(playerId, false, cancellationToken);
                return Results.Ok(profile);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { error = exception.Message });
            }
            catch (Exception exception)
            {
                return Results.Problem(detail: exception.Message, statusCode: 503);
            }
        });

        // QR authentication stays private to the local development machine.
        app.MapGet("/api/auth", (HttpContext context, SteamLeaderboardClient steam) =>
            IPAddress.IsLoopback(context.Connection.RemoteIpAddress ?? IPAddress.None)
                ? Results.Ok(steam.GetAuthStatus())
                : Results.StatusCode(403));


        app.MapPost("/api/auth/retry", (HttpContext context, SteamLeaderboardClient steam) =>
        {
            if (!IPAddress.IsLoopback(context.Connection.RemoteIpAddress ?? IPAddress.None))
            {
                return Results.StatusCode(403);
            }

            return Results.Ok(new { started = steam.RetryAuthentication() });
        });

        return app;
    }
}
