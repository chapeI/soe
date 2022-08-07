import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    <input [(ngModel)]="x">
    {{ x }}
  `,
  styles: [`
    .text-success {
      color: green
    }
  `]
})
export class LearningComponent implements OnInit {

  public x = " "
  constructor() { }
  ngOnInit(): void {
  }
}
