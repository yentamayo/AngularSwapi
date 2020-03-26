import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';

import { IPlanetsResponse } from '../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetsResponse: IPlanetsResponse;
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
  
    this.planetService.getPlanets().subscribe(data => {
      this.planetsResponse = data;
      console.log(data);
    })

  }

}
