import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rising-star',
  templateUrl: './rising-star.component.html',
  styleUrls: ['./rising-star.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class RisingStarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RisingStarComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
}
