import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../../service/youtube';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { CreatorHighlightDto } from '../../modals/creator-highlight-dto';
import { YoutubePlaylist } from '../../modals/youtube-playlist';
import { YoutubeVideo } from '../../modals/youtube-video';

@Component({
  selector: 'app-community-highlights',
  standalone: true,
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    ButtonModule,
    AvatarModule,
    CardModule
  ],
  templateUrl: './community-highlights.html',
  styleUrl: './community-highlights.scss'
})
export class CommunityHighlights implements OnInit {
  private youtubeService = inject(YoutubeService);

  featuredCreators: CreatorHighlightDto[] = [];
  recentHighlights: YoutubeVideo[] = [];
  guidesAndPlaylists: YoutubePlaylist[] = [];
  isLoading = true;
  errorMessage = '';

  private readonly localAvatarPath = '/yt/';

  private readonly localAvatars: Record<string, string> = {
    'Puppet Of Azrael': 'Puppet Of Azrael.jpg',
    'Burrell': 'Burrell.jpg',
    'Mr E': 'Mr E.jpg',
    'Poisoned Okami': 'Poisoned Okami.jpg',
    'PuppetUnited': 'Puppet United.jpg',
    'RJxHunterz': 'RJxHunterz.jpg',
    'CactusPlayer': 'CactusPlayer.jpg'
  };

  private readonly localFallbackAttempted = new Set<string>();

  ngOnInit(): void {
    this.loadHighlights();
  }

  loadHighlights(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.localFallbackAttempted.clear();

    this.youtubeService.getHighlightsData().subscribe({
      next: (data) => {

        this.featuredCreators = (data.featuredCreators || []).map(creator => {

          if (creator.avatarUrl) {
            return creator;
          }

          const localAvatar = this.getLocalAvatar(creator.name);

          if (localAvatar) {
            this.localFallbackAttempted.add(creator.name);

            return {
              ...creator,
              avatarUrl: localAvatar
            };
          }

          return creator;
        });

        this.recentHighlights = data.recentHighlights || [];
        this.guidesAndPlaylists = data.guidesAndPlaylists || [];

        this.isLoading = false;
      },

      error: (err) => {
        console.error('Error loading community highlights:', err);

        this.errorMessage = 'Impossibile caricare i contenuti della community. Riprova più tardi.';

        this.isLoading = false;
      }
    });
  }

  getLocalAvatar(name: string): string {
    const fileName = this.localAvatars[name];

    return fileName
      ? `${this.localAvatarPath}${encodeURIComponent(fileName)}`
      : '';
  }

  onAvatarError(event: Event, creator: CreatorHighlightDto): void {

    if (this.localFallbackAttempted.has(creator.name)) {
      creator.avatarUrl = '';
      return;
    }

    this.localFallbackAttempted.add(creator.name);

    const localAvatar = this.getLocalAvatar(creator.name);

    if (localAvatar) {
      creator.avatarUrl = localAvatar;
    } else {
      creator.avatarUrl = '';
    }
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
