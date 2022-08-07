import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    {{ parentData }}
  `,
  styles: [`
    .text-success {
      color: green
    }
  `]
})
export class LearningComponent implements OnInit {
  
  @Input() public parentData:string = "no parent data yet"

  public colors = ['red', 'blue', 'green']
  constructor() { }
  ngOnInit(): void {
  }
}
