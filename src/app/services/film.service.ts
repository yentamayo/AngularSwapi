import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IFilmResponse } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  BASE_URL: string = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilmResponse> {
    return this.http.get<IFilmResponse>(`${this.BASE_URL}/films`);
  }

}
