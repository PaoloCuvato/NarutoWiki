import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner {
showBanner: boolean = false;

  ngOnInit() {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      this.showBanner = true;
    }
  }

  acceptAll() {
    localStorage.setItem('cookie_consent', 'accepted');
    this.showBanner = false;
  }

  rejectAll() {
    localStorage.setItem('cookie_consent', 'rejected');
    this.showBanner = false;
  }

  closeBannerOnClick() {
    this.showBanner = false;
  }

  public openBanner() {
    this.showBanner = true;
  }
}
