import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  reqs: any = []
  data: any = {}
  trms: any = [ {"courses": []} ]

  add() {
    this.trms.push({'courses': []})
    this.save()
  }

  constructor(
    private firestoreService: FirestoreService,
    private localService: LocalService
    ) { }

  noLocalData(): boolean {
    return (this.localService.get('trms') == null)
   }

  ngOnInit() {
    if(this.noLocalData()) {
      this.setupWithFirestore()
    } else {
      this.useLocalData()
    }
  }

  useLocalData() {
    this.trms = JSON.parse(this.localService.get('trms'))
    this.data = JSON.parse(this.localService.get('data'))
    this.reqs = JSON.parse(this.localService.get('reqs'))
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(event.previousContainer.data,
                  event.container.data,
                  event.previousIndex,
                  event.currentIndex)
    this.save()
  }

  save() {
    this.localService.save('trms', JSON.stringify(this.trms))
    this.localService.save('reqs', JSON.stringify(this.reqs))
    this.localService.save('data', JSON.stringify(this.data))
  }

  setupWithFirestore() {
    this.firestoreService.firestoreDocument.subscribe(doc => {
      this.data = doc.data()
      this.setRequirements()
    })
  }

  setRequirements() {
    let requirements = Object.keys(this.data)
    requirements.forEach(requirement => {
      this.reqs.push(requirement)
    })
  }

  reset() {
    this.localService.clear()
    window.location.reload()
  }

  remove() { }
  openSettingsDialog() {}

}
