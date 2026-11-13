import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { firstValueFrom, timeout } from 'rxjs';

import {
  BoardCaptureManifest,
  BoardInfo,
  BoardList,
  GameOption,
  PlaytimeCheck,
  PlayerVerdict,
  Snapshot,
  SteamEntry,
} from './leaderboard.models';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.scss',
})
export class Leaderboard implements OnInit, OnDestroy {
  readonly games: GameOption[] = [
    {
      key: 'storm1',
      appId: 495140,
      shortLabel: 'Storm 1',
      title: 'NARUTO: Ultimate Ninja STORM',
      caption: 'NARUTO: Ultimate Ninja STORM',
    },
    {
      key: 'storm2',
      appId: 543870,
      shortLabel: 'Storm 2',
      title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 2',
      caption: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 2',
    },
    {
      key: 'storm3',
      appId: 234670,
      shortLabel: 'Storm 3',
      title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst',
      caption: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst',
    },
    {
      key: 'storm4',
      appId: 349040,
      shortLabel: 'Storm 4',
      title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 4',
      caption: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 4',
    },
    {
      key: 'revolution',
      appId: 272510,
      shortLabel: 'Revolution',
      title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution',
      caption: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution',
    },
    {
      key: 'connections',
      appId: 1020790,
      shortLabel: 'Connections',
      title: 'NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS',
      caption: 'NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS',
    },
  ];

  boards: BoardInfo[] = [];
  selectedBoard = '';
  selectedGameKey = 'storm4';
  ninjaList: SteamEntry[] = [];
  playtimes: Record<string, PlaytimeCheck> = {};
  search = '';
  filterMode: 'hide-suspicious' | 'verified' | 'all' = 'all';
  refreshing = false;
  pageError = '';
  fetchedAt = '';
  totalEntries = 0;
  capturedEntries = 0;
  pageNumber = 1;
  pageSize = 25;
  requestedPage = 1;
  manifest: BoardCaptureManifest | null = null;

  private destroyed = false;
  private requestId = 0;
  private timer?: ReturnType<typeof setInterval>;
  private currentChunkStart = 0;
  private currentChunkSize = 250;
  private boardsByGame: Record<string, BoardInfo[]> = {};
  private lastPlaytimeStamp = '';
  private chunkLoading = false;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  get isComingSoon(): boolean {
    return this.selectedGameKey !== 'storm4';
  }

  get currentGame(): GameOption | undefined {
    return this.games.find((game) => game.key === this.selectedGameKey);
  }

  get currentBoard(): BoardInfo | undefined {
    return this.boards.find((board) => board.name === this.selectedBoard);
  }

  get isBpBoard(): boolean {
    return this.selectedGameKey === 'storm4' &&
      this.selectedBoard.startsWith('BATTLE_RANKING_BP_');
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.capturedEntries / this.pageSize));
  }

  get pageEntries(): SteamEntry[] {
    const start = (this.pageNumber - 1) * this.pageSize + 1;
    const startInChunk = start - this.currentChunkStart;

    if (startInChunk < 0 || startInChunk >= this.ninjaList.length) {
      return [];
    }

    return this.ninjaList.slice(startInChunk, startInChunk + this.pageSize);
  }

  get filteredPlayers(): SteamEntry[] {
    const query = this.search.trim().toLowerCase();

    return this.pageEntries.filter((player) => {
      const matchesName = player.playerName.toLowerCase().includes(query);
      const matchesSteamId = player.steamId.includes(query);

      if (query && !matchesName && !matchesSteamId) {
        return false;
      }

      const verdict = this.verdict(player);
      if (this.filterMode === 'verified') {
        return verdict === 'eligible';
      }

      return this.filterMode === 'all' || verdict !== 'suspicious';
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    void this.initialize();
    this.timer = setInterval(() => {
      if (
        !this.destroyed &&
        !this.refreshing &&
        !this.chunkLoading &&
        this.pageNumber === 1 &&
        !this.isComingSoon
      ) {
        void this.refreshBoard(true);
      }
    }, 30000);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.requestId++;

    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  verdict(player: SteamEntry): PlayerVerdict {
    if (!this.isBpBoard) {
      return 'eligible';
    }

    if (player.score > 99_999 || player.score < 0) {
      return 'suspicious';
    }

    const time = this.playtimes[player.steamId];
    if (!time?.available || time.hoursOnRecord == null) {
      return 'unverified';
    }

    const hours = time.hoursOnRecord;
    const suspiciousPlaytime =
      (player.score >= 50_000 && hours < 40) ||
      (player.score >= 15_000 && hours < 10) ||
      (player.score >= 5_000 && hours < 2);

    return suspiciousPlaytime ? 'suspicious' : 'eligible';
  }

  isTopFourCheaterFlag(player: SteamEntry): boolean {
    return this.isBpBoard &&
      player.globalRank >= 1 &&
      player.globalRank <= 4 &&
      player.score > 99_999;
  }

  playtimeLabel(player: SteamEntry): string {
    const result = this.playtimes[player.steamId];
    return result?.available && result.hoursOnRecord != null
      ? `${result.hoursOnRecord.toFixed(1)} h`
      : 'Private';
  }

  async initialize(): Promise<void> {
    await this.loadGameBoards('storm4');
  }

  async selectGame(gameKey: string): Promise<void> {
    if (gameKey === this.selectedGameKey) {
      return;
    }

    this.requestId++;
    this.selectedGameKey = gameKey;
    this.resetViewState();

    if (this.isComingSoon) {
      this.boards = [];
      this.selectedBoard = '';
      return;
    }

    await this.loadGameBoards(gameKey);
  }

  selectBoard(boardName: string): void {
    if (boardName === this.selectedBoard) {
      return;
    }

    this.requestId++;
    this.selectedBoard = boardName;
    this.resetRankingState();
    void this.refreshBoard();
  }

  async changePage(nextPage: number): Promise<void> {
    if (!Number.isFinite(nextPage) || this.capturedEntries === 0) {
      return;
    }

    if (this.chunkLoading) {
      return;
    }

    const page = Math.min(this.totalPages, Math.max(1, Math.trunc(nextPage)));
    if (page === this.pageNumber) {
      return;
    }

    this.pageError = '';
    if (this.needsChunk(page)) {
      const loaded = await this.loadChunk(false, ++this.requestId, page);
      if (!loaded) {
        this.requestedPage = this.pageNumber;
        return;
      }
    }

    this.pageNumber = page;
    this.requestedPage = page;
  }

  setPageSize(size: number | string): void {
    const parsed = Number(size);
    if (![10, 25, 50].includes(parsed)) {
      return;
    }

    const firstVisibleRank = (this.pageNumber - 1) * this.pageSize + 1;
    this.pageSize = parsed;
    this.pageNumber = Math.max(1, Math.ceil(firstVisibleRank / this.pageSize));
    this.requestedPage = this.pageNumber;
    this.pageError = '';

    if (this.needsChunk(this.pageNumber)) {
      void this.loadChunk();
    }
  }

  refresh(): void {
    if (!this.isComingSoon) {
      void this.refreshBoard();
    }
  }

  safeProfileUrl(player: SteamEntry): string | null {
    const url = player.steamProfileUrl;
    if (/^https:\/\/steamcommunity\.com\/(?:profiles\/\d+|id\/[a-zA-Z0-9_-]+)\/?(?:\?.*)?$/.test(url)) {
      return url;
    }

    return /^\d{17}$/.test(player.steamId)
      ? `https://steamcommunity.com/profiles/${player.steamId}`
      : null;
  }

  private async loadGameBoards(gameKey: string): Promise<void> {
    const request = this.requestId;
    const game = this.games.find((entry) => entry.key === gameKey);
    if (!game) {
      return;
    }

    try {
      const boardList = await this.getGameBoardList(game);
      if (!this.isCurrentRequest(request, gameKey)) {
        return;
      }

      this.boardsByGame[gameKey] = boardList.boards;
      this.boards = boardList.boards;
      this.selectedBoard = boardList.defaultBoard || boardList.boards[0]?.name || '';
      await this.refreshBoard();
    } catch {
      if (this.isCurrentRequest(request, gameKey)) {
        this.boards = [];
        this.selectedBoard = '';
        this.resetRankingState();
      }
    }
  }

  private async getGameBoardList(game: GameOption): Promise<BoardList> {
    try {
      return await firstValueFrom(
        this.http.get<BoardList>(
          `/leaderboards/${game.appId}/boards.json?v=${Date.now()}`,
        ).pipe(timeout(6000)),
      );
    } catch (error) {
      // Original STORM 4 captures use the legacy catalog at the root.
      if (game.key !== 'storm4') {
        throw error;
      }

      return firstValueFrom(
        this.http.get<BoardList>('/leaderboards/boards.json').pipe(timeout(6000)),
      );
    }
  }

  private async refreshBoard(silent = false): Promise<void> {
    const request = ++this.requestId;
    const gameKey = this.selectedGameKey;
    const board = this.selectedBoard;

    if (!board) {
      return;
    }

    if (!silent) {
      this.refreshing = true;
    }

    try {
      const appId = this.currentGame!.appId;
      const safeBoard = this.safeBoardName(board);
      let manifest: BoardCaptureManifest;

      try {
        manifest = await firstValueFrom(
          this.http.get<BoardCaptureManifest>(
            `/leaderboards/${appId}/${safeBoard}.manifest.json?v=${Date.now()}`,
          ).pipe(timeout(6000)),
        );
      } catch (error) {
        if (gameKey !== 'storm4') {
          throw error;
        }

        // STORM 4 snapshots from earlier collector builds lacked a manifest.
        manifest = {
          appId,
          boardName: board,
          totalEntries: 250,
          capturedEntries: 250,
          chunkSize: 250,
          complete: false,
          updatedAtUtc: '',
        };
      }

      if (!this.isCurrentRequest(request, gameKey, board)) {
        return;
      }

      this.manifest = manifest;
      this.totalEntries = manifest.totalEntries;
      this.capturedEntries = manifest.capturedEntries;
      this.currentChunkSize = manifest.chunkSize || 250;
      this.pageNumber = Math.min(this.pageNumber, this.totalPages);
      this.requestedPage = this.pageNumber;

      if (this.capturedEntries > 0) {
        // Polling must not overwrite a page navigation already in progress.
        if (!this.chunkLoading) {
          await this.loadChunk(silent, request, this.pageNumber);
        }
      } else {
        this.ninjaList = [];
      }
    } catch {
      if (!silent && this.isCurrentRequest(request, gameKey, board)) {
        this.resetRankingState();
      }
    } finally {
      if (this.isCurrentRequest(request, gameKey, board)) {
        this.refreshing = false;
      }
    }
  }

  private needsChunk(page: number): boolean {
    const startRank = (page - 1) * this.pageSize + 1;
    return this.currentChunkStart === 0 ||
      startRank < this.currentChunkStart ||
      startRank >= this.currentChunkStart + this.ninjaList.length;
  }

  private async loadChunk(
    silent = false,
    currentRequest = ++this.requestId,
    targetPage = this.pageNumber,
  ): Promise<boolean> {
    if (!this.manifest || this.capturedEntries === 0 || this.chunkLoading) {
      return false;
    }

    const gameKey = this.selectedGameKey;
    const boardName = this.selectedBoard;
    const appId = this.currentGame!.appId;
    const startRank = (targetPage - 1) * this.pageSize + 1;
    const chunkSize = this.currentChunkSize;
    const chunkStart = Math.floor((startRank - 1) / chunkSize) * chunkSize + 1;
    const chunkEnd = Math.min(this.totalEntries, chunkStart + chunkSize - 1);
    const safeBoard = this.safeBoardName(boardName);
    const cacheBuster = `v=${Date.now()}`;

    const urls = [
      `/leaderboards/${appId}/${safeBoard}_${chunkStart}_${chunkEnd}.json?${cacheBuster}`,
      ...(gameKey === 'storm4' && chunkStart === 1
        ? [`/leaderboards/${safeBoard}_1_250.json?${cacheBuster}`]
        : []),
    ];

    this.chunkLoading = true;
    if (!silent) {
      this.refreshing = true;
    }

    try {
      let snapshot: Snapshot | null = null;

      for (const url of urls) {
        try {
          const result = await firstValueFrom(
            this.http.get<Snapshot>(url).pipe(timeout(8000)),
          );

          // A 200 response containing the wrong range is not a valid page.
          if (
            result.boardName === boardName &&
            result.rangeStart === chunkStart &&
            Array.isArray(result.entries) &&
            result.entries.length >= Math.min(chunkSize, this.capturedEntries - chunkStart + 1)
          ) {
            snapshot = result;
            break;
          }
        } catch {
          // Another compatible file location may still have this page.
        }
      }

      if (!this.isCurrentRequest(currentRequest, gameKey, boardName)) {
        return false;
      }

      if (!snapshot) {
        if (!silent) {
          this.pageError =
            'This ranking page is temporarily unavailable. Please try another page.';
        }
        return false;
      }

      this.currentChunkStart = chunkStart;
      this.ninjaList = snapshot.entries;
      this.fetchedAt = snapshot.fetchedAtUtc;
      this.pageError = '';

      if (this.lastPlaytimeStamp !== this.fetchedAt && this.isBpBoard) {
        this.lastPlaytimeStamp = this.fetchedAt;
        void this.loadPlaytimes();
      }

      return true;
    } finally {
      this.chunkLoading = false;
      if (!silent && this.isCurrentRequest(currentRequest, gameKey, boardName)) {
        this.refreshing = false;
      }
    }
  }

  private async loadPlaytimes(): Promise<void> {
    const board = this.selectedBoard;

    try {
      const data = await firstValueFrom(
        this.http.get<Record<string, PlaytimeCheck>>(
          `/leaderboards/steam-playtime.json?v=${Date.now()}`,
        ).pipe(timeout(5000)),
      );

      if (!this.destroyed && board === this.selectedBoard) {
        this.playtimes = data;
      }
    } catch {
      // Steam playtime can be private; its absence does not hide the player.
    }
  }

  private safeBoardName(boardName: string): string {
    return boardName.replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  private isCurrentRequest(
    request: number,
    gameKey: string,
    boardName?: string,
  ): boolean {
    return !this.destroyed &&
      request === this.requestId &&
      gameKey === this.selectedGameKey &&
      (boardName === undefined || boardName === this.selectedBoard);
  }

  private resetRankingState(): void {
    this.ninjaList = [];
    this.playtimes = {};
    this.pageError = '';
    this.fetchedAt = '';
    this.totalEntries = 0;
    this.capturedEntries = 0;
    this.manifest = null;
    this.pageNumber = 1;
    this.requestedPage = 1;
    this.currentChunkStart = 0;
    this.currentChunkSize = 250;
    this.lastPlaytimeStamp = '';
    this.refreshing = false;
  }

  private resetViewState(): void {
    this.resetRankingState();
    this.search = '';
  }
}
