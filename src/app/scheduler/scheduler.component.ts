import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { RequirementsService } from '../requirements.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  requirements: any = []
  data: any = {}
  terms: any = [
    {"courses": []}
  ]

  add() {
    this.terms.push({'courses': []})
    this.saveCurrentState()
  }

  constructor(
    private requirementsService: RequirementsService,
    private localService: LocalService
    ) { }

  noLocalData(): boolean {
    return (this.localService.get('data') == null)
   }

  ngOnInit() {
    if(this.noLocalData()) {
      this.useDatabase()
    } else {
      this.useLocalData()
    }
  }

  useLocalData() {
    let terms_str = this.localService.get('terms')
    let parsed_terms_str = JSON.parse(terms_str)
    this.terms = parsed_terms_str

    let data_str = this.localService.get('data')
    let parsed_data_str = JSON.parse(data_str)
    this.data = parsed_data_str

    let requirements_str = this.localService.get('requirements')
    let parsed_str = JSON.parse(requirements_str)
    this.requirements = parsed_str
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(event.previousContainer.data,
                  event.container.data,
                  event.previousIndex,
                  event.currentIndex)
    this.saveCurrentState()
  }

  saveCurrentState() {
    let terms_str = JSON.stringify(this.terms)
    this.localService.save('terms', terms_str)

    let requirements_str = JSON.stringify(this.requirements)
    this.localService.save('requirements', requirements_str)

    let data_str = JSON.stringify(this.data)
    this.localService.save('data', data_str)
  }

  useDatabase() {
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

  reset() {
    this.localService.clear()
    window.location.reload()
  }

  remove() { }
  openSettingsDialog() {}

}
