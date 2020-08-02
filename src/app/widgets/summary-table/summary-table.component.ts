import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SummaryTableComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
}
