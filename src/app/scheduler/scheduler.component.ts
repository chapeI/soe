import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';


export interface Course {
  name: string
  color: string
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  core: Course[] = []
  electives: Course[] = []
  maths: Course[] = []

  terms = [
    {'courses': [{'name': 'add courses here', 'color': 'grey'}]},
  ]

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setup() }

  addTerm() {
    this.terms.push(
      {'courses': []},
    )
    this.saveUsersTerms()
   }

  removeTerm() {
    this.terms.pop()
    this.saveUsersTerms()

  }

  saveUsersTerms() {
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
    this.loadUserDefinedTerms()
    this.loadAdjustedRequirements()
  }

  loadUserDefinedTerms(){
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
    this.persist()
  }

  persist() {
    this.saveUsersTerms()
    this.save('core', this.core)
    // this.save('electives', this.electives)
    // this.save('maths', this.maths)
  }

  save(name: string, list: Course[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }

  setDefaults() {
    this.setTerm1()
    this.setDefaultRequirements()
  }

  setTerm1() {
    // variable definition does this by default
  }

  setDefaultRequirements() {
    this.core = [
      {'name': 'data structures',  'color': 'red'},
      {'name': 'oop',  'color': 'red'}
    ];

    this.electives = [
      {'name': 'web programming',  'color': 'blue'},
      {'name': 'information security',  'color': 'blue'},
      {'name': 'architecture',  'color': 'blue'},
    ]

    this.maths = [
      {'name': 'probability',  'color': 'purple'},
      {'name': 'discrete math',  'color': 'purple'},
    ]
  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
  }

  addSemester() {

  }

  // SAVED DATA

  loadAdjustedRequirements() {
    this.loadCores()
    this.loadElectives()
    this.loadMaths()
  }

  loadCores(){
    let parsed = JSON.parse(this.localService.get('core'))
    this.core = parsed
  }

  loadElectives(){
    let parsed = JSON.parse(this.localService.get('electives'))
    // this.electives = parsed
  }

  loadMaths() {
    let parsed = JSON.parse(this.localService.get('maths'))
    // this.maths = parsed
  }

  // SAVED DATA
}
