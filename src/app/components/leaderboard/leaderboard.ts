import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface NinjaPlayer {
  username: string;
  score: number;
  clan: string;
  level: number;
  wins: number;
  losses: number;
}

@Component({
  selector: 'app-leaderboard',
  imports: [TableModule,ButtonModule,CommonModule],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.scss',
})
export class Leaderboard implements OnInit {
  ninjaList: NinjaPlayer[] = [
    { "username": "NarutoUz_99", "score": 25400, "clan": "Uzumaki", "level": 100, "wins": 150, "losses": 23 },
    { "username": "Sasuke_Uch", "score": 24950, "clan": "Uchiha", "level": 99, "wins": 142, "losses": 28 },
    { "username": "Kakashi_Hat", "score": 21000, "clan": "Hatake", "level": 85, "wins": 120, "losses": 35 },
    { "username": "Itachi_Shadow", "score": 20500, "clan": "Uchiha", "level": 92, "wins": 115, "losses": 12 },
    { "username": "Gaara_Desert", "score": 19800, "clan": "Kazekage", "level": 88, "wins": 108, "losses": 40 },
    { "username": "Jiraiya_Sage", "score": 19200, "clan": "Sennin", "level": 89, "wins": 105, "losses": 45 },
    { "username": "Tsunade_Healer", "score": 18500, "clan": "Senju", "level": 87, "wins": 98, "losses": 38 },
    { "username": "Orochimaru_Snake", "score": 18100, "clan": "Sennin", "level": 90, "wins": 95, "losses": 50 },
    { "username": "Minato_Flash", "score": 17900, "clan": "Namikaze", "level": 95, "wins": 99, "losses": 5 },
    { "username": "Madara_God", "score": 17500, "clan": "Uchiha", "level": 98, "wins": 92, "losses": 8 },
    { "username": "Shikamaru_Brain", "score": 16200, "clan": "Nara", "level": 78, "wins": 88, "losses": 15 },
    { "username": "Hinata_Hy", "score": 15800, "clan": "Hyuga", "level": 75, "wins": 82, "losses": 30 },
    { "username": "Neji_Genius", "score": 15400, "clan": "Hyuga", "level": 80, "wins": 85, "losses": 22 },
    { "username": "RockLee_Gates", "score": 14900, "clan": "Lee", "level": 79, "wins": 79, "losses": 41 },
    { "username": "Sakura_Haru", "score": 14200, "clan": "Haruno", "level": 76, "wins": 74, "losses": 39 },
    { "username": "Pain_Akatsuki", "score": 13800, "clan": "Uz_Akatsuki", "level": 88, "wins": 70, "losses": 10 },
    { "username": "Obito_Mask", "score": 13100, "clan": "Uchiha", "level": 84, "wins": 68, "losses": 18 },
    { "username": "KillerBee_8", "score": 12900, "clan": "Gyuki", "level": 82, "wins": 65, "losses": 25 },
    { "username": "Deidara_Art", "score": 12100, "clan": "Akatsuki", "level": 74, "wins": 60, "losses": 32 },
    { "username": "Sai_Ink", "score": 11500, "clan": "Shimdan", "level": 70, "wins": 55, "losses": 28 }
  ];

  ngOnInit(): void {
  }

  // LOGICA DEI TITOLI IN BASE AL PUNTEGGIO (SCORE)
  getNinjaTitle(score: number): string {
    if (score >= 40000) return "Hero";
    if (score >= 33333) return "Sage of the Six Paths";
    if (score >= 30000) return "God of Ninja";
    if (score >= 26666) return "God of War";
    if (score >= 25000) return "The Professor";
    if (score >= 23333) return "Major General";
    if (score >= 22000) return "Great Sage";
    if (score >= 21333) return "Sage";
    if (score >= 20666) return "Legendary Ninja";
    if (score >= 20000) return "Aide to the Five Kage";
    if (score >= 19333) return "Allied Shinobi Forces General";
    if (score >= 18666) return "Allied Shinobi Forces Regiment Leader";
    if (score >= 18000) return "Allied Shinobi Forces Squad Leader";
    if (score >= 17333) return "Allied Shinobi Forces Commander";
    if (score >= 16666) return "Infallible Ninja";
    if (score >= 16000) return "Mighty Warrior Ninja";
    if (score >= 14666) return "Battle-Hardened Ninja";
    if (score >= 13333) return "Famous Ninja";
    if (score >= 12000) return "Anbu General";
    if (score >= 10666) return "Anbu Subleader";
    if (score >= 10000) return "Anbu Squad Leader";
    if (score >= 8666)  return "Anbu Black Ops";
    if (score >= 8000)  return "Seven Swordsmen of the Mist";
    if (score >= 7333)  return "Jonin General";
    if (score >= 6666)  return "Jonin Subleader";
    if (score >= 6000)  return "Jonin Squad Leader";
    if (score >= 5333)  return "Jonin";
    if (score >= 4666)  return "Chunin General";
    if (score >= 4000)  return "Chunin Subleader";
    if (score >= 3333)  return "Chunin Squad Leader";
    if (score >= 2000)  return "Chunin";
    if (score >= 1666)  return "Genin General";
    if (score >= 1333)  return "Genin Subleader";
    if (score >= 1000)  return "Genin Squad Leader";
    if (score >= 666)   return "Genin";
    if (score >= 500)   return "Upperclassmen";
    if (score >= 333)   return "Underclassmen";
    if (score >= 166)   return "Student Reserves";
    return "Trainee";
  }
}
