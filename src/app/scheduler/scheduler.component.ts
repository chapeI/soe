import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  requirements: string[] = []
  calendar: string[] = []

  constructor(private localService: LocalService) { }

  ngOnInit() { this.setCalendarAndRequirements() }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.locallySaveCalendar();
    this.locallySaveRequirements();
  }

  locallySaveCalendar() {
    let calendar_stringifyd = JSON.stringify(this.calendar)
    this.localService.saveData('calendar', calendar_stringifyd)    
  }

  locallySaveRequirements() {
    let requirements_stringifyd = JSON.stringify(this.requirements)
    this.localService.saveData('requirements', requirements_stringifyd)
  }

  setCalendarAndRequirements() {
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

    this.requirements = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
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
    this.requirements = requirements_parsed
  }

}
