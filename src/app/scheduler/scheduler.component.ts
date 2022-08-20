import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FirebaseyService } from '../firebasey.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  calendar = []
  requirements = []

  constructor(private localService: LocalService, private firebaseService: FirebaseyService) { }

  ngOnInit() {
    this.setup()
  }

  setup() {
    if(this.noLocalData()) {
      this.findRequirements()
    } else {
      this.loadLocalData()
    }
  }

  loadLocalData() {
    console.log('setting local data');
    this.grabLocalCalendar()
    this.grabLocalRequirements()
  }

  grabLocalRequirements() {
    this.loadCores()
  }

  loadCores(){
    let parsed = JSON.parse(this.localService.get('core'))
  }

  grabLocalCalendar(){
    let parsed = JSON.parse(this.localService.get('calendar'))
  }

  noLocalData(): boolean {
    return (this.localService.get('calendar') == null)
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.persistCalendar()
    this.persistRequirements()
  }

  persistRequirements() { }
  persistCalendar() {}

  persist(name: string, list: string[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }

  findRequirements() {
    console.log('FIND REQUIREMENTS');
  }

}
