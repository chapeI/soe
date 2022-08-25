import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToCode() {
    console.log("https://github.com/chapeI/soe/blob/main/src/app/scheduler/scheduler.component.ts");
  }

  addMissingCourses() {
    console.log("https://github.com/chapeI/soe/edit/main/src/assets/cs.json");
  }

}
