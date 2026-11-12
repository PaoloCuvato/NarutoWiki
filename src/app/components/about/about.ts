import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  openYoutube(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
