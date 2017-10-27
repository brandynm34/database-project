import { Component, OnInit } from '@angular/core';
import { show } from '../models/show';
import { shows } from '../models/shows';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public query: string;
  public queryString: string;
  //public tvShows = tvShows;
  public showList;


  ngOnInit() {
  }

  searchShows() {
    // whats in the search bar
    console.log('bound!', this.query)
    this.getShows();
  }
  getShows(): void {
    // for (let i in tvShows){
    //   if(tvShows[i].title == this.query ){
    //     console.log('this', tvShows[i])
    //     this.showsList = tvShows[i]
    //   }
    // }
    this.showList = shows
    console.log('this.showsList', this.showList);

  }

}
