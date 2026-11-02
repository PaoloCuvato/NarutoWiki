import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja5',
  imports: [CoomingSoon],
  templateUrl: './ninja5.html',
  styleUrl: './ninja5.scss',
})
export class Ninja5 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA 5',
    description: 'The character database and game resources for Naruto: Ultimate Ninja 5 are currently under development.',
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
