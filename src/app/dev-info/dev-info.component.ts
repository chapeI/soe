import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css']
})
export class DevInfoComponent implements OnInit {

  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.localService.persistTest(["t3", "t4"])
  }
}
