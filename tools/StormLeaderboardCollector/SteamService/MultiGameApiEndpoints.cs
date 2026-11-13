using Storm4Leaderboard.Services;

namespace Storm4Leaderboard;

public static class MultiGameApiEndpoints
{
    public static WebApplication MapMultiGameApi(this WebApplication app)
    {
        app.MapGet("/api/games", () =>
            Results.Ok(SteamLeaderboardClient.SupportedGames));

        app.MapPost("/api/games/capture", (SteamLeaderboardClient client) =>
        {
            try
            {
                return Results.Ok(client.StartMultiCapture());
            }
            catch (InvalidOperationException exception)
            {
                return Results.Problem(exception.Message, statusCode: 503);
            }
        });

        app.MapGet("/api/games/capture/status", (SteamLeaderboardClient client) =>
            Results.Ok(client.GetMultiCaptureStatus()));

        return app;
    }
}
