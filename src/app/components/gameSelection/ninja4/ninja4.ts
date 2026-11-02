import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja4',
  imports: [CoomingSoon],
  templateUrl: './ninja4.html',
  styleUrl: './ninja4.scss',
})
export class Ninja4 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA 4',
    description: 'The character database and game resources for Naruto: Ultimate Ninja 4 are currently under development.',
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
