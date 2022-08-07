import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class LearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
