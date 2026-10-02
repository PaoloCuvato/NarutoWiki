import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Ninja1 } from '../gameSelection/ninja1/ninja1';
import { Ninja2 } from '../gameSelection/ninja2/ninja2';
import { Ninja3 } from '../gameSelection/ninja3/ninja3';
import { Ninja4 } from '../gameSelection/ninja4/ninja4';
import { Ninja5 } from '../gameSelection/ninja5/ninja5';
import { NinjaHeroes } from '../gameSelection/ninja-heroes/ninja-heroes';
import { NinjaHeroes2 } from '../gameSelection/ninja-heroes2/ninja-heroes2';
import { NinjaHeroes3 } from '../gameSelection/ninja-heroes3/ninja-heroes3';
import { NinjaImpact } from '../gameSelection/ninja-impact/ninja-impact';

@Component({
  selector: 'app-legacy-games',
  imports: [CardModule, ButtonModule,Ninja1,Ninja2,Ninja3,Ninja4,Ninja5,NinjaHeroes,NinjaHeroes2,NinjaHeroes3,NinjaImpact],
  templateUrl: './legacy-games.html',
  styleUrl: './legacy-games.scss',
})
export class LegacyGames {
 activeGameId: string | null = null;

  // Array con i dati dei giochi (loghi e nomi)
  stormGames = [
    { id: 'ninja1', name: 'Ultimate Ninja', logo: 'stormLogos/NUN1.png' },
    { id: 'ninja2', name: 'Ultimate Ninja 2', logo: 'stormLogos/NUN2.png' },
    { id: 'ninja3', name: 'Ultimate Ninja 3', logo: 'stormLogos/NUN3EU.png' },
    { id: 'ninja4', name: 'Ultimate Ninja 4', logo: 'stormLogos/NSUN42.png' },
    { id: 'ninja5', name: 'Ultimate Ninja 5', logo: 'stormLogos/NSUN5LQ.png' },
    
  { id: 'ninjaHeroes', name: 'Ultimate Ninja Heroes', logo: 'stormLogos/NUNH.png' }, 
  { id: 'ninjaHeroes2', name: 'Ultimate Ninja Heroes 2', logo: 'stormLogos/NUNH2TPF.jpg' }, 
  { id: 'ninjaHeroes3', name: 'Ultimate Ninja Heroes 3', logo: 'stormLogos/NSUNH3G.png' }, 
  { id: 'ninjaImpact', name: 'Ultimate Ninja Impact', logo: 'stormLogos/NSUNI.png' }, 
  ];

  // Funzione per selezionare un gioco
  selectGame(id: string) {
    this.activeGameId = id;
  }

  // Funzione per tornare alla lista
  resetSelection() {
    this.activeGameId = null;
  }
}
