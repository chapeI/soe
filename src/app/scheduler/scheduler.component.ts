import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../requirements.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  data: any = {}
  requirements: any = []

  constructor(private requirementsService: RequirementsService) { }

  noLocalData(): boolean { return true }

  ngOnInit() {
    if(this.noLocalData()) {
      this.setupWithStartingConditions()
    } else {
      this.setupWithLocalData()
    }
  }

  setupWithLocalData() {}

  drop() { this.saveCurrentState() }

  saveCurrentState() { }

  setupWithStartingConditions() {
    this.setData()
    this.setRequirementsArray()
  }

  setData() {
    this.data = this.requirementsService.getSortedRequirements()
  }

  setRequirementsArray() {
    let requirements = Object.keys(this.data)
    requirements.forEach(requirement => {
      this.requirements.push(requirement)
    })
  }

  buildRequirementContainer(requirement: string) { }

}
