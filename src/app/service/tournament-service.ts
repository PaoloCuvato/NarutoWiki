import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TournamentModal } from '../modals/tournament-modal';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  // Aggiunto /connections per puntare all'endpoint corretto del Controller
  private apiUrl = 'http://localhost:8080/api/tournaments/connections'; 

  constructor(private http: HttpClient) {
    console.log('URL CHIAMATO:', this.apiUrl);
  }

  getTopTournaments(): Observable<TournamentModal[]> {
    return this.http.get<TournamentModal[]>(this.apiUrl).pipe(
      // Prende solo i primi 20 elementi della lista
      map(tournaments => tournaments.slice(0, 20))
    );
  }
}