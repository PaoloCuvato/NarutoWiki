import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TieredMenuModule, 
    ButtonModule,
    RouterLink, 
    RouterLinkActive,
    DialogModule,  
    MessageModule,  
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

  // Iniezione di PLATFORM_ID per gestire l'SSR (Server-Side Rendering)
  private platformId = inject(PLATFORM_ID);

  items: MenuItem[] | undefined;

  // Login state and modal management
  displayModal: boolean = false;
  isLoggedIn: boolean = false;
  username: string = 'Ninja User';
  userAvatar: string = 'https://cdn.discordapp.com/embed/avatars/0.png';

  // Discord OAuth2 Configuration
  private readonly CLIENT_ID = 'YOUR_DISCORD_CLIENT_ID';
  private readonly REDIRECT_URI = encodeURIComponent('http://localhost:4200/callback');

  ngOnInit() {
    // Esegui la lettura da localStorage e il setup solo lato BROWSER
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('discord_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        this.isLoggedIn = true;
        this.username = user.username;
        this.userAvatar = user.avatarUrl;
      }
    }

    // Inizializza il menu a tendina
    this.updateMenu();
  }

  updateMenu() {
    if (this.isLoggedIn) {
      this.items = [
        {
          label: 'Ninja Profile',
          icon: 'pi pi-user',
          command: () => { console.log('Profile clicked'); }
        },
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          routerLink: '/settings'
        },
        {
          separator: true
        },
        {
          label: 'Logout',
          icon: 'pi pi-power-off',
          command: () => { this.logout(); }
        }
      ];
    } else {
      this.items = [
        {
          label: 'Login via Discord',
          icon: 'pi pi-discord',
          command: () => { this.showLoginDialog(); }
        }
      ];
    }
  }

  showLoginDialog() {
    this.displayModal = true;
  }

  redirectToDiscord() {
    if (isPlatformBrowser(this.platformId)) {
      const scope = encodeURIComponent('identify');
      const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=code&scope=${scope}`;
      window.location.href = discordAuthUrl;
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('discord_user');
      this.isLoggedIn = false;
      this.updateMenu();
      window.location.reload();
    }
  }
}