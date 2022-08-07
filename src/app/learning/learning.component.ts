import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  <input [id]="test" value="anoop">
  `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class LearningComponent implements OnInit {

  public test = "works"
  constructor() { }

  ngOnInit(): void {
  }

}
