import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface DiscordUser {
  username: string;
  avatarUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private platformId = inject(PLATFORM_ID);
  
  // Stato reattivo dell'utente
  private userSubject = new BehaviorSubject<DiscordUser | null>(this.getStoredUser());
  user$ = this.userSubject.asObservable();

  private getStoredUser(): DiscordUser | null {
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('discord_user');
      if (savedUser) {
        try {
          return JSON.parse(savedUser);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  }

  // Chiamato dopo il login per aggiornare lo stato e salvarlo nel browser
  setLoginData(user: DiscordUser) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('discord_user', JSON.stringify(user));
    }
    this.userSubject.next(user);
  }

  // Chiamato al logout per pulire tutto
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('discord_user');
    }
    this.userSubject.next(null);
  }
}