import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fund-allocated',
  templateUrl: './fund-allocated.component.html',
  styleUrls: ['./fund-allocated.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class FundAllocatedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FundAllocatedComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
}
