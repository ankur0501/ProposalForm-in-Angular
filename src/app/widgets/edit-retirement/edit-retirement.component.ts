import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-retirement',
  templateUrl: './edit-retirement.component.html',
  styleUrls: ['./edit-retirement.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class EditRetirementComponent implements OnInit {
  textPattern = "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";
  mobilepattern = "^((\\+91-?)|0)?[0-9]{10}$";

  yourName = new FormControl('Sachiananda Prasad Reddy', [Validators.required, Validators.pattern(this.textPattern)]);
  yourIncome = new FormControl('option1', [Validators.required]);
  yourAge = new FormControl('40', [Validators.required]);
  MobileNumber = new FormControl('9876543210', [Validators.required, Validators.pattern(this.mobilepattern)]);
  isEmployee = new FormControl('yes', [Validators.required]);
  youAre = new FormControl('Salaried', [Validators.required]);
  payOut = new FormControl('Monthly', [Validators.required]);
  mobilePrefix1 = true;

  constructor(public dialogRef: MatDialogRef<EditRetirementComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }

  getErrorMessageMobile() {
    return this.MobileNumber.hasError('required') ? 'Please enter a mobile number' :
      this.MobileNumber.hasError('pattern') ? 'Please enter a valid mobile number' :
        '';
  }

  getErrorMessageYourName() {
    return this.yourName.hasError('required') ? 'Please enter your full name' :
      this.yourName.hasError('pattern') ? 'Please enter your valid full name' : '';
  }

  getErrorMessageYourIncome() {
    return this.yourIncome.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessageYourAge() {
    return this.yourAge.hasError('required') ? 'Please enter your child age' : '';
  }

  getErrorMessageIsEmployee() {
    return this.isEmployee.hasError('required') ? 'Please make a selection' : '';
  }

  getErrorMessageYouAre() {
    return this.youAre.hasError('required') ? 'Please make a selection' : '';
  }

  getErrorMessagePayOut() {
    return this.payOut.hasError('required') ? 'Please make a selection' : '';
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

