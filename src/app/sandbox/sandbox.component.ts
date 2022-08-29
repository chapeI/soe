import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  open() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      data: {title: "hello, anoop"},
      position: {'bottom': '0'},
      // direction: 'rtl'
      width: '100%'
      })

    dialogRef.afterClosed().subscribe(
      result => console.log('result', result)
    )
  }

}
