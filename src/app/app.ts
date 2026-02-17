import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { Navbar } from "./components/navbar/navbar"; // Questo è il pezzo mancante!
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Button, Navbar, TieredMenuModule, ButtonModule, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('naruto-wiki');
}
