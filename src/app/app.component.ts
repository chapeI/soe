import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalService } from './local.service';
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span routerLink="">scheduler</span>
      <span class="fill-remaining-space"></span>
      <mat-slide-toggle style="margin-right: 1em;"
      [(ngModel)]="checked"
      (change)="changed($event)">
        <mat-icon>
          {{ mode }}
        </mat-icon>
      </mat-slide-toggle>
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
export class AppComponent implements OnInit {

  constructor(private localService: LocalService) { }
  ngOnInit() {
    this.getMode()
    if(this.mode == 'nightlight_round') {
      this.checked = true;
      this.toggleDark()
    }
  }

  toggleDark() {
    document.body.classList.toggle('darkMode');
  }

  mode = 'light_mode';
  checked = false;

  changed(event: MatSlideToggleChange) {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode' ;
    this.toggleDark()
    this.save();
  }

  save() {
    this.localService.save('mode', this.mode);
  }

  getMode() {
    let localData = this.localService.get('mode')
    if(localData == null) {
      this.mode = 'light_mode'
    }
    else {
      this.mode = localData
    }
  }
}
