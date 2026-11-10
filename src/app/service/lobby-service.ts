import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  private apiUrl= "/api/lobbies/all";

constructor(private http: HttpClient) {}

getLobbies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
