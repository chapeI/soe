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

  ngOnInit() { this.loadCalendarAndRequirements() }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.save()
  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
  }

  save() {
    this.locallySaveCalendar();
    this.locallySaveCoreRequirements();
    this.locallySaveElectiveRequirements();
  }

  locallySaveCalendar() {
    let calendar_stringifyd = JSON.stringify(this.calendar)
    this.localService.saveData('calendar', calendar_stringifyd)
  }

  locallySaveCoreRequirements() {
    let core_requirements_stringifyd = JSON.stringify(this.core)
    this.localService.saveData('core', core_requirements_stringifyd)
  }

  locallySaveElectiveRequirements() {
    let elective_requirements_stringifyd = JSON.stringify(this.electives)
    this.localService.saveData('electives', elective_requirements_stringifyd)
  }

  loadCalendarAndRequirements() {
    if(this.checkIfNullCalendarOrRequirements()) {
      this.setDefaultCalendarAndRequirements()
    } else {
      this.loadLocallySavedCalendarAndRequirements()
    }
  }

  checkIfNullCalendarOrRequirements(): boolean {
    return (this.localService.getData('calendar') == null)
  }

  setDefaultCalendarAndRequirements() {
    this.calendar = [
      'move into this calendar'
    ];

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

  loadLocallySavedCalendarAndRequirements() {
    this.setLocalCalendar()
    this.setLocalCoreRequirements()
    this.setLocalElectiveRequirements()
  }

  setLocalCalendar(){
    let calendar_parsed = JSON.parse(this.localService.getData('calendar'))
    this.calendar = calendar_parsed
  }

  setLocalCoreRequirements(){
    let core_requirements_parsed = JSON.parse(this.localService.getData('core'))
    this.core = core_requirements_parsed
  }

  setLocalElectiveRequirements(){
    let electives_requirements_parsed = JSON.parse(this.localService.getData('electives'))
    this.electives = electives_requirements_parsed
  }

}
