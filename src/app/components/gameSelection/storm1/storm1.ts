import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinjaCard } from '../../ninja-card/ninja-card';
import { CharacterDetailModal } from '../../character-detail-modal/character-detail-modal';

@Component({
  selector: 'app-storm1',
  standalone: true,
  imports: [CommonModule, NinjaCard, CharacterDetailModal],
  templateUrl: './storm1.html',
  styleUrl: './storm1.scss',
})
export class Storm1 {
  
  // Dati di prova per i personaggi giocabili
  playableCharacters = [
    {
      name: 'Naruto Uzumaki',
      image: 'characters/l_nrt1.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/8.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Sasuke Uchiha',
      image: 'characters/l_ssk1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_186.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Sakura Haruno',
      image: 'characters/l_skr1.png',
      dashcutIcon: '/support_type/asst_sp_ckr.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_186.png' }
      ]
    },
    {
      name: 'Neji Hyuga',
      image: 'characters/l_nej1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/c_bat_216.png' },
        { name: 'Item 4', icon: 'items/c_bat_165.png' }
      ]
    },
    {
      name: 'Tenten',
      image: 'characters/l_ten1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_186.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' },
      ]
    },
    {
      name: 'Rock Lee',
      image: 'characters/l_roc1.png',
      dashcutIcon: 'strikeback.png',
      dashcutType: 'strikeback',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_216.png' },
        { name: 'Item 3', icon: 'items/c_bat_174.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Shikamaru Nara',
      image: 'characters/l_sik1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/c_bat_216.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Ino Yamanaka',
      image: 'characters/l_ino1.png',
      dashcutIcon: '/support_type/asst_sp_ckr.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_177.png' },
        { name: 'Item 4', icon: 'items/c_bat_186.png' }
      ]
    },
    {
      name: 'Choji Akimichi',
      image: 'characters/l_tyo1.png',
      dashcutIcon: '/support_type/asst_sp_cut.png',
      dashcutType: 'Dashcut',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_165.png' },
        { name: 'Item 3', icon: 'items/c_bat_213.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Hinata Hyuga',
      image: 'characters/l_hnt1.png',
      dashcutIcon: '/support_type/asst_sp_ckr.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_180.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' }
      ]
    },
    {
      name: 'Kiba Inuzuka',
      image: 'characters/l_kib1.png',
      dashcutIcon: 'strikeback.png',
      dashcutType: 'Strikeback',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Shino Aburame',
      image: 'characters/l_sin1.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_171.png' },
        { name: 'Item 3', icon: 'items/c_bat_206.png' },
        { name: 'Item 4', icon: 'items/c_bat_186.png' }
      ]
    },
    {
      name: 'Gaara',
      image: 'characters/l_gar1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Temari',
      image: 'characters/l_tmr1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_216.png' },
        { name: 'Item 3', icon: 'items/c_bat_180.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' }
      ]
    },
    {
      name: 'Kankuro',
      image: 'characters/l_knk1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_206.png' },
        { name: 'Item 4', icon: 'items/c_bat_216.png' }
      ]
    },
    {
      name: 'Kakashi Hatake',
      image: 'characters/l_kks1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_213.png' }
      ]
    },
    {
      name: 'Might Guy',
      image: 'characters/l_guy1.png',
      dashcutIcon: '/support_type/asst_sp_cut.png',
      dashcutType: 'Dashcut',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_174.png' },
        { name: 'Item 4', icon: 'items/c_bat_216.png' }
      ]
    },
    {
      name: 'Hiruzen Sarutobi',
      image: 'characters/l_hrz1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Tsunade Senju',
      image: 'characters/l_tnd1.png',
      dashcutIcon: '/support_type/asst_sp_ckr.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_198.png' },
        { name: 'Item 3', icon: 'items/c_bat_183.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Jiraiya',
      image: 'characters/l_jry1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_216.png' },
        { name: 'Item 4', icon: 'items/c_bat_165.png' }
      ]
    },
    {
      name: 'Orochimaru',
      image: 'characters/l_orc1.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_177.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' }
      ]
    },
    {
      name: 'Itachi Uchiha',
      image: 'characters/l_itc1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_186.png' },
        { name: 'Item 3', icon: 'items/c_bat_180.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Kisame Hoshigaki',
      image: 'characters/l_ksm1.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_177.png' },
        { name: 'Item 4', icon: 'items/c_bat_183.png' }
      ]
    },
    {
      name: 'Kabuto Yakushi',
      image: 'characters/l_kbt1.png',
      dashcutIcon: '/support_type/asst_sp_ckr.png',
      dashcutType: 'Charge Assist',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_216.png' },
        { name: 'Item 3', icon: 'items/c_bat_168.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Kimimaro',
      image: 'characters/l_kmm1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_171.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    }
  ];

  // Dati di prova per i supporti
  supportCharacters = [
    {
      name: 'Asuma Sarutobi',
      image: 'characters/l_asm1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Kurenai Yuhi',
      image: 'characters/i_kur.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Shizune Kato',
      image: 'characters/i_shi.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Anko Mitarashi',
      image: 'characters/i_anko.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'First Hokage',
      image: 'characters/l_hsm1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Second Hokage',
      image: 'characters/l_tbm1.png',
      dashcutIcon: '/support_type/asst_at_counter.png',
      dashcutType: 'Strikeback',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Jirobo',
      image: 'characters/l_jrb1.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Kidomaru',
      image: 'characters/l_kdm1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',    
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    },
    {
      name: 'Sakon',
      image: 'characters/l_skn1.png',
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
      image: 'characters/l_tyy1.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'rate_a_l.png' },
        { name: 'Item 2', icon: 'rate_b_l.png' }
      ]
    }
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