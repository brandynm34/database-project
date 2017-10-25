import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public query: string;
  public queryString: string;
  public tvShows = tvShows;
  public showsList;


  ngOnInit() {
  }

  searchShows() {
    // whats in the search bar
    console.log('bound!', this.query)
    this.getShows();
  }
  getShows(): void {
    for (let i in tvShows){
      if(tvShows[i].title == this.query ){
        console.log('this', tvShows[i])
        this.showsList = tvShows[i]
      }
    }
    console.log('this.showsList', this.showsList);

  }

  }

let tvShows: Array<show> = [
  {
    title: "The Office",
    released_on: "March 45, 2005",
    genre: "Comedy",
    Network: "NBC",
    description: "A documentry style show based on the paper comapany, Dunder-Miffin, and their staff. The show revolves around a work day at Dunder-Miffin where the staff engages in inapprpriate behavior, office romance, and rivalries "
  },
  {
    title: "Parks and Recreation",
    released_on: "April 9, 2009",
    genre: "Comedy",
    Network: "NBC",
    description: "A documentry style show based on the Indiana Parks and Recreation Department and their staff. The show revolves around the staff public officails trying to pursue projects to make the town of Pawnee."
  },
  {
    title: "Master of None",
    released_on: "November 6, 2015",
    genre: "Comedy",
    Network: "Netflix",
    description: "A Netflix orginal, bases loosely on the life of Aziz Ansari. The shpw follows Dev a thrity year old actor who tries to find love and work in New York City."
  },
  {
    title: "VEEP",
    released_on: "April 22, 2012",
    genre: "Political satire",
    Network: "HBO",
    description: "A political satire that revolves around newly appointed Vice President Selina Meyer where she finds that the job is not as easy as it seems."
  },
  {
    title: "House of Cards",
    released_on: "February 1, 2013",
    genre: "Political drama",
    Network: "Netflix",
    description: "A Netfilx orginal that follows Congressman Fancis Underwood as he seeks revenge on any politician to undergoes him, while also trying to move himself higher in the ranks"
  },
  {
    title: "American Horror Stories",
    released_on: "October 5, 2011",
    genre: "Horror",
    Network: "FXX",
    description: "A series that centers on different characters, locations, and plots every season. Each season has its own horror plot to it."
  },
  {
    title: "Bob's Burgers",
    released_on: "January 9, 2011",
    genre: "Comedy",
    Network: "Fox",
    description: "An animated show that follows Bob Belcher, a buger resturant owner, and his family as they do anything to keep their resturant alive. "
  },
  {
    title: "Bones",
    released_on: " September 13, 2005",
    genre: "Crime film",
    Network: "Fox",
    description: "Forensic Anthropologist, Dr. Temperance Brennan aka Bones, and FBI Specisl Agent, Seeley Booth, join forces to investigate and solve murders in Washinton DC."
  }
]

export class show {
  title: String;
  released_on: String;
  genre: String;
  Network: String;
  description: String;

}
