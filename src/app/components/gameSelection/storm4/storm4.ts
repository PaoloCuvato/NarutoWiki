import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

interface MoveVideo {
  title: string;
  category: string;
  description: string;
  videoUrl: string;
}

interface GuideItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-storm4',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule
  ],
  templateUrl: './storm4.html',
  styleUrl: './storm4.scss'
})
export class Storm4 {

  character = {
    name: 'Itachi Uchiha',
    subtitle: 'The Master of the Mangekyo Sharingan',
    clan: 'Uchiha Clan',
    village: 'Hidden Leaf Village (Nukenin)',
    image: 'itachi.png'
  };

  // 3 Jutsu (Video locali in loop)
  jutsuList: MoveVideo[] = [
    {
      title: 'Jutsu 1',
      category: 'Jutsu',
      description: 'Tecnica di attacco base.',
      videoUrl: 'assets/videos/itachi1.mp4'
    },
    {
      title: 'Jutsu 2',
      category: 'Jutsu',
      description: 'Tecnica di attacco base.',
      videoUrl: 'assets/videos/itachi1.mp4'
    },
    {
      title: 'Jutsu 3',
      category: 'Jutsu',
      description: 'Tecnica di attacco base.',
      videoUrl: 'assets/videos/itachi1.mp4'
    }
  ];

  // 2 Ultimate Jutsu (Video locali in loop)
  ultimateJutsuList: MoveVideo[] = [
    {
      title: 'Ultimate Jutsu 1',
      category: 'Ultimate Jutsu',
      description: 'Tecnica finale devastante.',
      videoUrl: 'assets/videos/itachi2.mp4'
    },
    {
      title: 'Ultimate Jutsu 2',
      category: 'Ultimate Jutsu',
      description: 'Seconda tecnica finale devastante.',
      videoUrl: 'assets/videos/itachi3.mp4'
    }
  ];

  // Team
  teams = [
    { name: 'Itachi & Kisame', description: 'Akatsuki Duo' },
    { name: 'Itachi & Sasuke', description: 'Uchiha Brothers' },
    { name: 'Itachi & Shisui', description: 'Uchiha Best Friends' }
  ];

  // Guide Placeholder (4 elementi)
  guides: GuideItem[] = [
    { title: 'Guida Combo Base', description: 'Impara le basi per inanellare combo fluide con Itachi.' },
    { title: 'Gestione del Chakra', description: 'Come ottimizzare il chakra durante gli scontri prolungati.' },
    { title: 'Cancel & Dash Tecniche', description: 'Analisi avanzata dei cancel di scatto e difesa.' },
    { title: 'Matchup Difficili', description: 'Strategie e contromosse contro i personaggi avversari.' }
  ];
}