import { Component } from '@angular/core';
import { WikipediaService } from './service/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private wikipedia: WikipediaService) {
    
  }


  onTerm(term: string) {
    // console.log('i am the app');
    // this tells us that we communicated from child to parent
    const results = this.wikipedia.search(term);
    console.log(results);
  }
}
