import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IStarshipsResponse } from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  BASE_URL :string = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  getStarships(): Observable<IStarshipsResponse> {
    return this.http.get<IStarshipsResponse>(`${this.BASE_URL}/starships`);
  }

}
