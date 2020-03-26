import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IVehiclesResponse } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  BASE_URL :string = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<IVehiclesResponse> {
    return this.http.get<IVehiclesResponse>(`${this.BASE_URL}/vehicles`);
  }
}
