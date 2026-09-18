import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, Button, TieredMenuModule, ButtonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  // Stato iniziale dell'audio (true perché i browser bloccano l'autoplay con audio attivo)
  isMuted: boolean = true;

  // Funzione per attivare o disattivare l'audio al click dell'utente
  toggleAudio(videoElement: HTMLVideoElement) {
    this.isMuted = !this.isMuted;
    videoElement.muted = this.isMuted;
  }
}