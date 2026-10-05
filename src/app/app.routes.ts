import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { Homepage } from './components/homepage/homepage';

import { Community } from './components/community/community';
import { Resources } from './components/resources/resources';
import { Faq } from './components/faq/faq';
import { About } from './components/about/about';
import { Games } from './components/games/games';
import { Matchmaking } from './components/matchmaking/matchmaking';
import { Callback } from './components/callback/callback'; 
import { Leaderboard } from './components/leaderboard/leaderboard';
import { Tournaments } from './components/tournaments/tournaments';
import { LegacyGames } from './components/legacy-games/legacy-games';
import { CommunityHighlights } from './components/community-highlights/community-highlights';
import { CommunityEvents } from './components/community-events/community-events';
import { CommunityProjects } from './components/community-projects/community-projects';
import { TierTool } from './components/tier-tool/tier-tool';

export const routes: Routes = [
{ path: 'home', component: Homepage },
{ path: 'games/storm-series', component: Games },
{ path: 'games/legacy-series', component: LegacyGames },

{ path: 'matchmaking/lobbies', component: Matchmaking },
{ path: 'matchmaking/leaderboard', component: Leaderboard },

{ path: 'community', component: Community },
{ path: 'community/projects', component: CommunityProjects },
{ path: 'community/tournaments', component: Tournaments },
{ path: 'community/events', component: CommunityEvents },
{ path: 'community/highlights', component: CommunityHighlights },

{ path: 'resources', component: Resources },
// { path: 'resources/game-resources', component: GameResources },
// { path: 'resources/modding-resources', component: ModdingResources },
// { path: 'resources/patch-notes', component: PatchNotes },
{ path: 'tier-tool', component: TierTool },

{ path: 'faq', component: Faq },
{ path: 'about', component: About },
{ path: 'callback', component: Callback }, 

{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Se l'URL è vuoto, vai in Home
{ path: '**', redirectTo: '/home' } // Se l'utente scrive un URL a caso, torna in Home

];
