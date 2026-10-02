import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CommunityHighlights } from '../modals/community-highlights';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private http = inject(HttpClient);
  
  // L'URL di base del tuo backend Spring Boot (regolalo in base al tuo environment)
  private apiUrl = `${(environment as typeof environment & { apiUrl?: string }).apiUrl || 'http://localhost:8080'}/api/community`;

  private decodeHtmlEntities(text: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.documentElement.textContent || text;
  }

  /**
   * Chiama direttamente il backend Spring Boot che legge da MongoDB,
   * restituendo in un sol colpo i 4 creator casuali coi loro video, 
   * i video recenti e le playlist guidate.
   */
  getHighlightsData(): Observable<CommunityHighlights> {
    return this.http.get<CommunityHighlights>(`${this.apiUrl}/highlights`).pipe(
      catchError(err => {
        console.error('Errore durante il recupero degli highlights della community dal DB:', err);
        // Ritorna una struttura vuota di sicurezza in caso di errore di connessione col backend
        return of({
          featuredCreators: [],
          recentHighlights: [],
          guidesAndPlaylists: []
        } as unknown as CommunityHighlights);
      })
    );
  }
}