import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pre-quote',
  templateUrl: './pre-quote.component.html',
  styleUrls: ['./pre-quote.component.css', '../common/ng-style/ng-style.component.css']
})
export class PreQuoteComponent implements OnInit {
  mobilepattern = "^((\\+91-?)|0)?[0-9]{10}$";
  textPattern = "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";
  datePattern = "^[0-3]?[0-9][/][0-3]?[0-9][/](?:[1-2]{1})(?:[0-9]{1})?[0-9]{2}$";

  Emailaddress = new FormControl('', [Validators.required, Validators.email]);
  MobileNumber = new FormControl('', [Validators.required, Validators.pattern(this.mobilepattern)]);
  customerName = new FormControl('', [Validators.required, Validators.pattern(this.textPattern)]);
  dob = new FormControl('', [Validators.required, Validators.pattern(this.datePattern)]);
  dom= new FormControl('', [Validators.required, Validators.pattern(this.datePattern)]);
  loremIpsum= new FormControl('', [Validators.required, Validators.pattern(this.textPattern)]);
  spouseName = new FormControl('', [Validators.required, Validators.pattern(this.textPattern)]);
  gender = new FormControl('', [Validators.required]);
  annualIncome = new FormControl('', [Validators.required]);
  isSmoker = new FormControl('', [Validators.required]);
  isMarried = new FormControl('', [Validators.required]);
  // pageEndDate= new FormControl('', null);
  isMarriedStatus=false;

  mobilePrefix1;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  slideConfig = {
    slidesToShow: 1,
    dots: true,
    arrows: false,
    speed: 500,
    autoplay: true
  };

  getQuate() {
    this.router.navigate(['/plan-suggetion']);
  }

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
      this.customerName.hasError('pattern') ? 'Please enter your full name' : '';
  }
  getErrorMessageSpouseName() {
    return this.spouseName.hasError('required') ? 'Please enter your spouse name' :
      this.spouseName.hasError('pattern') ? 'Please enter your spouse name' : '';
  }

  getErrorMessageLoremIpsum(){
    return this.customerName.hasError('required') ? 'Please enter your Lorem Ipsum' :
      this.customerName.hasError('pattern') ? 'Please enter your Lorem Ipsum' : '';
  }
  
  getErrorMessageDob() {
    return this.dob.hasError('required') ? 'Please enter a date of birth' :
      this.dob.hasError('pattern') ? ' Please enter a valid date of birth' : '';
  }
  getErrorMessageDom(){
    return this.dob.hasError('required') ? 'Please enter a date of Marriage' :
      this.dob.hasError('pattern') ? ' Please enter a valid date of Marriage' : '';
  }
  getErrorMessageGender() {
    return this.gender.hasError('required') ? 'Please make a selection' : '';
  }

  getErrorMessageAnnualIncome() {
    return this.annualIncome.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessageIsSmoker() {
    return this.isSmoker.hasError('required') ? 'Please make a selection' : '';
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

  getLimit(e, boxInput : HTMLInputElement){
    let length = boxInput.value.length ; 
    if (length == 10) e.preventDefault();
  }


  getMaxLength(e, maxVal,yearText: HTMLInputElement){
    var value = yearText.value;

    // console.log(yearText.value);
    // console.log(yearText.className);

    if (value && value.length >= maxVal) {
      // yearText.className;
      e.preventDefault();
      }
  }
  
}
