import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { CharacterCooldown } from '../character-cooldown/character-cooldown';
import { JutsuDatabase } from '../jutsu-database/jutsu-database';
import { Terminology } from '../terminology/terminology';
import { ItemDb } from '../item-db/item-db';


@Component({
  selector: 'app-game-resources',
  standalone: true,
  imports: [
    CommonModule,
    TabsModule,
    CharacterCooldown,
    JutsuDatabase,
    Terminology,
    ItemDb
],
  templateUrl: './game-resources.html',
  styleUrl: './game-resources.scss',
})
export class GameResources {
  activeIndex: number = 0;
}