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

  ngOnInit(): void {
    this.loadHighlights();
  }

  loadHighlights(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.youtubeService.getHighlightsData().subscribe({
      next: (data) => {
        this.featuredCreators = data.featuredCreators || [];
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

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}