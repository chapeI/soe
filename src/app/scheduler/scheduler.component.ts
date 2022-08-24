import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  reqs: any = []
  data: any = {}
  trms: any = [ {"courses": [{"name": this.t1Message()}]}, {"courses": []} ]
  cols: any = ['red', 'blue', 'green', 'orange', 'purple']


  t1Message(): string {
    return "DRAG COURSES FROM REQUIREMENTS INTO TERMS"
  }

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
    this.removeT1Message()
    this.save()
  }

  removeT1Message() {
    let y = this.trms[0].courses.findIndex(
      (x: { name: string; }) => x.name === this.t1Message()
    )

    if(y != -1) {
      this.trms[0].courses.splice(y, 1)
    }
  }

  save() {
    this.localService.save('trms', JSON.stringify(this.trms))
    this.localService.save('reqs', JSON.stringify(this.reqs))
    this.localService.save('data', JSON.stringify(this.data))
  }

  setupWithFirestoreData() {
    this.firestoreService.csDocument.get().subscribe(
      doc => {
        this.data = doc.data()
        this.pushNamesToAnArray()
        this.appendArraySize()
        this.appendColors()
    })
  }

  appendArraySize() {
    this.reqs.forEach(
      (r: any) => {
        this.data[r].size = this.data[r].courses.length
      }
    )
  }

  appendColors() {
    this.reqs.forEach(
      (r: any, i: number) => {
        this.data[r].color = this.cols[i]

        this.data[r].courses.forEach(
          (c: any) => {
            c.color = this.cols[i]
          }
        )
      }
    )
  }

  pushNamesToAnArray() {
    let keys = Object.keys(this.data)
    keys.forEach(
      requirement => {
        this.reqs.push(requirement)
      }
    )
  }

  reset() {
    this.localService.clear()
    window.location.reload()
  }

  remove() { }
  openSettingsDialog() {}

  createDocument() {
    this.firestoreService.createCSFirestoreDoc();
  }

}
