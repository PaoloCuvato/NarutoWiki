import { Component } from '@angular/core';
import { CoomingSoon } from '../../cooming-soon/cooming-soon';
import type { ComingSoonConfig } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja1',
  imports: [CoomingSoon],
  templateUrl: './ninja1.html',
  styleUrl: './ninja1.scss',
})
export class Ninja1 {

  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA',
    description: 'The character database and game resources for Naruto: Ultimate Ninja are currently under development.',
    plannedContent: [
      'Playable Characters',
      'Character Information',
      'Jutsu & Ultimate Jutsu',
      'Items & Resources',
      'Guides & Tutorials'
    ],
    label: 'NEW CONTENT IN PROGRESS',
    backLabel: 'RETURN TO SERIES'
  };

  goBack(): void {
    window.history.back();
  }

}