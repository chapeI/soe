import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    <h2 *ngFor="let c of colors">{{ c }}</h2>
  `,
  styles: [`
    .text-success {
      color: green
    }
  `]
})
export class LearningComponent implements OnInit {

  public colors = ['red', 'blue', 'green']
  constructor() { }
  ngOnInit(): void {
  }
}
