import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideo } from '../../modals/youtube-video';
import { YoutubePlaylist } from '../../modals/youtube-playlist';
import { YoutubeService, CommunityHighlightsData, CreatorChannel } from '../../service/youtube';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-community-highlights',
  standalone: true,
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    ButtonModule,
    AvatarModule
  ],
  templateUrl: './community-highlights.html',
  styleUrl: './community-highlights.scss',
})
export class CommunityHighlights implements OnInit {
  private youtubeService = inject(YoutubeService);

  featuredCreators: CreatorChannel[] = [];
  randomVideos: YoutubeVideo[] = [];
  pinnedPlaylists: YoutubePlaylist[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadHighlights();
  }

  loadHighlights(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.youtubeService.getHighlightsData().subscribe({
      next: (data: CommunityHighlightsData) => {
        this.featuredCreators = data.featuredCreators;
        this.randomVideos = data.randomVideos;
        this.pinnedPlaylists = data.pinnedPlaylists;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading community highlights:', err);
        this.errorMessage = 'Unable to load community content. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}