import { Component } from '@angular/core';
import { ComingSoonConfig, CoomingSoon } from '../../cooming-soon/cooming-soon';

@Component({
  selector: 'app-ninja-heroes3',
  imports: [CoomingSoon],
  templateUrl: './ninja-heroes3.html',
  styleUrl: './ninja-heroes3.scss',
})
export class NinjaHeroes3 {
  comingSoonConfig: ComingSoonConfig = {
    title: 'NARUTO: ULTIMATE NINJA HEROES 3',
    description: 'The character database and game resources for Naruto: Ultimate Ninja Heroes 3 are currently under development.',
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
