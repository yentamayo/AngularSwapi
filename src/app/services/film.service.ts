import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IFilmsResponse } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  BASE_URL: string = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilmsResponse> {
    return this.http.get<IFilmsResponse>(`${this.BASE_URL}/films`);
  }

}
