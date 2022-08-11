import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    if(this.localService.getData('calendar') != null) {
      let calendar_parsed = JSON.parse(this.localService.getData('calendar'))
      this.calendar = calendar_parsed
    }
  }

  calendar = [
    'move into this calendar'
  ];

  requirements = [
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

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    let calendar_stringifyd = JSON.stringify(this.calendar)
    this.localService.saveData('calendar', calendar_stringifyd)    
  }
}
