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
    this.locallySave()
  }

  resetCalendar() {
    this.localService.clear()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload()
  }

  locallySave() {
    this.locallySaveCalendar();
    this.locallySaveRequirements();
  }

  locallySaveCalendar() {
    let calendar_stringifyd = JSON.stringify(this.calendar)
    this.localService.saveData('calendar', calendar_stringifyd)
  }

  locallySaveRequirements() {
    let requirements_stringifyd = JSON.stringify(this.core)
    this.localService.saveData('requirements', requirements_stringifyd)
  }

  loadCalendarAndRequirements() {
    if(this.checkIfNullCalendarOrRequirements()) {
      this.setDefaultCalendarAndRequirements()
    } else {
      this.loadLocallySavedCalendarAndRequirements()
    }
  }

  checkIfNullCalendarOrRequirements(): boolean {
    return (this.localService.getData('calendar') == null || this.localService.getData('requirements') == null)
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
    this.setLocalRequirements()
  }

  setLocalCalendar(){
    let calendar_parsed = JSON.parse(this.localService.getData('calendar'))
    this.calendar = calendar_parsed
  }

  setLocalRequirements(){
    let requirements_parsed = JSON.parse(this.localService.getData('requirements'))
    this.core = requirements_parsed
  }

}
