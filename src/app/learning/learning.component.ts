import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    <div [class.text-danger]="error">italisized</div>
    <div [ngClass]="y">test</div>
    <div [ngStyle]="x">multiple styles w ngStyle</div>
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

  public x = {
    color: "blue",
    fontStyle: "italic"
  }
  public error = false
  public emphasize = true
  public okay = true;
  public y = {
    "text-success": this.okay,
    "text-error": this.error,
    "make-text-italized": this.emphasize,
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
