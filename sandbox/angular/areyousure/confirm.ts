import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'confirm',
  template: `
    <span *ngIf="confirming">
      <button (click)="nope()">Cancel</button>
      <button (click)="launch()">Confirm</button>
    </span>
    <button *ngIf="!confirming" (click)="maybe()" [disabled]="lockButton">Submit</button>
  `
})
export class Confirm {
  confirming = false;
  lockButton = false;
  @Output() confirm = new EventEmitter<void>();
  @Input() set disabled(bool: boolean){
    if (bool){
      this.confirming = false;
    }
    this.lockButton = bool;
  }
  maybe() {
    this.confirming = true;
  }
  nope() {
    this.confirming = false;
  }
  launch() {
    this.confirm.emit();
    this.confirming = false;
  }
}
