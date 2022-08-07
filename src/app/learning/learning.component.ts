import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
    <button (click)="this.e.emit('sending')">send</button>
  `,
  styles: [``]
  })
export class LearningComponent implements OnInit {
  @Output() public e = new EventEmitter()
  constructor() {}
  ngOnInit(): void {}
}
