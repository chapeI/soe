import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../requirements.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  o: any = {}

  constructor(private requirementsService: RequirementsService) { }

  noLocalData(): boolean { return true }

  ngOnInit() {
    if(this.noLocalData()) {
      this.setRequirements()
    } else {
      this.setupWithLocalData()
    }
  }

  setupWithLocalData() {
    this.setLocalCalendar()
    this.setLocalRequirements()
  }

    setLocalRequirements() { }
    setLocalCalendar(){ }

  drop() { this.saveCurrentState() }

  saveCurrentState() { }

  setRequirements() {
    this.o = this.requirementsService.getSortedRequirements()
    let requirements = Object.keys(this.o)
    requirements.forEach(requirement => {
      this.buildRequirementContainer(requirement)
    })
  }

  buildRequirementContainer(requirement: string) {
    console.log(this.o[requirement]);
  }

}
