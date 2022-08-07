import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-learning [parentData]="x"></app-learning>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'soe';
  public x = 'parent component sending message successfully'
}
