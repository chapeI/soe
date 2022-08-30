import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-test',
  templateUrl: './settings-test.component.html',
  styleUrls: ['./settings-test.component.scss']
})
export class SettingsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected = "fall"
  year = 2022
}
