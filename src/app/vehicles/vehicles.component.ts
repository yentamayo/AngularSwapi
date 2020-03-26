import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

import { IVehiclesResponse } from '../models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  
  vehiclesResponse : IVehiclesResponse;
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {

    this.vehicleService.getVehicles().subscribe(data =>{
      this.vehiclesResponse = data;
      console.log(data);
    });
  }

}
