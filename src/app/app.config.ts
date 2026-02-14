import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonModule } from 'primeng/button';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const MyNinjaPreset = definePreset(Aura, {
    semantic: {
        primary: {
            500: '#1A1A1A', // Il colore base dei componenti PrimeNG sarà Nero
        }
    }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),



// --- AGGIUNGIAMO QUESTI DUE ---
    provideAnimationsAsync(), 
    providePrimeNG({ 
        theme: {
            preset: MyNinjaPreset,
            options: {
                darkModeSelector: 'none',
                cssLayer: false
            }
        }
    })
  ]
};