import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinjaCard } from '../../ninja-card/ninja-card';
@Component({
  selector: 'app-storm1',
  standalone: true,
  imports: [CommonModule, NinjaCard],
  templateUrl: './storm1.html',
  styleUrl: './storm1.scss',
})
export class Storm1 {
  
  // Dati di prova per i personaggi giocabili
  playableCharacters = [
    {
      name: 'Naruto Uzumaki',
      image: 'naruto.png',
      dashcutType: 'Stickback',
      dashcutIcon: 'strikeback.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/3.png' },
        { name: 'Item 3', icon: 'items/8.png' },
        { name: 'Item 4', icon: 'items/11.png' }
      ]
    }
  ];

  // Dati di prova per i supporti (per ora usiamo sempre Naruto come richiesto)
  supportCharacters = [
    {
      name: 'Naruto Uzumaki',
      image: 'forest.png',
      dashcutType: 'Stickback',
      dashcutIcon: 'public/rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    }
  ];

  onCardClick(char: any) {
    console.log('Hai cliccato su:', char.name);
  }
}