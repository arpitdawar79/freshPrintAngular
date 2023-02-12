import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserSearchResult(searchTerm: string): Observable<any> {
    if (searchTerm) {
      return this.http.get(`${environment.apiUrl}/search/users`, { params: { q: searchTerm } });
    }
    return EMPTY;
  }
}
