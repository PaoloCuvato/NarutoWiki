using System.Text.Json;
using Storm4Leaderboard;
using Storm4Leaderboard.Services;

var builder = WebApplication.CreateBuilder(args);

// Collector service is private to this computer.
builder.WebHost.UseUrls("http://127.0.0.1:23636");
builder.Services.AddDataProtection();
builder.Services.AddSingleton<SteamLeaderboardClient>();
builder.Services.AddHostedService(services =>
    services.GetRequiredService<SteamLeaderboardClient>());
builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

var app = builder.Build();
app.MapLeaderboardApi();
app.MapMultiGameApi();
app.Run();
