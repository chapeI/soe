import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
