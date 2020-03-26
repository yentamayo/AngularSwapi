import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../services/specie.service';
import { ISpeciesResponse } from '../models/specie';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  speciesResponse :ISpeciesResponse;
  constructor(private specieService: SpecieService) { }

  ngOnInit() {
    this.specieService.getSpecies().subscribe( data => {
      this.speciesResponse = data;
      console.log(data);
    });
  }

}
