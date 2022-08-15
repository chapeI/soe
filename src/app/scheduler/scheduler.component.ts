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
    {'courses': [{'name': 'courses go here', 'color': 'grey'}]},
  ]

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setup() }

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
    this.loadAdjustedRequirements()
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
    this.locallySave('electives', this.electives)
    this.locallySave('maths', this.maths)
  }

  locallySave(name: string, list: Course[]) {
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
      {'name': 'data structures and algorithms', 'color': 'red'},
      {'name': 'system hardware',                'color': 'red'},
      {'name': 'oop',  'color': 'red'},
      {'name': 'discrete math',  'color': 'red'},
      {'name': 'probability and stats',  'color': 'red'},
      {'name': 'oop II',  'color': 'red'},
      {'name': 'theory of CS',  'color': 'red'},
      {'name': 'operating systems',  'color': 'red'},
      {'name': 'programming languages',  'color': 'red'},
      {'name': 'intro to software engineering',  'color': 'red'},
    ];

    this.electives = [
      {'name': 'web development',  'color': 'blue'},
      {'name': 'information security',  'color': 'blue'},
      {'name': 'architecture',  'color': 'blue'},
      {'name': 'ui design',  'color': 'blue'},
      {'name': 'distributed computing',  'color': 'blue'},
      {'name': 'data analytics',  'color': 'blue'},
      {'name': 'machine learning',  'color': 'blue'},
      {'name': 'pattern recognition',  'color': 'blue'},
    ]

    this.maths = [
      {'name': 'combinatronics',  'color': 'purple'},
      {'name': 'advanced calc',  'color': 'purple'},
      {'name': 'multivariate calc',  'color': 'purple'},
      {'name': 'lin alg',  'color': 'purple'},
      {'name': 'differentials',  'color': 'purple'},
      {'name': 'numerical analysis',  'color': 'purple'},
    ]
  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
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
    this.electives = parsed
  }

  loadMaths() {
    let parsed = JSON.parse(this.localService.get('maths'))
    this.maths = parsed
  }

  // SAVED DATA
}
