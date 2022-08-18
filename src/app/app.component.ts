import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span routerLink="">scheduler</span>
      <span class="fill-remaining-space"></span>
      <mat-slide-toggle style="margin-right: 1em;"></mat-slide-toggle>
      <span routerLink="/dev" routerLinkActive="active">dev</span>
    </mat-toolbar>
    <div style="padding: 30px;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {}
