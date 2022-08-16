import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalService } from '../local.service';


export interface Course {
  name: string
  color: string
}

@Component({
  selector: 'dialog-settings',
  template: `
    <h1 mat-dialog-title>Dialog with elements</h1>
    <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `
})
export class DialogSettings {}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  core: Course[] = []
  cs: Course[] = []
  maths: Course[] = []
  english: Course[] = []
  general: Course[] = []

  terms = [
    {'courses': [{'name': 'courses go here', 'color': 'grey'}]},
  ]

  constructor(private localService: LocalService, public dialog: MatDialog) { }

  ngOnInit() { this.setup() }

  openDialog() {
    this.dialog.open(DialogSettings)
  }

  addTerm() {
    this.terms.push(
      {'courses': []},
    )
    this.saveState()
   }

  removeTerm() {
    this.terms.pop()
    this.persistUsersTerms()
  }

  persistUsersTerms() {
    let stringed = JSON.stringify(this.terms)
    this.localService.save('terms', stringed)
  }

  setup() {
    if(this.noLocallySavedData()) {
      this.setDefaults()
    } else {
      this.loadLocallySavedData()
    }
  }

  loadLocallySavedData() {
    this.loadTermsAddedByUser()
    this.loadAlteredRequirements()
  }

  loadTermsAddedByUser(){
    let parsed = JSON.parse(this.localService.get('terms'))
    this.terms = parsed
  }

  noLocallySavedData(): boolean {
    return (this.localService.get('terms') == null)
  }

  drop(event: CdkDragDrop<Course[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    this.saveState()
  }

  saveState() {
    this.persistUsersTerms()
    this.persistRequirements()
  }

  persistRequirements() {
    this.locallySave('core', this.core)
    this.locallySave('cs', this.cs)
    this.locallySave('maths', this.maths)
    this.locallySave('english', this.english)
    this.locallySave('general', this.general)

  }

  locallySave(name: string, list: Course[]) {
    let stringifyd = JSON.stringify(list)
    this.localService.save(name, stringifyd)
  }

  setDefaults() {
    this.setTerm1()
    this.setDefaultRequirements()
  }

  setTerm1() {
    // variable definition does this by default
  }

  setDefaultRequirements() {
    this.core = [
      {'name': 'data structures and algorithms', 'color': 'red'},
      {'name': 'system hardware',                'color': 'red'},
      {'name': 'oop',  'color': 'red'},
      {'name': 'discrete math',  'color': 'red'},
      {'name': 'probability and stats',  'color': 'red'},
      {'name': 'oop II',  'color': 'red'},
      {'name': 'theory of CS',  'color': 'red'},
      {'name': 'operating systems',  'color': 'red'},
      {'name': 'programming languages',  'color': 'red'},
      {'name': 'intro to software engineering',  'color': 'red'},
    ];

    this.cs = [
      {'name': 'web development',  'color': 'blue'},
      {'name': 'information security',  'color': 'blue'},
      {'name': 'architecture',  'color': 'blue'},
      {'name': 'ui design',  'color': 'blue'},
      {'name': 'distributed computing',  'color': 'blue'},
      {'name': 'data analytics',  'color': 'blue'},
      {'name': 'machine learning',  'color': 'blue'},
      {'name': 'pattern recognition',  'color': 'blue'},
    ]

    this.maths = [
      {'name': 'combinatorics',  'color': 'purple'},
      {'name': 'advanced calc',  'color': 'purple'},
      {'name': 'multivariable calc',  'color': 'purple'},
      {'name': 'lin alg',  'color': 'purple'},
      {'name': 'differentials',  'color': 'purple'},
      {'name': 'numerical analysis',  'color': 'purple'},
    ]

    this.english = [
      {'name': 'learn to argue',  'color': 'orange' },
      {'name': 'write technically',  'color': 'orange' },
      {'name': 'ethics',  'color': 'orange' }
    ]

    this.general = [
      {'name': 'intro to admin',  'color': 'green' },
      {'name': 'canadian business',  'color': 'green' },
      {'name': 'contemporary art',  'color': 'green' },
      {'name': 'genetics',  'color': 'green' },
      {'name': 'anthropology',  'color': 'green' },
      {'name': 'philosophy of education',  'color': 'green' },
      {'name': 'critical reading',  'color': 'green' },
      {'name': 'thermodynamics',  'color': 'green' },
    ]
  }

    resetCalendar() {
      this.localService.clear()
      this.refreshPage()
    }

  refreshPage() {
    window.location.reload()
  }

  loadAlteredRequirements() {
    this.loadCores()
    this.loadElectives()
    this.loadMaths()
    this.loadEnglish()
    this.loadGeneral()
  }

  loadCores(){
    let parsed = JSON.parse(this.localService.get('core'))
    this.core = parsed
  }

  loadElectives(){
    let parsed = JSON.parse(this.localService.get('cs'))
    this.cs = parsed
  }

  loadMaths() {
    let parsed = JSON.parse(this.localService.get('maths'))
    this.maths = parsed
  }

  loadEnglish() {
    this.english = JSON.parse(this.localService.get('english'))
  }

  loadGeneral() {
    this.general = JSON.parse(this.localService.get('general'))
  }

}
