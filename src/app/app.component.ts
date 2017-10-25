import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
// localhost:4200/
//will always have, make sure html and css link match the file names
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//classes need constructor

export class AppComponent implements OnInit {
  public query: string;
  public queryString: string;
  public showsList;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
  }
}
