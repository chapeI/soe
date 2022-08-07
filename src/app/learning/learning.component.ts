import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  <input [id]="test" value="anoop">
  <div [class.text-danger]="x">italisized</div>
  `,
  styles: [`
    .make-text-italized {
      font-style: italic;
    }
    .text-danger {
      color: red
    }
  `]
})
export class LearningComponent implements OnInit {

  public x = true
  public test = "works"
  constructor() { }

  ngOnInit(): void {
  }

}
