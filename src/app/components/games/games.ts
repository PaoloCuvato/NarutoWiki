import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessario per far funzionare @if e @for

// Importa i componenti dei giochi che hai creato
import { Storm1 } from '../gameSelection/storm1/storm1';
import { Storm2 } from '../gameSelection/storm2/storm2';
import { Storm3 } from '../gameSelection/storm3/storm3';
import { Storm4 } from '../gameSelection/storm4/storm4';
import { StormCons } from '../gameSelection/storm-cons/storm-cons';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-games',
imports: [
    CommonModule, // Abilita la logica Angular nell'HTML
    Storm1, 
    Storm2, 
    Storm3, 
    Storm4, 
    StormCons,CardModule,ButtonModule
  ],  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  // Variabile per gestire quale gioco mostrare
  activeGameId: string | null = null;

  // Array con i dati dei giochi (loghi e nomi)
  stormGames = [
    { id: 'storm1', name: 'Storm 1', logo: 'stormLogos/NSUNS.png' },
    { id: 'storm2', name: 'Storm 2', logo: 'stormLogos/NSUNS2.png' },
    { id: 'stormgen', name: 'Storm Generations', logo: 'stormLogos/NSUNSG.png' },


    { id: 'storm3', name: 'Storm 3 Full Burst', logo: 'stormLogos/NSUNSFB.png' },
    { id: 'stormrev', name: 'Storm Revolution', logo: 'stormLogos/NSUNSR.png' },

    { id: 'storm4', name: 'Storm 4 RTB', logo: 'stormLogos/NSUNSRTB.png' },
    { id: 'stormevo', name: 'Storm Evolution', logo: 'stormLogos/NSUNSE.png' },
    { id: 'stormconn', name: 'Storm Connections', logo: 'stormLogos/NXBUNSC.png' }
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