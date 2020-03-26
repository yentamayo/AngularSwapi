import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IPeopleResponse } from '../models/people';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
    BASE_URL: string = 'https://swapi.co/api';
    constructor(private http: HttpClient) { }

    getPeople(): Observable<IPeopleResponse> {
      return this.http.get<IPeopleResponse>(`${this.BASE_URL}/people`);
    }

    getPeopleByPage(url): Observable<IPeopleResponse>{
      return this.http.get<IPeopleResponse>(url);
    }
}
