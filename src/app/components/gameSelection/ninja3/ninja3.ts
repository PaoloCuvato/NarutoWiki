import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja3',
  imports: [CoomingSoon],
  templateUrl: './ninja3.html',
  styleUrl: './ninja3.scss',
})
export class Ninja3 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA 3',
    description: 'The character database and game resources for Naruto: Ultimate Ninja 3 are currently under development.',
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
