import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar'; 
import { Auth } from '../../service/auth';
import { Subscription } from 'rxjs';

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
    ToastModule,
    AvatarModule      
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  providers: [MessageService]
})
export class Navbar implements OnInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);
  private messageService = inject(MessageService);
  private authService = inject(Auth);

  private userSub!: Subscription;

  items: MenuItem[] | undefined;
  matchmakingItems: MenuItem[] | undefined;

  // Login state and modal management
  displayModal: boolean = false;
  isLoggedIn: boolean = false;
  username: string = 'Ninja User';
  userAvatar: string = ''; 

  // Discord OAuth2 Configuration
  private readonly CLIENT_ID = '1310173685268746262';
  private readonly REDIRECT_URI = encodeURIComponent('http://localhost:4200/callback');

  ngOnInit() {
    // Configurazione del sottomenu a tendina Matchmaking
    this.matchmakingItems = [
      {
        label: 'Lobbies',
        icon: 'pi pi-sitemap',
        routerLink: '/matchmaking/lobbies'
      },
      {
        label: 'Leaderboard',
        icon: 'pi pi-chart-bar',
        routerLink: 'matchmaking/leaderboard'
      }
    ];

    // Sottoscrizione reattiva al service Auth per catturare il login in tempo reale
    this.userSub = this.authService.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.username = user.username;
        this.userAvatar = user.avatarUrl;
      } else {
        this.isLoggedIn = false;
        this.username = 'Ninja User';
        this.userAvatar = '';
      }
      this.updateMenu();
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
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
          command: () => { this.openLoginModal(); }
        }
      ];
    }
  }

  openLoginModal() {
    this.displayModal = true;
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

  triggerSuccessfulLogin(username: string, avatarUrl: string) {
    this.authService.setLoginData({ username, avatarUrl });

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully logged in via Discord',
      life: 4000
    });
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.logout();
      
      this.messageService.add({
        severity: 'info',
        summary: 'Logged Out',
        detail: 'You have been logged out successfully',
        life: 3000
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
}