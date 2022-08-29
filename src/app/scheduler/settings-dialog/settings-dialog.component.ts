import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

}
