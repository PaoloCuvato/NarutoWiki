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
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
    {
    name: 'Sasuke Uchiha',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    dashcutType: 'Coverfire',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Sakura Haruno',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    dashcutType: 'Charge Assist',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Neji Hyuga',
    image: 'naruto.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Tenten',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    dashcutType: 'Coverfire',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Rock Lee',
    image: 'naruto.png',
    dashcutIcon: 'strikeback.png',
    dashcutType: 'strikeback',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Shikamaru Nara',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    dashcutType: 'Coverfire',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Ino Yamanaka',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    dashcutType: 'Charge Assist',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Choji Akimichi',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    dashcutType: 'Dashcut',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Hinata Hyuga',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    dashcutType: 'Charge Assist',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Kiba Inuzuka',
    image: 'naruto.png',
    dashcutIcon: 'strikeback.png',
    dashcutType: 'Strikeback',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Shino Aburame',
    image: 'naruto.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Gaara',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    dashcutType: 'Charge Guard',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Temari',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    dashcutType: 'Coverfire',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Kankuro',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    dashcutType: 'Charge Guard',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Kakashi Hatake',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    dashcutType: 'Charge Guard',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Might Guy',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    dashcutType: 'Dashcut',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Hiruzen Sarutobi',
    image: 'naruto.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
    {
    name: 'Tsunade Senju',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    dashcutType: 'Charge Assist',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
    {
    name: 'Jiraiya',
    image: 'naruto.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
      {
    name: 'Orochimaru',
    image: 'naruto.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
    {
    name: 'Itachi Uchiha',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    dashcutType: 'Charge Guard',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Kisame Hoshigaki',
    image: 'naruto.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },
    {
    name: 'Kabuto Yakushi',
    image: 'naruto.png',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    dashcutType: 'Charge Assist',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/3.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/11.png' }
    ]
  },  {
    name: 'Kimimaro',
    image: 'naruto.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
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
      name: 'Asuma Sarutobi',
      image: 'forest.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Kurenai Yuhi',
      image: 'forest.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Shizune Kato',
      image: 'forest.png',
      dashcutType: 'Strikeback',
      dashcutIcon: 'public/rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Anko Mitarashi',
      image: 'forest.png',
      dashcutType: 'Strikeback',
      dashcutIcon: 'public/rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'First Hokage',
      image: 'forest.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Second Hokage',
      image: 'forest.png',
      dashcutIcon: '/support_type/asst_at_counter.png',
      dashcutType: 'Strikeback',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Jirobo',
      image: 'forest.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
        {
      name: 'Kidomaru',
      image: 'forest.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',    
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },{
      name: 'Sakon',
      image: 'forest.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Tayuya',
      image: 'forest.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
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