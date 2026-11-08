import { Component, EventEmitter, Output, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  showBanner: boolean = false;

  @Output() openCookieBanner = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Esegue il controllo di localStorage SOLO quando siamo nel browser (evita l'errore SSR)
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        this.showBanner = true;
      }
    }
  }

  acceptAll() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie_consent', 'accepted');
    }
    this.showBanner = false;
  }

  rejectAll() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie_consent', 'rejected');
    }
    this.showBanner = false;
  }

  closeBanner() {
    this.showBanner = false;
  }

  openBanner() {
    this.showBanner = true;
  }

  openCookieSettings() {
    this.openBanner();
    this.openCookieBanner.emit();
  }
}