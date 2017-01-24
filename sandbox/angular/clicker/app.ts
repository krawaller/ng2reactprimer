import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    We have {{beer}} bottles of beer
    <button (click)="getMoreBeer()">Get more beer</button>
  `
})
export class AppComponent {
  beer = 3
  getMoreBeer(){
    this.beer++;
  }
}
