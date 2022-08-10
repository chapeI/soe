import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>toolbar</mat-toolbar>
    <button routerLink="/employees">employees</button>
    <button routerLink="/departments">department</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
