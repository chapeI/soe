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
  calendar: string[] = []
  s2: string[] = []

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setCalendarAndRequirements() }

  setCalendarAndRequirements() {
    if(this.nullCalendar()) {
      this.setDefaults()
    } else {
      this.loadLocal()
    }
  }

  nullCalendar(): boolean {
    return (this.localService.get('calendar') == null)
  }

  loadLocal() {
    this.loadLocalCalendar()
    this.loadLocalCores()
    this.loadLocalElectives()
  }

  loadLocalCalendar(){
    let parsed = JSON.parse(this.localService.get('calendar'))
    this.calendar = parsed
  }

  loadLocalCores(){
    let parsed = JSON.parse(this.localService.get('core'))
    this.core = parsed
  }

  loadLocalElectives(){
    let parsed = JSON.parse(this.localService.get('electives'))
    this.electives = parsed
  }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.persistLists()
  }

  persistLists() {
    this.localSave('calendar', this.calendar)
    this.localSave('core', this.core)
    this.localSave('electives', this.electives)
  }

  localSave(name: string, list: string[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }


  setDefaults() {
    this.calendar = [];

    this.core = [
      'Hardware',
      'OOP I',
      'OOP II',
      'Theory of CS',
      'Operating Systems',
      'Programming Languages',
      'Data Structures and Algorithms',
      'Intro to Software Engineering',
    ];

    this.electives = [
      'Web Programming',
      'Information Systems Security',
      'Formal Methods for Software Engineering',
      'Software Processes and Practices',
      'Software Architecture and Design',
    ]
  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
  }
}
