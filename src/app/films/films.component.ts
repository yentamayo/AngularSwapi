import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

import { Film, IFilmsResponse } from '../models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmResponse: IFilmsResponse;

  constructor(private filmService: FilmService) { }

  ngOnInit() {

    this.filmService.getFilms().subscribe(data => {
       this.filmResponse = data;
      //  console.log(data)
    });
  }

}
