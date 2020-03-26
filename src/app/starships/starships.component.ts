import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../services/starship.service';

import { IStarshipsResponse } from '../models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipsResponse: IStarshipsResponse;
  constructor(private starshipService: StarshipService) { }

  ngOnInit() {

    this.starshipService.getStarships().subscribe(data => {
      this.starshipsResponse = data;
    });
  }

}
