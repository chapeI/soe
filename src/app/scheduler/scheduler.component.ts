import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  core: string[] = []
  electives: string[] = []
  maths: string[] = []

  terms = [
    {'courses': ['drag courses into term']},
  ]

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setup() }

  addTerm() {
    this.terms.push(
      {'courses': ['']},
    )
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

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.persist()
  }

  persist() {
    this.saveUsersTerms()
    this.save('core', this.core)
    this.save('electives', this.electives)
    this.save('maths', this.maths)
  }

  save(name: string, list: string[]) {
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
      'Hardware',
      'OOP I',
      'OOP II',
      'Theory of CS',
      'Operating Systems',
      'Programming Languages',
      'Data Structures and Algorithms',
      'Intro to Software Engineering',
      'Probability and Statistics',
      'Discrete Math',
    ];

    this.electives = [
      'Web Programming',
      'Information Systems Security',
      'Formal Methods for Software Engineering',
      'Software Processes and Practices',
      'Software Architecture and Design',
    ]

    this.maths = [
      'Numerical Methods',
      'Differentials'
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
    this.electives = parsed
  }

  loadMaths() {
    let parsed = JSON.parse(this.localService.get('maths'))
    this.maths = parsed
  }

  // SAVED DATA
}
