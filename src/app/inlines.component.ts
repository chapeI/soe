import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlines',
  template: `
    <div>inlines works</div>
  `,
  styles: [`
    div {
      color: red;
    }
    `
  ]
})
export class InlinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
