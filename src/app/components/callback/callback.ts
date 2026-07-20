import { Component } from '@angular/core';
import { OnInit, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-callback',
  imports: [],
  templateUrl: './callback.html',
  styleUrl: './callback.scss',
})
export class Callback implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Intercept the code returned by Discord in the URL (?code=...)
      this.route.queryParams.subscribe(params => {
        const code = params['code'];
        
        if (code) {
          // Mock logged-in user (will be exchanged via backend Spring Boot later)
          const mockUser = {
            username: 'ade2995',
            avatarUrl: 'https://cdn.discordapp.com/embed/avatars/0.png'
          };

          // Save user session in localStorage
          localStorage.setItem('discord_user', JSON.stringify(mockUser));

          // Redirect to HomePage and reload to update Navbar state
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        } else {
          // If code is missing or user canceled, navigate back to home
          this.router.navigate(['/home']);
        }
      });
    }
  }

}
