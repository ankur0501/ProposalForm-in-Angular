import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report-claim-submit',
  templateUrl: './report-claim-submit.component.html',
  styleUrls: ['./report-claim-submit.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class ReportClaimSubmitComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReportClaimSubmitComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }

  done() {
    this.closeDialog();
  }
}
