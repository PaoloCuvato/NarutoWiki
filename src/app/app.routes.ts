import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { Homepage } from './components/homepage/homepage';

import { Community } from './components/community/community';
import { Resources } from './components/resources/resources';
import { Faq } from './components/faq/faq';
import { About } from './components/about/about';
import { Games } from './components/games/games';

export const routes: Routes = [
{ path: 'home', component: Homepage },
{ path: 'games', component: Games },
{ path: 'community', component: Community },
{ path: 'resources', component: Resources },
{ path: 'faq', component: Faq },
{ path: 'about', component: About },

{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Se l'URL è vuoto, vai in Home
{ path: '**', redirectTo: '/home' } // Se l'utente scrive un URL a caso, torna in Home

];
