import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja-impact',
  imports: [CoomingSoon],
  templateUrl: './ninja-impact.html',
  styleUrl: './ninja-impact.scss',
})
export class NinjaImpact {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA IMPACT',
    description: 'The character database and game resources for Naruto: Ultimate Ninja Impact are currently under development.',
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
