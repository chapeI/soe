import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <span routerLink="">scheduler</span>
      <span class="fill-remaining-space"></span>
      <span routerLink="/dev-info" routerLinkActive="active">dev</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {
}
