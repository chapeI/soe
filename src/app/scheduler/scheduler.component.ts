import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  calendar = []
  requirements = []

  constructor() { }

  noLocalData(): boolean {
    return true;
  }

  ngOnInit() {
    if(this.noLocalData()) {
      this.findRequirements()
    } else {
      this.setLocalData()
    }
  }

  setLocalData() {
    console.log('setting local data');
    this.setLocalCalendar()
    this.setLocalRequirements()
  }

  setLocalRequirements() { }
  setLocalCalendar(){ }

  drop() {
    this.saveCurrentState()
  }

  saveCurrentState() {
    this.saveCalendar()
    this.saveRequirements()
  }

  saveRequirements() { }
  saveCalendar() {}

  findRequirements() {
    console.log('FIND REQUIREMENTS');
  }

}
