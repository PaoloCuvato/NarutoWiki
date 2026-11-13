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
    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        SetState("connecting to Steam");
        _steamClient.Connect();

        return Task.Run(() =>
        {
            try
            {
                while (!stoppingToken.IsCancellationRequested)
                    _callbackManager.RunWaitCallbacks(TimeSpan.FromMilliseconds(500));
            }
            finally
            {
                if (_steamClient.IsConnected)
                {
                    _steamClient.Disconnect();
                }
            }
        }, stoppingToken);
    }

    private void OnConnected(SteamClient.ConnectedCallback callback)
    {
        _connected = true;
        if (_anonymousMode)
        {
            SetState("connected · attempting anonymous Steam logon");
            _logger.LogInformation("Connected to Steam. Testing anonymous logon (no account or QR code).");
            _steamUser.LogOnAnonymous();
            return;
        }

        _logger.LogInformation("Connected to Steam. Starting authenticated user session.");
        _ = BeginAuthenticationAsync();
    }

    private async Task WaitForAppContextAsync(CancellationToken cancellationToken)
    {
        var warmup = _appContextReadyAtUtc - DateTimeOffset.UtcNow;
        if (warmup > TimeSpan.Zero)
        {
            await Task.Delay(warmup, cancellationToken);
        }
    }

    private void AnnounceStorm4AppContext()
    {
        var playGame = new ClientMsgProtobuf<CMsgClientGamesPlayed>(EMsg.ClientGamesPlayed);
        playGame.Body.games_played.Add(new CMsgClientGamesPlayed.GamePlayed
        {
            game_id = new GameID(Storm4AppId)
        });

        _steamClient.Send(playGame);
    }

    // Explicit retry only: repeated automatic logons would fight another active Steam session.
    public bool RetryAuthentication()
    {
        if (_loggedOn || _authInProgress)
        {
            return false;
        }

        lock (_stateLock)
        {
            _lastError = null;
            _challengeUrl = null;
            _state = "reconnecting to Steam";
        }

        if (!_steamClient.IsConnected)
        {
            _steamClient.Connect();
        }
        else
        {
            _ = BeginAuthenticationAsync();
        }

        return true;
    }

    private void OnLoggedOff(SteamUser.LoggedOffCallback callback)
    {
        _loggedOn = false;
        lock (_stateLock)
        {
            _challengeUrl = null;
            _state = $"logged off: {callback.Result}";
            _lastError = callback.Result == EResult.LoggedInElsewhere
                ? "Steam ended this session because this account signed in elsewhere. Retry Sign-In to try again. Steam may limit concurrent sessions."
                : $"Steam logged off: {callback.Result}";
        }
    }

    private void OnDisconnected(SteamClient.DisconnectedCallback callback)
    {
        _connected = false;
        _loggedOn = false;
        _authInProgress = false;
        lock (_stateLock)
        {
            _challengeUrl = null;
            _state = "disconnected";
        }
    }
}
