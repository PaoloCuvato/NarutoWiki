import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, of, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { YoutubeVideo } from '../modals/youtube-video';
import { YoutubePlaylist } from '../modals/youtube-playlist';
import { ChannelConfig } from '../modals/channel-config';

export interface CreatorChannel {
  name: string;
  channelId: string;
  avatarUrl: string;
  customUrl?: string;
  latestVideo?: YoutubeVideo | null;
}

export interface CommunityHighlightsData {
  featuredCreators: CreatorChannel[];
  randomVideos: YoutubeVideo[];
  pinnedPlaylists: YoutubePlaylist[];
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private http = inject(HttpClient);
  private apiKey = environment.youtubeApiKey;

  // Configurazione dei Canali Community (8 Youtubers)
  readonly channelList: ChannelConfig[] = [
    { name: 'Puppet Of Azrael', channelId: 'UC63RLSdoXmj407dlFwIiCQA' },
    { name: 'Burrell', channelId: 'UC8HvVjuvEeUoHIr8Y60_UCA' },
    { name: 'Mr E', channelId: 'UCBv740cWjWoODSIVxRb6_ZQ' },
    { name: 'Poisoned Okami', channelId: 'UCwkOmHAqmN0fQ6cxMbhh5vg' },
    { name: 'CactusPlayer', channelId: 'UCaVEsby2S7h9zQXQWR-gRQw' },
    { name: 'PuppetUnited', channelId: 'UCBslLF_o3DzAO-OYx6L8f1w' },
    { name: 'RamenManFlo', channelId: 'UCF8ldCpJKwTU7C3MdiS1nCA' },
    { name: 'RJxHunterz', channelId: 'UCUjXlYNyeXqnQYeMpz8PZAA' },
  ];

  // Configurazione delle Playlist Curate
  readonly pinnedPlaylistIds: string[] = [
    'PLwNCtKCx8WdTAwWrr_0K6Jtk484cfb_rI', // road to puppet masters
    'PLcj700UvnK73s_cF7LlZiMcCOzEm9t-wk', // storm connections guides poisoned okami
    'PLl9TIf3NB2FTQh3dbGCSJLQqQVVy4RnXG', // storm connections guides mr E
    'PLYMnQByYUf3dLLBa_7Gdf4XjRH-AVvajI', // storm connections guides burrell
  ];

  private getRandomChannels(count: number): ChannelConfig[] {
    if (!this.channelList.length) return [];
    const shuffled = [...this.channelList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, this.channelList.length));
  }

  getLatestVideoFromChannel(channel: ChannelConfig): Observable<YoutubeVideo | null> {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${channel.channelId}&part=snippet&order=date&maxResults=1&type=video`;

    return this.http.get<any>(url).pipe(
      map(res => {
        const item = res.items?.[0];
        if (!item) return null;

        return {
          id: item.id.videoId,
          title: item.snippet.title,
          channelTitle: channel.name,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
          youtubeUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          publishedAt: item.snippet.publishedAt
        };
      }),
      catchError(err => {
        console.error(`Error fetching latest video for ${channel.name}:`, err);
        return of(null);
      })
    );
  }

  getChannelDetails(channel: ChannelConfig): Observable<CreatorChannel> {
    const url = `https://www.googleapis.com/youtube/v3/channels?key=${this.apiKey}&id=${channel.channelId}&part=snippet`;

    return forkJoin({
      channelData: this.http.get<any>(url),
      latestVideo: this.getLatestVideoFromChannel(channel)
    }).pipe(
      map(({ channelData, latestVideo }) => {
        const item = channelData.items?.[0];
        const avatarUrl = item?.snippet?.thumbnails?.medium?.url || item?.snippet?.thumbnails?.default?.url || '';
        const customUrl = item?.snippet?.customUrl || '';

        return {
          name: channel.name,
          channelId: channel.channelId,
          avatarUrl: avatarUrl,
          customUrl: customUrl ? `https://www.youtube.com/${customUrl}` : `https://www.youtube.com/channel/${channel.channelId}`,
          latestVideo: latestVideo
        };
      }),
      catchError(err => {
        console.error(`Error fetching channel details for ${channel.name}:`, err);
        return of({
          name: channel.name,
          channelId: channel.channelId,
          avatarUrl: '',
          latestVideo: null
        });
      })
    );
  }

  getFeaturedCreators(count: number = 4): Observable<CreatorChannel[]> {
    const selected = this.getRandomChannels(count);
    const requests = selected.map(ch => this.getChannelDetails(ch));
    return forkJoin(requests);
  }

  getRandomRecentVideos(count: number = 4): Observable<YoutubeVideo[]> {
    const selectedChannels = this.getRandomChannels(count);
    if (!selectedChannels.length) return of([]);

    const requests = selectedChannels.map(ch => this.getLatestVideoFromChannel(ch));

    return forkJoin(requests).pipe(
      map(videos => videos.filter((v): v is YoutubeVideo => v !== null))
    );
  }

  getPinnedPlaylists(): Observable<YoutubePlaylist[]> {
    if (!this.pinnedPlaylistIds.length) return of([]);

    const requests = this.pinnedPlaylistIds.map(playlistId => {
      const url = `https://www.googleapis.com/youtube/v3/playlists?key=${this.apiKey}&id=${playlistId}&part=snippet,contentDetails`;
      return this.http.get<any>(url).pipe(
        map((res): YoutubePlaylist | null => {
          const item = res.items?.[0];
          if (!item) return null;

          return {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            channelTitle: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
            itemCount: item.contentDetails?.itemCount ?? 0,
            youtubeUrl: `https://www.youtube.com/playlist?list=${item.id}`
          };
        }),
        catchError(err => {
          console.error(`Error fetching playlist ${playlistId}:`, err);
          return of(null);
        })
      );
    });

    return forkJoin(requests).pipe(
      map(playlists => playlists.filter((p): p is YoutubePlaylist => p !== null))
    );
  }

  getHighlightsData(): Observable<CommunityHighlightsData> {
    return forkJoin({
      featuredCreators: this.getFeaturedCreators(4),
      randomVideos: this.getRandomRecentVideos(4),
      pinnedPlaylists: this.getPinnedPlaylists()
    });
  }
}