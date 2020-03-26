import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../services/people.service';
import { IPeopleResponse } from '../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleResponse: IPeopleResponse;
  constructor(private peopleService: PeopleService) { }
 
  ngOnInit() {

    this.peopleService.getPeople().subscribe(data => {
      this.peopleResponse = data;
    });
  }

  getNextPeople(event, urlNext) {
    this.peopleService.getPeopleByPage(urlNext).subscribe(data => {
      this.peopleResponse = data;
    });
  }

  getPreviousPeople(event, urlPrevious) {
    this.peopleService.getPeopleByPage(urlPrevious).subscribe(data => {
      this.peopleResponse = data;
    });
  }

}
