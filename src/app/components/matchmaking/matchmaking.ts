import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { LobbyService } from '../../service/lobby-service';
import { LobbyModal } from '../../modals/lobby-modal';

@Component({
  selector: 'app-matchmaking',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './matchmaking.html',
  styleUrl: './matchmaking.scss',
})
export class Matchmaking implements OnInit {

  // 3. Tipizza l'array usando la tua interfaccia invece di any[]
lobbies: LobbyModal[] = [
    {
      durationTime: '105',
      playerName: 'Pain_Shinra',
      game: 'NSUNS2', // Questo caricherà /stormLogos/NSUNS2.png
      platform: 'Steam',
      Status: 'ACTIVE',
      fps: 60,
      skillTarget: 'LF Advanced',
      regionTarget: 'Europe',
      connetionType: 'Ethernet',
      rules: 'No awakening, flat stage only.',
      creationTime: '2026-07-15T15:30:00.000Z',
      PostId: '1525911581442183439',
      maxPlayers: 2,
      lobbyType: 'Player Match'
    },
    {
      durationTime: '60',
      playerName: 'ItachiUchiha',
      game: 'NSUNSE', // Questo caricherà /stormLogos/NSUNSE.png
      platform: 'PlayStation',
      Status: 'ACTIVE',
      fps: 30,
      skillTarget: 'Casual',
      regionTarget: 'Europe',
      connetionType: 'Wi-Fi',
      rules: 'Only Genjutsu users allowed.',
      creationTime: '2026-07-15T16:15:00.000Z',
      PostId: '1525911581442183440',
      maxPlayers: 4,
      lobbyType: 'Endless'
    },
    {
      durationTime: '180',
      playerName: 'Minato_YellowFlash',
      game: 'NXBUNSC', // Questo caricherà /stormLogos/NXBUNSC.png
      platform: 'Steam',
      Status: 'ACTIVE',
      fps: 60,
      skillTarget: 'Competitive',
      regionTarget: 'North America',
      connetionType: 'Ethernet',
      rules: 'Best of 3, tournament rules.',
      creationTime: '2026-07-15T16:45:00.000Z',
      PostId: '1525911581442183441',
      maxPlayers: 2,
      lobbyType: 'Tournament'
    }
  ];
  constructor(private lobbyService: LobbyService) {}

  ngOnInit() {
    this.lobbyService.getLobbies().subscribe({
      next: (data: LobbyModal[]) => {
        this.lobbies = data;
      },
      error: (err) => {
        console.error('Errore caricamento lobbies:', err);
      }
    });
  }

  // 4. Aggiungiamo la logica per mappare dinamicamente i loghi dei giochi di Naruto
  getGameLogo(gameName: string): string {
    const validLogos = [
      'NSUNS', 'NSUNS2', 'NSUNSE', 'NSUNSFB', 
      'NSUNSG', 'NSUNSR', 'NSUNSRTB', 'NXBUNSC'
    ];

    if (validLogos.includes(gameName)) {
      return `/stormLogos/${gameName}.png`;
    }
    // Fallback se il gioco non è presente nella lista
    return '/StormLogoFranchise.png';
  }

goToDiscord(postId: string) {
    if (!postId) return;

    // Costruisce il link diretto al post del forum di Discord usando gli ID reali
    const discordPostUrl = `https://discord.com/channels/420393601176961025/1389588609295712357/${postId}`;

    window.open(discordPostUrl, '_blank');
  }
}