import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-proposal-form',
  templateUrl: './post-proposal-form.component.html',
  styleUrls: ['./post-proposal-form.component.css', '../common/ng-style/ng-style.component.css']
})
export class PostProposalFormComponent implements OnInit {

  proposalForm: FormGroup;
  isForOther = false;
  isFloat = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  disableScrollDown = false;
  footerVal
  tabIndex: number = 0;
  currentPos: number;
  stepperVal: number = 5;

  constructor(private router: Router, private fb: FormBuilder, private elem: ElementRef) { }

  ngAfterViewInit() {
    this.footerVal = document.getElementsByTagName("footer")[0].offsetTop;
    this.currentPos = window.pageYOffset;
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      birthCountry: ['Dubai, United Arab Emirates', null],
      residenceCountry: ['Arab', null],
      purpose: ['Employment', null],
      address: ['Vinay Unique Garden Virar West……', null],
      contact: ['+ 97150 4299 428', null],
      doLastarrival: ['11/10/2019', null],
      doLeaving: ['', null],
      duration: ['18 Years', null],
      purposeInsurance: ['national', null],
      doyouTravel: ['no', null],
      typeOfAcc: ['(NRE)', null],
      qualification: ['', null],
      typeOfDiabetes: ['type1', null],
      isDiagnosed: ['no', null],
      isBloodTest: ['no', null],
      detailsOfMedication: ['', null],
      nameDoctor: ['Dr. Mohan Desai', null],
      addressDoctor: ['Vinay Unique Garden Virar West……', null],
      dateDoctor: ['22/10/2020', null],
      dateOfPref1: ['22/12/2019', null],
      dateOfPref2: ['22/12/2019', null],
      locationForExamination: ['home', null],
      preferedTime1: ['3:00', null],
      preferedTime2: ['P.M.', null]
    });

    this.secondFormGroup = this.fb.group({

    });
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    if ((window.innerHeight + window.scrollY) < (this.footerVal - 20)) {
      this.isFloat = true
    } else {
      this.isFloat = false
    }
    // let headerHeight = document.getElementsByTagName("header");
    // if ((headerHeight[0].offsetHeight + 30) < window.scrollY) {
    //   document.getElementsByClassName("mat-horizontal-stepper-header-container")[0].classList.add("sticky-strpper");
    //   document.getElementsByClassName("form-progress-wrapper")[0].classList.add("sticky-progress");
    //   document.getElementsByClassName("mat-horizontal-content-container")[0].classList.add('mt-stepper-header-container')
    // }
    // else {
    //   document.getElementsByClassName("mat-horizontal-stepper-header-container")[0].classList.remove("sticky-strpper");
    //   document.getElementsByClassName("form-progress-wrapper")[0].classList.remove("sticky-progress");
    //   document.getElementsByClassName("mat-horizontal-content-container")[0].classList.remove('mt-stepper-header-container')
    // }
  }

  onValChange(e) {
    if (e.value == "yes") {
      this.tabIndex = e.source.tabIndex + 2;
    }
  }

  onIndexChange(tabIndexVal) {
    this.tabIndex = tabIndexVal + 1;
  }

  onSelection(e) {
    this.tabIndex = e.source.tabIndex + 1;
  }
  getNext(tabIndexVal) {
    this.tabIndex = tabIndexVal + 1;
  }

}
