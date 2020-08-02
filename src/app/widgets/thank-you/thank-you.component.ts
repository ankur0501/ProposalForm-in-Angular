import { Component, OnInit } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ThankYouComponent>) { }

  ngOnInit() {
  }

  closeDialog(){ 
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close(); 
  }

}
