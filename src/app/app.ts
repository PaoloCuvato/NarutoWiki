import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button'; // Questo è il pezzo mancante!

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('naruto-wiki');
}
