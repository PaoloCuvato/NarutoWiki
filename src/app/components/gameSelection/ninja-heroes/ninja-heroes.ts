import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja-heroes',
  imports: [CoomingSoon],
  templateUrl: './ninja-heroes.html',
  styleUrl: './ninja-heroes.scss',
})
export class NinjaHeroes {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA HEROES',
    description: 'The character database and game resources for Naruto: Ultimate Ninja Heroes are currently under development.',
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
