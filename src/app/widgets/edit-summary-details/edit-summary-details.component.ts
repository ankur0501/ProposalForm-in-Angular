import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-summary-details',
  templateUrl: './edit-summary-details.component.html',
  styleUrls: ['./edit-summary-details.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class EditSummaryDetailsComponent implements OnInit {
  textPattern = "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";
  mobilepattern = "^((\\+91-?)|0)?[0-9]{10}$";

  yourName = new FormControl('Sachiananda Prasad Reddy', [Validators.required, Validators.pattern(this.textPattern)]);
  annualSalary = new FormControl('salary2', [Validators.required]);
  MobileNumber = new FormControl('9876543210', [Validators.required, Validators.pattern(this.mobilepattern)]);
  productName = new FormControl('Summary-Ulip');
  fundName = new FormControl('Equity Top 250');
  investmentAmount = new FormControl('100000', [Validators.required]);
  policyDuration = new FormControl('policy2', [Validators.required]);
  paymentDuration = new FormControl('payment2', [Validators.required]);
  payout = new FormControl('payout2', [Validators.required]);
  mobilePrefix1 = true;
  amountPrefix1 = true;

  @Input() editable: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditSummaryDetailsComponent>, private router: Router) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
  save() {
    this.closeDialog();
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
    return this.annualSalary.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessageInvestmentAmount() {
    return this.investmentAmount.hasError('required') ? 'Please enter your investment amount' : '';
  }

  getErrorMessagePolicyDuration() {
    return this.policyDuration.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessagePaymentDuration() {
    return this.paymentDuration.hasError('required') ? 'Please select a value' : '';
  }

  getErrorMessagePayout() {
    return this.payout.hasError('required') ? 'Please select a value' : '';
  }

  getValue1(val) {
    if (val) {
      this.mobilePrefix1 = true;
    }
    else {
      this.mobilePrefix1 = false;
    }
  }

  getValue2(val) {
    if (val) {
      this.amountPrefix1 = true;
    }
    else {
      this.amountPrefix1 = false;
    }
  }

  
  getLimit(e, boxInput : HTMLInputElement){
    let length = boxInput.value.length ; 
    if (length == 10) e.preventDefault();
  }
}
