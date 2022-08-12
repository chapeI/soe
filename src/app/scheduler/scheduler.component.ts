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
  calendar: string[] = []

  constructor(private localService: LocalService) { }

  ngOnInit() { this.loadCalendarAndRequirements() }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
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
  }

  locallySaveCalendar() {
    let calendar_stringifyd = JSON.stringify(this.calendar)
    this.localService.saveData('calendar', calendar_stringifyd)
  }

  locallySaveCoreRequirements() {
    let core_requirements_stringifyd = JSON.stringify(this.core)
    this.localService.saveData('core', core_requirements_stringifyd)
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
  }

  loadLocallySavedCalendarAndRequirements() {
    this.setLocalCalendar()
    this.setLocalCoreRequirements()
  }

  setLocalCalendar(){
    let calendar_parsed = JSON.parse(this.localService.getData('calendar'))
    this.calendar = calendar_parsed
  }

  setLocalCoreRequirements(){
    let core_requirements_parsed = JSON.parse(this.localService.getData('core'))
    this.core = core_requirements_parsed
  }

}
