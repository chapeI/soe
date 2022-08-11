import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css']
})
export class DevInfoComponent implements OnInit {

  public value: string | null = "null";

  constructor(private localStorage: LocalService) { }

  ngOnInit(): void {
    this.value = this.localStorage.getData('anoop')
  }

  save(value: string) {
    this.localStorage.saveData('anoop', value)
  }

}
