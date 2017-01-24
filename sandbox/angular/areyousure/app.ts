import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h4>Enter your name</h4>
    <input [(ngModel)]="field">
    <confirm [disabled]="!field" (confirm)="submitName()"></confirm>
    <hr/>
    Submitted name: {{name}}
  `
})
export class AppComponent {
  field = ''
  name = ''
  submitName(){
    this.name = this.field;
    this.field = '';
  }
}
