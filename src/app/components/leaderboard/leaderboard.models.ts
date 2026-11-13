/** Steam leaderboard API responses and player screening types. */

export interface BoardInfo {
  name: string;
  label: string;
  category: string;
  region: string;
  scoreLabel: string;
}

export interface BoardList {
  defaultBoard: string;
  boards: BoardInfo[];
}

export interface GameOption {
  key: string;
  appId: number;
  shortLabel: string;
  title: string;
  caption: string;
}

export interface SteamEntry {
  globalRank: number;
  steamId: string;
  playerName: string;
  avatarUrl: string | null;
  score: number;
  details: number[];
  ugcId: string;
  steamProfileUrl: string;
}

export interface Snapshot {
  boardName: string;
  totalEntries: number;
  rangeStart: number;
  rangeEnd: number;
  fetchedAtUtc: string;
  entries: SteamEntry[];
}

export interface PlaytimeCheck {
  available: boolean;
  hoursOnRecord: number | null;
  status: string;
  checkedAtUtc: string;
}

export type PlayerVerdict = 'eligible' | 'suspicious' | 'unverified';

export interface BoardCaptureManifest {
  appId: number;
  boardName: string;
  totalEntries: number;
  capturedEntries: number;
  chunkSize: number;
  complete: boolean;
  updatedAtUtc: string;
}
