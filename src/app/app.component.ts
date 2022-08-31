import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DevComponent } from './dev/dev.component';
import { LocalService } from './local.service';
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span routerLink="/">scheduler</span>

      <button color="" style="margin-left: 10px" mat-stroked-button [matMenuTriggerFor]="school">
        Concordia Computer Science
      </button>

      <mat-menu #school="matMenu">
        <button mat-menu-item [matMenuTriggerFor]="concordia">Concordia</button>
        <button mat-menu-item [matMenuTriggerFor]="mcGill">McGill</button>
        <button mat-menu-item [matMenuTriggerFor]="waterloo">Waterloo</button>
      </mat-menu>

      <mat-menu #concordia="matMenu">
        <button mat-menu-item disabled>Software Engineering</button>
        <button mat-menu-item>Computer Science</button>
      </mat-menu>

      <mat-menu #mcGill="matMenu">
        <button mat-menu-item disabled>Software Engineering</button>
        <button mat-menu-item disabled>Applied Math</button>
        <button mat-menu-item disabled>Computer Science</button>
      </mat-menu>

      <mat-menu #waterloo="matMenu">
        <button mat-menu-item disabled>Software Engineering</button>
        <button mat-menu-item disabled>Computer Science</button>
      </mat-menu>

      <button
      color="accent"
      style="margin-left: 10px"
      [matMenuTriggerFor]="schedule"
      mat-mini-fab>
        <mat-icon>
          hardware
        </mat-icon>
      </button>

      <mat-menu #schedule="matMenu">
        <button disabled="true" mat-menu-item>Build Recommended Schedule</button>
        <button disabled="true" mat-menu-item>Build Fall Start</button>
      </mat-menu>

      <span class="fill-remaining-space"></span>

      <span (click)="openAbout()">about</span>

      <mat-slide-toggle style="margin-left: 1em;"
      [(ngModel)]="checked"
      (change)="changed($event)">
        <mat-icon>
          {{ mode }}
        </mat-icon>
      </mat-slide-toggle>
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

  constructor(private localService: LocalService, public dialog: MatDialog) { }

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

  openAbout() {
    this.dialog.open(DevComponent)
  }

}
