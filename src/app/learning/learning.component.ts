import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    <button (click)="hello()">click</button>
    {{greeting}}
    <div [class.text-danger]="error">italisized</div>
    <div [ngClass]="y">test</div>
    <div [ngStyle]="x">multiple styles w ngStyle</div>
    <input #myInput>
    <button (click)="log(myInput)">log</button>
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
  public greeting = ""
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

  hello() {
    this.greeting = "hi's"
  }

  log(x: any) {
    console.log(x.value);
  }
}
