import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThankYouComponent } from '../../widgets/thank-you/thank-you.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-call',
  templateUrl: './schedule-call.component.html',
  styleUrls: ['./schedule-call.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class ScheduleCallComponent implements OnInit {
  mobilepattern = "^((\\+91-?)|0)?[0-9]{10}$";
  textPattern = "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";

  FullName = new FormControl('Sachiananda Prasad Reddy', [Validators.required, Validators.pattern(this.textPattern)]);
  MobileNumber = new FormControl('9876543210', [Validators.required, Validators.pattern(this.mobilepattern)]);
  mobilePrefix1 = true;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ScheduleCallComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getErrorMessageFullName() {
    return this.FullName.hasError('required') ? 'You must enter a value' :
      this.FullName.hasError('pattern') ? ' Please enter your full name' : '';
  }

  getErrorMessageMobile() {
    return this.MobileNumber.hasError('required') ? 'You must enter a value' :
      this.MobileNumber.hasError('pattern') ? 'Please enter a valid mobile number' : '';
  }

  getThankyou() {
    this.closeDialog();
    this.dialog.open(ThankYouComponent, {
      panelClass: 'thankyou-popup-container'
    });
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("cdk-global-scrollblock");
  }

  getValue1(val) {
    if (val) {
      this.mobilePrefix1 = true;
    }
    else {
      this.mobilePrefix1 = false;
    }
  }

  getLimit(e, boxInput : HTMLInputElement){
    let length = boxInput.value.length ; 
    if (length == 10) e.preventDefault();
  }
}
