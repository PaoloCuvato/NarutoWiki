import { Component, OnInit } from '@angular/core'; // OnInit va importato così
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Homepage } from '../homepage/homepage';
import { Games } from '../games/games';
import { Faq } from '../faq/faq';
import { About } from '../about/about';
import { Community } from '../community/community';
import { Resources } from '../resources/resources';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Aggiunto standalone se non usi i moduli
  imports: [
    TieredMenuModule, 
    ButtonModule,
    RouterLink, 
    RouterLinkActive,
    
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit { // Tutto deve stare dentro queste graffe

  items: MenuItem[] | undefined;

  ngOnInit() {
    // Ora siamo dentro la classe, quindi 'this.items' funzionerà
    this.items = [
      {
        label: 'Profilo Ninja',
        icon: 'pi pi-user',
        command: () => { console.log('Profilo cliccato'); }
      },
      {
        label: 'Impostazioni',
        icon: 'pi pi-cog',
        routerLink: '/settings'
      },
      {
        separator: true
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off'
      }
    ];
  }

} // Fine della classe