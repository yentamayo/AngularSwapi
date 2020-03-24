import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

import { Film, IFilmResponse } from '../models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  filmResponse: IFilmResponse;

  constructor(private filmService: FilmService) { }

  ngOnInit() {

    // this.data.getFilms().subscribe(data => {
    //   this.films = data;
    //   console.log(this.films);
    // });

    // this.filmService.getFilms().subscribe(films => {
    //   this.films = this.films;
    //   console.log(this.films);
    // } );

    this.filmService.getFilms().subscribe(data => {
       this.filmResponse = data;
    });
  }

}
