import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar'; 
import { Auth } from '../../service/auth';
import { Subscription, filter } from 'rxjs';

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
  private router = inject(Router);

  private userSub!: Subscription;
  private routerSub!: Subscription;

  items: MenuItem[] | undefined;
  
  gamesItems: MenuItem[] | undefined;
  matchmakingItems: MenuItem[] | undefined;
  communityItems: MenuItem[] | undefined;

  displayModal: boolean = false;
  isLoggedIn: boolean = false;
  username: string = 'Ninja User';
  userAvatar: string = ''; 

  private readonly CLIENT_ID = '1310173685268746262';
  private readonly REDIRECT_URI = encodeURIComponent('http://localhost:4200/callback');

  // Gestione hover e menu attivi per evitare sovrapposizioni
  private hideTimeout: any = null;
  private activeMenu: any = null;

  ngOnInit() {
    this.gamesItems = [
      {
        label: 'Storm Series',
        icon: 'pi pi-bolt',
        routerLink: ['/games/storm-series']
      },
      {
        label: 'Legacy Series',
        icon: 'pi pi-history',
        routerLink: ['/games/legacy-series']
      }
    ];

    this.matchmakingItems = [
      {
        label: 'Lobbies',
        icon: 'pi pi-sitemap',
        routerLink: '/matchmaking/lobbies'
      },
      {
        label: 'Leaderboard',
        icon: 'pi pi-chart-bar',
        routerLink: '/matchmaking/leaderboard'
      }
    ];

    this.communityItems = [
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: ['/community/projects'] // <-- Modificato da '/projects' a '/community/projects'
      },
      {
        label: 'Tournaments',
        icon: 'pi pi-trophy',
        routerLink: ['/community/tournaments']
      },
      {
        label: 'Events',
        icon: 'pi pi-calendar',
        routerLink: ['/community/events'] // <-- Modificato da '/events' a '/community/events'
      },
      {
        separator: true
      },
      {
        label: 'Community Highlights',
        icon: 'pi pi-star',
        routerLink: ['/community/highlights'] // <-- Modificato da '/community-highlights' a '/community/highlights'
      }
    ];

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

    if (isPlatformBrowser(this.platformId)) {
      this.routerSub = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {});
    }
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  // --- GESTIONE HOVER FLUIDA E CHIUSURA IMMEDIATA DEI MENU INCROCIATI ---
  showDropdown(event: MouseEvent, menu: any) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    // Se c'è già un menu aperto ed è diverso da questo, chiudilo subito!
    if (this.activeMenu && this.activeMenu !== menu) {
      if (typeof this.activeMenu.hide === 'function') {
        this.activeMenu.hide();
      }
    }

    if (menu && typeof menu.show === 'function') {
      this.activeMenu = menu;
      menu.show(event);
    }
  }

  hideDropdown(menu: any) {
    this.hideTimeout = setTimeout(() => {
      if (menu && typeof menu.hide === 'function') {
        menu.hide();
        if (this.activeMenu === menu) {
          this.activeMenu = null;
        }
      }
    }, 150);
  }

  getActiveTheme(): string {
    const url = this.router.url;
    if (url.includes('/games')) return 'theme-games';
    if (url.includes('/matchmaking')) return 'theme-matchmaking';
    if (url.includes('/community') || url.includes('/projects') || url.includes('/tournaments') || url.includes('/events') || url.includes('/community-highlights')) return 'theme-community';
    if (url.includes('/resources')) return 'theme-resources';
    if (url.includes('/faq')) return 'theme-faq';
    if (url.includes('/about')) return 'theme-about';
    return 'theme-homepage';
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