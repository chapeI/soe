import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  <div [class.text-danger]="error">italisized</div>
  <div [ngClass]="x">test</div>
  <div [style.color]="'orange'">orangeme</div>
  `,
  styles: [`
    .make-text-italized {
      font-style: italic;
    }
    .text-success {
      color: green
    }
    .text-danger {
      color: red
    }
  `]
})
export class LearningComponent implements OnInit {

  public error = false
  public emphasize = true
  public okay = true;
  public x = {
    "text-success": this.okay,
    "text-error": this.error,
    "make-text-italized": this.emphasize,
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
