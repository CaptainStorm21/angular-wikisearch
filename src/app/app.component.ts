import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onTerm(term: string) {
    console.log('i am the app');
    // this tells us that we communicated from child to parent
  }
}
