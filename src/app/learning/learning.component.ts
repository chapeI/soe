import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `
  learning grounds
  <input [id]="test" value="anoop">
  <div class="make-text-italized">italisized</div>
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

  public test = "works"
  constructor() { }

  ngOnInit(): void {
  }

}
