import { Component } from '@angular/core';
import { NinjaCard } from '../../ninja-card/ninja-card';
import { CharacterDetailModal } from '../../character-detail-modal/character-detail-modal';

@Component({
  selector: 'app-storm2',
  imports: [NinjaCard, CharacterDetailModal],
  templateUrl: './storm2.html',
  styleUrl: './storm2.scss',
})
export class Storm2 {
  
  // Dati di prova per i personaggi giocabili

playableCharacters = [
  {
    name: 'Naruto',
    image: 'characters/l_nrt2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_02_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Sakura',
    image: 'characters/l_skr2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_171.png' },
      { name: 'Item 4', icon: 'items/c_bat_186.png' }
    ]
  },
  {
    name: 'Sai',
    image: 'characters/l_sai1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Sage Naruto',
    image: 'characters/l_nrt3.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_04.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_171.png' },
      { name: 'Item 4', icon: 'items/c_bat_213.png' }
    ]
  },
  {
    name: 'Karin',
    image: 'characters/l_kar1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_174.png' },
      { name: 'Item 4', icon: 'items/c_bat_216.png' }
    ]
  },
  {
    name: 'Suigetsu',
    image: 'characters/l_asm1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Kirin Sasuke',
    image: 'characters/l_ssk5.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_05.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_216.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Neji',
    image: 'characters/l_nej2.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_06.png' },
      { name: 'Item 2', icon: 'items/c_bat_165.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Rock Lee',
    image: 'characters/l_roc2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_177.png' },
      { name: 'Item 4', icon: 'items/c_bat_186.png' }
    ]
  },
  {
    name: 'Ten ten',
    image: 'characters/l_ten2.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_216.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Sasuke Taka',
    image: 'characters/l_ssk4.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_04.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_183.png' }
    ]
  },
  {
    name: 'Jugo',
    image: 'characters/l_jug1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: 'strikeback.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_216.png' },
      { name: 'Item 3', icon: 'items/c_bat_174.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kabuto',
    image: 'characters/l_kbt1.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_180.png' },
      { name: 'Item 4', icon: 'items/c_bat_183.png' }
    ]
  },
  {
    name: 'Orochimaru',
    image: 'characters/l_orc1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: 'strikeback.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_08.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_171.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Shikamaru',
    image: 'characters/l_sik3.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_03_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_206.png' },
      { name: 'Item 4', icon: 'items/c_bat_186.png' }
    ]
  },
  {
    name: 'Ino',
    image: 'characters/l_ino2.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Choji',
    image: 'characters/l_tyo2.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Temari',
    image: 'characters/l_tmr3.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Kankuro',
    image: 'characters/l_knk3.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_06.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_216.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Gaara',
    image: 'characters/l_gar3.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_07.png' },
      { name: 'Item 2', icon: 'items/c_bat_198.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Shino',
    image: 'characters/l_sin2.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_09.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_177.png' },
      { name: 'Item 4', icon: 'items/c_bat_183.png' }
    ]
  },
  {
    name: 'Kiba',
    image: 'characters/l_kib2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_10.png' },
      { name: 'Item 2', icon: 'items/c_bat_216.png' },
      { name: 'Item 3', icon: 'items/c_bat_168.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Hinata',
    image: 'characters/l_hnt2.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Chiyo',
    image: 'characters/l_cyb1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Sasori',
    image: 'characters/l_sco1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Deidara',
    image: 'characters/l_ddr1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Kakashi',
    image: 'characters/l_kks2.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Yamato',
    image: 'characters/l_ymt1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Guy',
    image: 'characters/l_guy1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_05_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_180.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Tobi',
    image: 'characters/l_tob1.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_05_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_177.png' },
      { name: 'Item 4', icon: 'items/c_bat_183.png' }
    ]
  },
  {
    name: 'Kakuzu',
    image: 'characters/l_kzu1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Hidan',
    image: 'characters/l_hdn1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Asuma Sarutobi',
    image: 'characters/l_asm1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Jiraya',
    image: 'characters/l_jry1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Tsunade',
    image: 'characters/l_tnd1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Killer Bee',
    image: 'characters/l_klb1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Konan',
    image: 'characters/l_knn1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_01.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_171.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kisame',
    image: 'characters/l_ksm1.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_03.png' },
      { name: 'Item 2', icon: 'items/c_bat_216.png' },
      { name: 'Item 3', icon: 'items/c_bat_180.png' },
      { name: 'Item 4', icon: 'items/c_bat_183.png' }
    ]
  },
  {
    name: 'Itachi Uchiha',
    image: 'characters/l_knk1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/s1/item_row_04_col_02.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_206.png' },
      { name: 'Item 4', icon: 'items/c_bat_216.png' }
    ]
  },
  {
    name: 'Minato Namikaze',
    image: 'characters/l_mnt1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
  {
    name: 'Pain',
    image: 'characters/l_pea1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  },
    {
    name: 'Lars',
    image: 'characters/l_cyo1.png',
    dashcutType: '',
    dashcutIcon: '',
    tierIcon: 'rate_a_l.png',
    itemsets: []
  }
];

  // Dati di prova per i supporti
  supportCharacters = [
  ];

  // --- AGGIUNGI QUESTE VARIABILI ---
  isModalOpen: boolean = false;
  selectedCharacter: any = null;

  // --- AGGIUNGI QUESTO METODO ---
  onCardClick(character: any) {
    this.selectedCharacter = character; // Salva il personaggio cliccato
    this.isModalOpen = true;            // Apre la modale
  }
}
