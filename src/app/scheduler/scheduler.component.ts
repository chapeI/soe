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
    {'name': 'term 1', 'list': ['op']},
    {'name': 'term 2', 'list': ['data structures']},
  ]

  t1: string[] = []
  t2: string[] = []

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setupCalendarAndRequirements() }

  addTerm() {
    this.terms.push(
      {'name': 'term 3', 'list': ['systems']},
    )
  }

  setupCalendarAndRequirements() {
    if(this.nullCalendar()) {
      this.setDefaults()
    } else {
      this.loadSavedData()
    }
  }

  nullCalendar(): boolean {
    return (this.localService.get('t1') == null && this.localService.get('t2') == null)
  }

  // SAVED DATA

  loadSavedData() {
    this.loadT1()
    this.loadT2()
    this.loadCores()
    this.loadElectives()
    this.loadMaths()
  }

  loadT1(){
    let parsed = JSON.parse(this.localService.get('t1'))
    this.t1 = parsed
  }

  loadT2(){
    let parsed = JSON.parse(this.localService.get('t2'))
    this.t2 = parsed
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

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.persistLists()
  }

  persistLists() {
    this.localSave('t1', this.t1)
    this.localSave('t2', this.t2)
    this.localSave('core', this.core)
    this.localSave('electives', this.electives)
    this.localSave('maths', this.maths)
  }

  localSave(name: string, list: string[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }

  setDefaults() {
    this.t1 = [];

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
}
