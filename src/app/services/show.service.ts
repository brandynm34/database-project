import { Injectable } from '@angular/core';
import { show } from '../models/show';
import { shows } from '../models/shows';

@Injectable()
export class ShowService {
  public showList: Array<show>;
  public show: show;


  constructor() {
    this.showList = shows;
  }
  public getShows(): Array<show>{
    console.log('my movie list', this.showList)
    return this.showList;
  }
  public getShowById(id: Number): show {
    this.showList.forEach(show => {
      if (show.id == id){
        this.show = show;}
    })
    return this.show;
  }
}
