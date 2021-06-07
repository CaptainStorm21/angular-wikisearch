// import { Component, Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { WikipediaService } from './service/wikipedia.service';

// @Injectable({ providedIn: 'root'})
// export class Car {
//   color = 'red';
// }
// new Car().color = 'purple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    // private car: Car,
    private wikipedia: WikipediaService,
 ) { }

  // tslint:disable-next-line: typedef
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response) => {
      console.log(response);
    });
    // console.log('i am the app');
    // this tells us that we communicated from child to parent
    // const results = this.wikipedia.search(term);
    // console.log(results);
    // console.log('My car has a color of ', this.car.color);
  }
}

/*
we are getting
  search() method reaching out to WikipediaService to Wikipedia API
  and gets some data

  1. app.modue.ts
     import HttpClientModule and added to import:[]
  2. go to wikipedia.service.ts


*/
