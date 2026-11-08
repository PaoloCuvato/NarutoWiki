import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterDetailModal } from '../../character-detail-modal/character-detail-modal';
import { NinjaCard } from '../../ninja-card/ninja-card';

@Component({
  selector: 'app-storm3',
  imports: [    CommonModule,
    FormsModule,CharacterDetailModal,NinjaCard],
  templateUrl: './storm3.html',
  styleUrl: './storm3.scss',
})
export class Storm3 {
  // Dati di prova per i personaggi giocabili
  playableCharacters = [
  {
    name: 'Naruto',
    image: 'characters/l_nrt2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Sakura',
    image: 'characters/l_skr2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' },

    ]
  },
  {
    name: 'Sai',
    image: 'characters/l_sai1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [      
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_04.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_174.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' },]
  },
  {
    name: 'Sage Naruto',
    image: 'characters/l_nrt3.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Karin',
    image: 'characters/l_kar1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Suigetsu',
    image: 'characters/l_sgt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kirin Sasuke',
    image: 'characters/l_ssk5.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Neji',
    image: 'characters/l_nej2.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_06.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Rock Lee',
    image: 'characters/l_roc2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Ten ten',
    image: 'characters/l_ten2.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Jugo',
    image: 'characters/l_jug1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_06.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Kabuto',
    image: 'characters/l_kbt1.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_08.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Orochimaru',
    image: 'characters/l_orc1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Shikamaru',
    image: 'characters/l_sik3.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_08.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Ino',
    image: 'characters/l_ino2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_08.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Choji',
    image: 'characters/l_tyo2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Temari',
    image: 'characters/l_tmr3.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_04_col_10.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Kankuro',
    image: 'characters/l_knk3.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Gaara',
    image: 'characters/l_gar3.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Shino',
    image: 'characters/l_sin2.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Kiba',
    image: 'characters/l_kib2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_10.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Hinata',
    image: 'characters/l_hnt2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Chiyo',
    image: 'characters/l_cyb1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_04.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Sasori',
    image: 'characters/l_sco1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Deidara',
    image: 'characters/l_ddr1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kakashi',
    image: 'characters/l_kks2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_01.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Yamato',
    image: 'characters/l_ymt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_02.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Guy',
    image: 'characters/l_guy1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_04.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Tobi',
    image: 'characters/l_tob1.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_08.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Kakuzu',
    image: 'characters/l_kzu1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Hidan',
    image: 'characters/l_hdn1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Asuma Sarutobi',
    image: 'characters/l_asm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Jiraya',
    image: 'characters/l_jry1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Tsunade',
    image: 'characters/l_tnd1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_05_col_06.png' },
     { name: 'Item 2', icon: 'items/11.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Killer Bee',
    image: 'characters/l_klb1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Konan',
    image: 'characters/l_knn1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Kisame',
    image: 'characters/l_ksm1.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Itachi Uchiha',
    image: 'characters/l_itc1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_05.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Minato Namikaze',
    image: 'characters/l_mnt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_07_col_01.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Pain',
    image: 'characters/l_pea1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_06_col_04.png' },
     { name: 'Item 2', icon: 'items/c_bat_168.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    // gen characters
   {
    name: '4Th Raikage',
    image: 'characters/l_rka2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_01.png' },
     { name: 'Item 2', icon: 'items/c_bat_183.png' },
     { name: 'Item 3', icon: 'items/c_bat_198.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Mei Terumi',
    image: 'characters/l_mei1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_10_col_10.png' },
     { name: 'Item 2', icon: 'items/c_bat_213.png' },
     { name: 'Item 3', icon: 'items/c_bat_174.png' },
     { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
   {
    name: 'Ohnoki',
    image: 'characters/l_onk1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_02.png' },
     { name: 'Item 2', icon: 'items/c_bat_183.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: '5KS Sasuke',
    image: 'characters/l_ssk6.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_04_col_01.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_213.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  
     {
    name: 'Sasuke Taka',
    image: 'characters/l_ssk4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_04_col_02.png' },
     { name: 'Item 2', icon: 'items/c_bat_174.png' },
     { name: 'Item 3', icon: 'items/c_bat_183.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    // storm 3 
  {
    name: 'EMS Sasuke',
    image: 'characters/l_ssk7.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_04_col_01.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_213.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Han',
    image: 'characters/l_han2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c10.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Yugito',
    image: 'characters/l_nyg2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c08.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Fuu',
    image: 'characters/l_who2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c01.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Yagura',
    image: 'characters/l_ygr2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c02.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_185.png' }
    ]
  },
    {
    name: 'Utakata',
    image: 'characters/l_utk1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c07.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_206.png' }
    ]
  },
    {
    name: 'Roshi',
    image: 'characters/l_rus2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c09.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'GNW Choji',
    image: 'characters/l_tyo3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c07.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'GNW Gaara',
    image: 'characters/l_gar5.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_03_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'GNW Kakashi',
    image: 'characters/l_kks3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_01.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  /*
    {
    name: 'GNW Gaara',
    image: 'characters/l_gar5.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  */
    {
    name: 'TBB Naruto',
    image: 'characters/l_nrt4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_02_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Edo Madara',
    image: 'characters/l_mdr3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c05.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'GNW Tobi',
    image: 'characters/l_tob2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c04.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_171.png' }
    ]
  },  {
    name: 'Edo Nagato',
    image: 'characters/l_ngt1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r13_c06.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'Mifune',
    image: 'characters/l_mfn1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c04.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_198.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Hanzo',
    image: 'characters/l_hnz1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c05.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_168.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'Darui',
    image: 'characters/l_dri1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s3/item_r14_c03.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Killer Bee (Samehada)',
    image: 'characters/l_klb2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_06_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Edo Itachi',
    image: 'characters/l_itc2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_03_col_05.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
    {
    name: 'Sage Kabuto',
    image: 'characters/l_kbt3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s2/item_row_05_col_08.png' },
     { name: 'Item 2', icon: 'items/c_bat_206.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },

   {
    name: 'Masked Man',
    image: 'characters/l_mdr2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_04.png' },
     { name: 'Item 2', icon: 'items/c_bat_174.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_171.png' }
    ]
  },
   {
    name: 'Snake Cloak Kabuto',
    image: 'characters/l_kbt2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_07.png' },
     { name: 'Item 2', icon: 'items/c_bat_206.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
   {
    name: 'Youth Kakashi',
    image: 'characters/l_kks1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Youth Obito',
    image: 'characters/l_obt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_11_col_06.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: 'Danzo Shimura',
    image: 'characters/l_dnz1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_10_col_09.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_198.png' },
     { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: 'Hashirama Senju',
    image: 'characters/l_hsm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_12_col_01.png' },
     { name: 'Item 2', icon: 'items/c_bat_213.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Tobirama Senju',
    image: 'characters/l_tbm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_12_col_02.png' },
     { name: 'Item 2', icon: 'items/8.png' },
     { name: 'Item 3', icon: 'items/c_bat_174.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
     {
    name: 'Hiruzen Sarutobi',
    image: 'characters/l_hrz1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/gen/item_row_10_col_08.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_171.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
   {
    name: '5KS Gaara',
    image: 'characters/l_gar4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_03_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: '5KS Temari',
    image: 'characters/l_tmr4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_04_col_10.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
   {
    name: '5KS Kankuro',
    image: 'characters/l_knk4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/s2/item_row_03_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },

    // pts characters
    {
      name: 'Naruto Uzumaki',
      image: 'characters/l_nrt1.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_02_col_09.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/8.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Sasuke Uchiha',
      image: 'characters/l_ssk1.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_02_col_10.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_186.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Sakura Haruno',
      image: 'characters/l_skr1.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_03_col_01.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_186.png' }
      ]
    },
    {
      name: 'Neji Hyuga',
      image: 'characters/l_nej1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_03_col_03.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/c_bat_216.png' },
        { name: 'Item 4', icon: 'items/c_bat_165.png' }
      ]
    },
    {
      name: 'Hinata Hyuga',
      image: 'characters/l_hnt1.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_03_col_10.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_180.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' }
      ]
    },
        {
      name: 'Rock Lee',
      image: 'characters/l_roc1.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'strikeback',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_03_col_02.png' },
        { name: 'Item 2', icon: 'items/c_bat_216.png' },
        { name: 'Item 3', icon: 'items/c_bat_174.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Gaara',
      image: 'characters/l_gar1.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_04_col_01.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Kimimaro',
      image: 'characters/l_kmm1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/s1/item_row_05_col_01.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
        {
      name: 'haku',
      image: 'characters/l_hak2.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/gen/item_row_11_col_09.png' },
        { name: 'Item 2', icon: 'items/c_bat_174.png' },
        { name: 'Item 3', icon: 'items/c_bat_213.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
        {
      name: 'Zabusa Momochi',
      image: 'characters/l_zbz1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/gen/item_row_11_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
      ]
    }
  ];

  // Dati di prova per i supporti
  supportCharacters = [
    {
      name: 'Cee',
      image: 'characters/Cee.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
    {
      name: 'Chojuro',
      image: 'characters/chojuro.png',
      dashcutIcon: '/support_type/none.png',
      dashcutType: 'Strikeback',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
        {
      name: 'Ao',
      image: 'characters/Ao.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
     {
      name: 'Akatsuchi',
      image: 'characters/akatsuchi.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
            {
      name: 'Kurotsuchi',
      image: 'characters/Kurotsuchi.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
     {
      name: 'Foo',
      image: 'characters/Foo.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    },
      {
      name: 'Torune',
      image: 'characters/Torune.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/none.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
      ]
    }
  ];

  
  searchText = '';

  get filteredCharacters(): typeof this.playableCharacters {
    const query = this.searchText.trim().toLocaleLowerCase();
    return this.playableCharacters.filter(character =>
      character.name.toLocaleLowerCase().includes(query)
    );
  }

  // --- AGGIUNGI QUESTE VARIABILI ---
  isModalOpen: boolean = false;
  selectedCharacter: any = null;

  // --- AGGIUNGI QUESTO METODO ---
  onCardClick(character: any) {
    this.selectedCharacter = character; // Salva il personaggio cliccato
    this.isModalOpen = true;            // Apre la modale
  }
}
