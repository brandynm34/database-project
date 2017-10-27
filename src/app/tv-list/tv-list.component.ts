import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';

@Component({
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {
  public shows;

  constructor( private showService: ShowService) { }

  ngOnInit() {
    this.shows = this.showService.getShows();
  }

}
