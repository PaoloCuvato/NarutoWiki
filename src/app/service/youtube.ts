
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CommunityHighlights } from '../modals/community-highlights';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private http = inject(HttpClient);

  private apiUrl = '/api/community';

  private decodeHtmlEntities(text: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.documentElement.textContent || text;
  }

  getHighlightsData(): Observable<CommunityHighlights> {
    return this.http.get<CommunityHighlights>(`${this.apiUrl}/highlights`).pipe(
      catchError(err => {
        console.error(
          'Errore durante il recupero degli highlights della community dal DB:',
          err
        );

        return of({
          featuredCreators: [],
          recentHighlights: [],
          guidesAndPlaylists: []
        } as unknown as CommunityHighlights);
      })
    );
  }
}
