import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote-popup',
  templateUrl: './get-quote-popup.component.html',
  styleUrls: ['./get-quote-popup.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class GetQuotePopupComponent implements OnInit {
  mobilepattern = "^((\\+91-?)|0)?[0-9]{10}$";
  textPattern = "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";
  datePattern = "^[0-3]?[0-9][/][0-3]?[0-9][/](?:[1-2]{1})(?:[0-9]{1})?[0-9]{2}$";

  Emailaddress = new FormControl('Rahul@gmail.com', [Validators.required, Validators.email]);
  MobileNumber = new FormControl('9876543210', [Validators.required, Validators.pattern(this.mobilepattern)]);
  customerName = new FormControl('Sachiananda Prasad Reddy', [Validators.required, Validators.pattern(this.textPattern)]);
  dob = new FormControl(' 24/04/1995', [Validators.required, Validators.pattern(this.datePattern)]);
  dom= new FormControl('', [Validators.required, Validators.pattern(this.datePattern)]);
  loremIpsum= new FormControl('', [Validators.required, Validators.pattern(this.textPattern)]);
  spouseName = new FormControl('', [Validators.required, Validators.pattern(this.textPattern)]);
  gender = new FormControl('male', [Validators.required]);
  annualIncome = new FormControl('option1', [Validators.required]);
  isSmoker = new FormControl('no', [Validators.required]);
  isMarried = new FormControl('no', [Validators.required]);
  mobilePrefix1 = true;
  isMarriedStatus=false;

  constructor(public dialogRef: MatDialogRef<GetQuotePopupComponent>) { }

  ngOnInit() {
  }

  closeDialog() { this.dialogRef.close(); }

  
  getErrorMessageEmail() {
    return this.Emailaddress.hasError('required') ? 'Please enter a e-mail id' :
      this.Emailaddress.hasError('email') ? 'Please enter a valid e-mail id' :
        '';
  }

  getErrorMessageMobile() {
    return this.MobileNumber.hasError('required') ? 'Please enter a mobile number' :
      this.MobileNumber.hasError('pattern') ? 'Please enter a valid mobile number' :
        '';
  }

  getErrorMessageCustomerName() {
    return this.customerName.hasError('required') ? 'Please enter your full name' :
      this.customerName.hasError('pattern') ? 'Please enter your valid full name' : '';
  }

  getErrorMessageSpouseName() {
    return this.spouseName.hasError('required') ? 'Please enter your spouse name' :
      this.spouseName.hasError('pattern') ? 'Please enter your spouse name' : '';
  }

  getErrorMessageLoremIpsum(){
    return this.loremIpsum.hasError('required') ? 'Please enter your Lorem Ipsum' :
      this.loremIpsum.hasError('pattern') ? 'Please enter your Lorem Ipsum' : '';
  }

  getErrorMessageDob() {
    return this.dob.hasError('required') ? 'Please enter a date of birth' :
      this.dob.hasError('pattern') ? 'Please enter a valid date of birth' : '';
  }
  getErrorMessageDom(){
    return this.dom.hasError('required') ? 'Please enter a date of Marriage' :
      this.dom.hasError('pattern') ? ' Please enter a valid date of Marriage' : '';
  }

  getErrorMessageGender() {
    return this.gender.hasError('required') ? 'Please make a selection' : '';
  }

  getErrorMessageAnnualIncome() {
    return this.annualIncome.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessageIsSmoker() {
    return this.annualIncome.hasError('required') ? 'Please make a selection' : '';
  }

  getErrorMessageIsMarried() {
    return this.isMarried.hasError('required') ? 'Please make a selection' : '';
  }

  getValue1(val) {
    if (val) {
      this.mobilePrefix1 = true;
    }
    else {
      this.mobilePrefix1 = false;
    }
  }

  isMarriedCheck(val){
    if(val=="yes")
    this.isMarriedStatus=true;
    else
    this.isMarriedStatus=false;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46) {
      return true;
    } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  getLimit(e, boxInput : HTMLInputElement){
    let length = boxInput.value.length ; 
    // console.log(length)
    if (length == 10) e.preventDefault();
  }

}
