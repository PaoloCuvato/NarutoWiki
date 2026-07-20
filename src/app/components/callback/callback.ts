import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.html',
  styleUrl: './callback.scss',
})
export class Callback implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);

  private hasRequested = false; // <-- Flag per evitare chiamate duplicate

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParams.subscribe(params => {
        const code = params['code'];
        
        if (code && !this.hasRequested) {
          this.hasRequested = true; // Blocca subito ulteriori esecuzioni

          this.http.post<any>('http://localhost:8080/api/auth/discord', { code: code })
            .subscribe({
              next: (userSavedInMongo) => {
                localStorage.setItem('discord_user', JSON.stringify(userSavedInMongo));

                this.router.navigate(['/home']).then(() => {
                  window.location.reload();
                });
              },
              error: (err) => {
                console.error('Errore durante l\'autenticazione Discord:', err);
                this.router.navigate(['/home']);
              }
            });
        } else if (!code && !this.hasRequested) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}