export interface LobbyModal {
  durationTime: string;
  playerName: string;
  game: string;
  platform: string;
  Status: string;
  fps: number;
  skillTarget: string;
  regionTarget: string;
  connetionType: string; // mantiene il nome esatto del tuo DB
  rules: string;
  creationTime: string;
  PostId: string; // Lo usiamo per generare il link
  maxPlayers: number;
  lobbyType: string;
}
