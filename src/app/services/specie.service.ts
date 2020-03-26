import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ISpeciesResponse } from '../models/specie'; 

@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  BASE_URL :string = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  getSpecies(): Observable<ISpeciesResponse>{
    return this.http.get<ISpeciesResponse>(`${this.BASE_URL}/species`);
  }
}
