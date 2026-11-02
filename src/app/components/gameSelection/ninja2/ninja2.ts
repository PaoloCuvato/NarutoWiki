import { Component } from '@angular/core';
import { ComingSoonConfig } from '../../cooming-soon/cooming-soon';
import { CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja2',
  imports: [CoomingSoon],
  templateUrl: './ninja2.html',
  styleUrl: './ninja2.scss',
})
export class Ninja2 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA 2',
    description: 'The character database and game resources for Naruto: Ultimate Ninja 2 are currently under development.',
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
