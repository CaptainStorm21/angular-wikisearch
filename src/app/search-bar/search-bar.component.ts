import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    //event.preventDefault () stops the function 
    //and does not refresh automatically
    event.preventDefault();
    console.log(this.term);
    //takes the stored property entrance and sends it backt to the app component
  }
  // onInput(value: string) {
  //   this.term = value;
  // }
  // html (input)="onInput($event.target.value)"

}
