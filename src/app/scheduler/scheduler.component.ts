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
      this.setupWithFirestoreData()
    } else {
      this.setupWithLocalData()
    }
  }

  setupWithLocalData() {
    this.trms = JSON.parse(this.localService.get('trms'))
    this.data = JSON.parse(this.localService.get('data'))
    this.reqs = JSON.parse(this.localService.get('reqs'))
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(
      event.previousContainer.data,
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

  setupWithFirestoreData() {
    this.firestoreService.csDocument.get().subscribe(doc => {
      this.data = doc.data()
      this.pushNamesToAnArray()
      this.appendArraySize()
    })
  }

  appendArraySize() {
    this.reqs.forEach((r: any) => {
      this.data[r].size = this.data[r].courses.length
      console.log(this.data[r]);
    })
  }

  pushNamesToAnArray() {
    let keys = Object.keys(this.data)
    keys.forEach(requirement => {
      this.reqs.push(requirement)
    })
  }

  reset() {
    this.localService.clear()
    window.location.reload()
  }

  remove() { }
  openSettingsDialog() {}

  createDocument() {
    this.firestoreService.createFirestoreDoc();
  }
}
