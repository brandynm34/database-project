import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { ShowService } from '../services/show.service';
import { show } from '../models/show';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {
  public show: show;

  constructor(private showService: ShowService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(res => {
        this.show = this.showService.getShowById(res.id);
      });

  }

}
