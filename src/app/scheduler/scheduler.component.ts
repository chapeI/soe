import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, Observable } from 'rxjs';
import { FirebaseyService } from '../firebasey.service';
import { LocalService } from '../local.service';

export interface Course {
  name: string
  color: string
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  core: Course[] = []
  cs: Course[] = []

  terms = [
    {'courses': [{'name': 'add terms, drag courses into terms', 'color': 'grey'}]},
  ]

  constructor(private localService: LocalService, public dialog: MatDialog, private firebaseService: FirebaseyService) { }

  ngOnInit() {
    this.setup()
  }

  addTerm() {
    this.terms.push(
      {'courses': []},
    )
    this.saveState()
   }

  removeTerm() {
    this.terms.pop()
    this.persistUsersTerms()
  }

  persistUsersTerms() {
    let stringed = JSON.stringify(this.terms)
    this.localService.save('terms', stringed)
  }

  setup() {
    if(this.noLocallySavedData()) {
      this.setDefaults()
    } else {
      this.loadLocallySavedData()
    }
  }

  loadLocallySavedData() {
    this.loadTermsAddedByUser()
    this.loadLocalRequirements()
  }

  loadTermsAddedByUser(){
    let parsed = JSON.parse(this.localService.get('terms'))
    this.terms = parsed
  }

  noLocallySavedData(): boolean {
    return (this.localService.get('terms') == null)
  }

  drop(event: CdkDragDrop<Course[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.saveState()
  }

  saveState() {
    this.persistUsersTerms()
    this.persistRequirements()
  }

  persistRequirements() {
    this.locallySave('core', this.core)
    this.locallySave('cs', this.cs)
  }

  locallySave(name: string, list: Course[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }

  setDefaults() {
    this.setASingleTerm()
    this.setRequirements()
  }

  setASingleTerm() {
    // variable definition does this by default
  }

  setRequirements() {
    console.log('entered defaults');
    // loadFromDatabase()

    this.core = [
      {'name': 'data structures and algorithms', 'color': 'red'},
      {'name': 'system hardware',                'color': 'red'},
    ];

    this.cs = [
      {'name': 'web development',  'color': 'blue'},
      {'name': 'information security',  'color': 'blue'},
    ]

  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
  }

  loadLocalRequirements() {
    this.loadCores()
    this.loadElectives()
  }

  loadCores(){
    let parsed = JSON.parse(this.localService.get('core'))
    this.core = parsed
  }

  loadElectives(){
    let parsed = JSON.parse(this.localService.get('cs'))
    this.cs = parsed
  }

}
