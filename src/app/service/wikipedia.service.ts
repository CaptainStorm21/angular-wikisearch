import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  public search(term: string ) {
    return 'I am wikipedia searhc result '
  }
}


// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

/*
1. used to fetch / store update any kin do fdata 
2. always where are going to put network request
3   data flows from service to component
4   seervices are implmemented as classes
5.  ang will automatically creat a single instance of each service
*/