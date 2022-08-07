import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  <input [id]="test" value="anoop">
  <div [class]="x">italisized</div>
  `,
  styles: [`
    div {
      color: red;
    }
    .make-text-italized {
      font-style: italic;
    }
  `]
})
export class LearningComponent implements OnInit {

  public x = "make-text-italized"
  public test = "works"
  constructor() { }

  ngOnInit(): void {
  }

}
