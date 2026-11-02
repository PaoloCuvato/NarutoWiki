import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja-heroes2',
  imports: [CoomingSoon],
  templateUrl: './ninja-heroes2.html',
  styleUrl: './ninja-heroes2.scss',
})
export class NinjaHeroes2 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA HEROES 2',
    description: 'The character database and game resources for Naruto: Ultimate Ninja Heroes 2 are currently under development.',
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
