import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ x }}
    <app-learning (e)="x=$event"></app-learning>
  `,
  styles: ['']
})
export class AppComponent {
  public x:string =""
}
