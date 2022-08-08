import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-learning',
  template: `
  <div *ngFor="let n of names">{{ n }}</div>
  `,
  styles: [``]
  })
export class LearningComponent implements OnInit {
  public names: string[] = [];
  constructor(private _nameService: NamesService) {}
  ngOnInit(): void {
    this.names = this._nameService.getNames();
  }
}
