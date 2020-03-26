import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IPlanetsResponse } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  BASE_URL :string = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  getPlanets() :Observable<IPlanetsResponse> {
    return this.http.get<IPlanetsResponse>(`${this.BASE_URL}/planets`);
  }
}
