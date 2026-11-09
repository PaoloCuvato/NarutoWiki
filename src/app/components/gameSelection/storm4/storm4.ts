import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CharacterDetailModal } from '../../character-detail-modal/character-detail-modal';
import { NinjaCard } from '../../ninja-card/ninja-card';
import { FormsModule } from '@angular/forms';

interface MoveVideo {
  title: string;
  category: string;
  description: string;
  videoUrl: string;
}

interface GuideItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-storm4',
  standalone: true,
  imports: [CommonModule,
    FormsModule,CharacterDetailModal,NinjaCard
  ],
  templateUrl: './storm4.html',
  styleUrl: './storm4.scss'
})
export class Storm4 {

    // Dati di prova per i personaggi giocabili
  playableCharacters = [
  {
    name: 'Naruto',
    image: 'characters/l_nrt2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
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
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' },

    ]
  },
  {
    name: 'Sai',
    image: 'characters/l_sai1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [      
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_174.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' },]
  },
  {
    name: 'Sage Naruto',
    image: 'characters/l_nrt3.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Karin',
    image: 'characters/l_kar1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Suigetsu',
    image: 'characters/l_sgt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kirin Sasuke',
    image: 'characters/l_ssk3.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Neji',
    image: 'characters/l_nej2.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Rock Lee',
    image: 'characters/l_roc2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Ten ten',
    image: 'characters/l_ten2.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Jugo',
    image: 'characters/l_jug1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  // storm 4 characters
  {
    name: 'Six Paths Naruto',
    image: 'characters/l_nrt6.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'Rinne Sasuke',
    image: 'characters/l_ssk8.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Sakura',
    image: 'characters/l_skr4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Hinata Hyuga',
    image: 'characters/l_hnt4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'Rin Nohara',
    image: 'characters/l_rin1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_155.png' }
    ]
  },
    {
    name: 'Six Paths Madara',
    image: 'characters/l_mdr5.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'Six Paths Obito',
    image: 'characters/l_obt3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
      {
    name: 'Rampage Obito',
    image: 'characters/l_obt4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'kaguya',
    image: 'characters/l_kgy1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'The Last Naruto',
    image: 'characters/l_nrt7.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/11.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
      {
    name: 'RTB Naruto',
    image: 'characters/l_nrt8.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/11.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'The Last Sasuke',
    image: 'characters/l_ssk9.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
      {
    name: 'RTB Sasuke',
    image: 'characters/l_ssk10.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
      {
    name: 'Boruto Uzumaki',
    image: 'characters/l_brt1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
        {
    name: 'Boruto Uzumaki',
    image: 'characters/l_brt2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },      {
    name: 'Boruto Uzumaki',
    image: 'characters/l_brt4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'Sarada Uchiha',
    image: 'characters/l_sld1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
      {
    name: 'Sarada Uchiha',
    image: 'characters/l_sld2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
      {
    name: 'Mitsuki',
    image: 'characters/l_mtk1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
    {
    name: 'Hanabi Hyuga',
    image: 'characters/l_hnb1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
      {
    name: 'Momoshiki Ōtsutsuki',
    image: 'characters/l_msk2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
      {
    name: 'Kinshiki Ōtsutsuki',
    image: 'characters/l_ksk3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/11.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },

  // end of storm 4 characters
  {
    name: 'Kabuto',
    image: 'characters/l_kbt1.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Orochimaru',
    image: 'characters/l_orc1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  // rev characters
  {
    name: 'Rasa',
    image: 'characters/l_kkg1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },  {
    name: '3rd Raikage',
    image: 'characters/l_rkf1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_198.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },  {
    name: 'Muu',
    image: 'characters/l_muu1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },  {
    name: 'Gengetsu Hōzuki',
    image: 'characters/l_mkg1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },  {
    name: 'Kushina',
    image: 'characters/l_ksn1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },  {
    name: 'Iruka',
    image: 'characters/l_irk1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/8.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },  {
    name: 'Konohamaru Sarutobi',
    image: 'characters/l_khm1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_186.png' }
    ]
  },  {
    name: 'KLM Naruto',
    image: 'characters/l_nrt5.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/11.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },  {
    name: 'Rinne Rebirth Madara',
    image: 'characters/l_mdr3.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },{
    name: 'Mecha Naruto',
    image: 'characters/l_mnr1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },  {
    name: 'Edo Hashirama',
    image: 'characters/l_hsm3.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },  {
    name: 'Edo Minato',
    image: 'characters/l_mnt3.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },  {
    name: 'Shisui Uchiha',
    image: 'characters/l_ssi1.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },  {
    name: 'GNW Obito',
    image: 'characters/l_obt2.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_163.png' }
    ]
  },  {
    name: 'Sharingan Kakashi',
    image: 'characters/l_kks5.png',
    dashcutType: 'Dashcut',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  // end of rev characters
  {
    name: 'Shikamaru',
    image: 'characters/l_sik3.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Ino',
    image: 'characters/l_ino2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Choji',
    image: 'characters/l_tyo2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Temari',
    image: 'characters/l_tmr3.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Kankuro',
    image: 'characters/l_knk3.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Gaara',
    image: 'characters/l_gar3.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
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
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Kiba',
    image: 'characters/l_kib2.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Hinata',
    image: 'characters/l_hnt2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Chiyo',
    image: 'characters/l_cyb1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Sasori',
    image: 'characters/l_sco1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Deidara',
    image: 'characters/l_ddr1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Kakashi',
    image: 'characters/l_kks2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Yamato',
    image: 'characters/l_ymt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Guy',
    image: 'characters/l_guy1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
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
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Kakuzu',
    image: 'characters/l_kzu1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Hidan',
    image: 'characters/l_hdn1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Asuma Sarutobi',
    image: 'characters/l_asm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Jiraya',
    image: 'characters/l_jry1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Tsunade',
    image: 'characters/l_tnd1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/11.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Killer Bee',
    image: 'characters/l_klb1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Konan',
    image: 'characters/l_knn1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Kisame',
    image: 'characters/l_ksm1.png',
    dashcutType: 'Coverfire',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Itachi Uchiha',
    image: 'characters/l_itc1.png',
    dashcutType: 'Charge Guard',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Minato Namikaze',
    image: 'characters/l_mnt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Pain',
    image: 'characters/l_pea1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
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
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_183.png' },
     { name: 'Item 3', icon: 'items/c_bat_198.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Mei Terumi',
    image: 'characters/l_mei1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_213.png' },
     { name: 'Item 3', icon: 'items/c_bat_174.png' },
     { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
   {
    name: 'Ohnoki',
    image: 'characters/l_onk1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_183.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: '5KS Sasuke',
    image: 'characters/l_ssk6.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_213.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  
     {
    name: 'Sasuke Taka',
    image: 'characters/l_ssk4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
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
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_213.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Han',
    image: 'characters/l_han2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Yugito',
    image: 'characters/l_nyg2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Fuu',
    image: 'characters/l_who2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Yagura',
    image: 'characters/l_ygr2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_185.png' }
    ]
  },
    {
    name: 'Utakata',
    image: 'characters/l_utk1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_206.png' }
    ]
  },
    {
    name: 'Roshi',
    image: 'characters/l_rus2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'GNW Choji',
    image: 'characters/l_tyo3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'GNW Gaara',
    image: 'characters/l_gar5.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'GNW Kakashi',
    image: 'characters/l_kks3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
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
      { name: 'Item 1', icon: 'items/1.png' },
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
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Edo Madara',
    image: 'characters/l_mdr3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_213.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'GNW Tobi',
    image: 'characters/l_tob2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_171.png' }
    ]
  },  {
    name: 'Edo Nagato',
    image: 'characters/l_ngt1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
    {
    name: 'Mifune',
    image: 'characters/l_mfn1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_198.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
    {
    name: 'Hanzo',
    image: 'characters/l_hnz1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_168.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
    {
    name: 'Darui',
    image: 'characters/l_dri1.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_168.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Killer Bee (Samehada)',
    image: 'characters/l_klb2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
    {
    name: 'Edo Itachi',
    image: 'characters/l_itc2.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
    {
    name: 'Sage Kabuto',
    image: 'characters/l_kbt3.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_206.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },

   {
    name: 'Masked Man',
    image: 'characters/l_mdr2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_174.png' },
     { name: 'Item 3', icon: 'items/8.png' },
     { name: 'Item 4', icon: 'items/c_bat_171.png' }
    ]
  },
   {
    name: 'Snake Cloak Kabuto',
    image: 'characters/l_kbt2.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_206.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
   {
    name: 'Youth Kakashi',
    image: 'characters/l_kks1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Youth Obito',
    image: 'characters/l_obt1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_211.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: 'Danzo Shimura',
    image: 'characters/l_dnz1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_scf_oug.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_186.png' },
     { name: 'Item 3', icon: 'items/c_bat_198.png' },
     { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: 'Hashirama Senju',
    image: 'characters/l_hsm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/c_bat_213.png' },
     { name: 'Item 3', icon: 'items/c_bat_186.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
   {
    name: 'Tobirama Senju',
    image: 'characters/l_tbm1.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
     { name: 'Item 2', icon: 'items/8.png' },
     { name: 'Item 3', icon: 'items/c_bat_174.png' },
     { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
     {
    name: 'Hiruzen Sarutobi',
    image: 'characters/l_hrz1.png',
    dashcutType: '',
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
    name: '5KS Gaara',
    image: 'characters/l_gar4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
   {
    name: '5KS Temari',
    image: 'characters/l_tmr4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
   {
    name: '5KS Kankuro',
    image: 'characters/l_knk4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
     { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },

    // pts characters
{
  name: 'PTS Naruto Uzumaki',
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
  name: 'PTS Sasuke Uchiha',
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
  name: 'PTS Sakura Haruno',
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
  name: 'PTS Neji Hyuga',
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
  name: 'PTS Tenten',
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
  name: 'PTS Rock Lee',
  image: 'characters/l_roc1.png',
  dashcutIcon: '/support_type/asst_at_counter.png',
  dashcutType: 'Strikeback',
  tierIcon: 'rate_a_l.png',
  itemsets: [
    { name: 'Item 1', icon: 'items/1.png' },
    { name: 'Item 2', icon: 'items/c_bat_216.png' },
    { name: 'Item 3', icon: 'items/c_bat_174.png' },
    { name: 'Item 4', icon: 'items/c_bat_162.png' }
  ]
},
{
  name: 'PTS Shikamaru Nara',
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
  name: 'PTS Ino Yamanaka',
  image: 'characters/l_ino1.png',
  dashcutIcon: '/support_type/asst_sp_ckr.png',
  dashcutType: 'Charge Assist',
  tierIcon: 'rate_a_l.png',
  itemsets: [
    { name: 'Item 1', icon: 'items/1.png' },
    { name: 'Item 2', icon: 'items/c_bat_168.png' },
    { name: 'Item 3', icon: 'items/c_bat_213.png' },
    { name: 'Item 4', icon: 'items/c_bat_186.png' }
  ]
},
{
  name: 'PTS Choji Akimichi',
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
  name: 'PTS Hinata Hyuga',
  image: 'characters/l_hnt1.png',
  dashcutIcon: '/support_type/asst_sp_ckr.png',
  dashcutType: 'Charge Assist',
  tierIcon: 'rate_a_l.png',
  itemsets: [
    { name: 'Item 1', icon: 'items/1.png' },
    { name: 'Item 2', icon: 'items/c_bat_168.png' },
    { name: 'Item 3', icon: 'items/c_bat_186.png' },
    { name: 'Item 4', icon: 'items/c_bat_183.png' }
  ]
},
{
  name: 'PTS Kiba Inuzuka',
  image: 'characters/l_kib1.png',
  dashcutIcon: '/support_type/asst_at_counter.png',
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
  name: 'PTS Shino Aburame',
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
  name: 'PTS Gaara',
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
  name: 'PTS Temari',
  image: 'characters/l_tmr1.png',
  dashcutIcon: '/support_type/asst_sp_cover.png',
  dashcutType: 'Coverfire',
  tierIcon: 'rate_a_l.png',
  itemsets: [
    { name: 'Item 1', icon: 'items/1.png' },
    { name: 'Item 2', icon: 'items/c_bat_216.png' },
    { name: 'Item 3', icon: 'items/c_bat_183.png' },
    { name: 'Item 4', icon: 'items/c_bat_198.png' }
  ]
},
{
  name: 'PTS Kankuro',
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
    },
        {
      name: 'haku',
      image: 'characters/l_hak2.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_scf_oug.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_174.png' },
        { name: 'Item 3', icon: 'items/c_bat_213.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
        {
      name: 'Zabusa Momochi',
      image: 'characters/l_zbz1.png',
      dashcutType: 'Secret Substitution',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
      ]
    },
    {
      name: 'Jirobo',
      image: 'characters/l_jrb1.png',
      dashcutType: 'Break Guard',
      dashcutIcon: '/support_type/asst_at_guard.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_168.png' },
        { name: 'Item 3', icon: 'items/c_bat_183.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },
    {
      name: 'Kidomaru',
      image: 'characters/l_kdm1.png',
      dashcutIcon: '/support_type/asst_sp_cover.png',
      dashcutType: 'Coverfire',
      tierIcon: 'rate_a_l.png',    
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_186.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Sakon',
      image: 'characters/l_skn1.png',
      dashcutIcon: '/support_type/asst_sp_guard.png',
      dashcutType: 'Charge Guard',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_213.png' },
        { name: 'Item 3', icon: 'items/c_bat_186.png' },
        { name: 'Item 4', icon: 'items/c_bat_162.png' }
      ]
    },
    {
      name: 'Tayuya',
      image: 'characters/l_tyy1.png',
      dashcutType: 'Strikeback',
      dashcutIcon: '/support_type/asst_at_counter.png',
      tierIcon: 'rate_a_l.png',
      itemsets: [
        { name: 'Item 1', icon: 'items/1.png' },
        { name: 'Item 2', icon: 'items/c_bat_183.png' },
        { name: 'Item 3', icon: 'items/8.png' },
        { name: 'Item 4', icon: 'items/c_bat_198.png' }
      ]
    },

    // rtb characters
    {
    name: 'Naruto RTB',
    image: 'characters/l_nrt12.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/11.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Sasuke RTB',
    image: 'characters/l_ssk12.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_186.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Sakura RTB',
    image: 'characters/l_skr4.png',
    dashcutType: 'Strikeback',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Sai RTB',
    image: 'characters/l_sai3.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_183.png' },
      { name: 'Item 3', icon: 'items/c_bat_174.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' },
    ]
  },
  {
    name: 'Shikamaru RTB',
    image: 'characters/l_sik5.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_174.png' },
      { name: 'Item 3', icon: 'items/c_bat_183.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Ino RTB',
    image: 'characters/l_ino4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Choji RTB',
    image: 'characters/l_tyo4.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cut.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_203.png' }
    ]
  },
  {
    name: 'Kiba RTB',
    image: 'characters/l_kib4.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Hinata RTB',
    image: 'characters/l_hnt5.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_ckr.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Rock Lee RTB',
    image: 'characters/l_roc4.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_at_counter.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
  {
    name: 'Ten ten RTB',
    image: 'characters/l_ten4.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Shino RTB',
    image: 'characters/l_sin4.png',
    dashcutType: 'Break Guard',
    dashcutIcon: '/support_type/none.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/3.png' }
    ]
  },
  {
    name: 'Gaara RTB',
    image: 'characters/l_gar6.png',
    dashcutType: 'Charge Assist',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_171.png' },
      { name: 'Item 3', icon: 'items/c_bat_213.png' },
      { name: 'Item 4', icon: 'items/c_bat_165.png' }
    ]
  },
  {
    name: 'Kankuro RTB',
    image: 'characters/l_knk6.png',
    dashcutType: 'Secret Substitution',
    dashcutIcon: '/support_type/asst_sp_guard.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/c_bat_206.png' },
      { name: 'Item 3', icon: 'items/8.png' },
      { name: 'Item 4', icon: 'items/c_bat_162.png' }
    ]
  },
  {
    name: 'Temari RTB',
    image: 'characters/l_tmr6.png',
    dashcutType: '',
    dashcutIcon: '/support_type/asst_sp_cover.png',
    tierIcon: 'rate_a_l.png',
    itemsets: [
      { name: 'Item 1', icon: 'items/1.png' },
      { name: 'Item 2', icon: 'items/11.png' },
      { name: 'Item 3', icon: 'items/c_bat_186.png' },
      { name: 'Item 4', icon: 'items/c_bat_198.png' }
    ]
  },
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