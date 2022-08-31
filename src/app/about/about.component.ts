import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToCode() {
    console.log("https://github.com/chapeI/soe/blob/main/src/app/scheduler/scheduler.component.ts");
  }

  addMissingCourses() {
    console.log("https://github.com/chapeI/soe/edit/main/src/assets/cs.json");
  }

  goToUrl(url: string) {
    window.open(url, "_blank")
  }
}
