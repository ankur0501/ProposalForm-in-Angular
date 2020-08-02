import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ProposalPopupComponent } from 'src/app/widgets/proposal-popup/proposal-popup.component';

@Component({
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css', '../common/ng-style/ng-style.component.css']
})
export class ProposalFormComponent implements OnInit, AfterViewInit {

  proposalForm: FormGroup;
  color = '#7ed321';
  mode = 'determinate';
  valueProgress = 20;
  bufferValueProgress = 100;
  isForOther = false;
  isFloat = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  disableScrollDown = false;
  footerVal
  tabIndex: number = 0;
  currentPos: number;
  stepperVal: number = 5;
  isPolicyFor: boolean = false;
  isComplete1;
  isComplete2;
  isComplete3;
  isComplete4;
  isComplete5;
  isComplete6;

  constructor(private router: Router, private fb: FormBuilder, private elem: ElementRef, public dialog: MatDialog) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      policy: ['', Validators.required],
      policyFor: ['child', null],
      fullName: ['', null],
      dob: ['', null],
      gender: ['', null],
      fName: ['', null],
      mName: ['', null],
      maritalStatus: ['', null],
      sName: ['', null],
      nationality: ['', null],
      isIndia: ['', null],
      country: ['', null],
      currCountry: ['', null],
      employment: ['', null],
      addressline1: ['', null],
      addressline2: ['', null],
      contact: ['', null],
      emailId: ['', null],
      isStudent: ['', null],
      address: ['', null],
      city: ['', null],
      state: ['', null],
      pincode: ['', null],
    });
    this.secondFormGroup = this.fb.group({



    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['', null]
    });
    this.fourthFormGroup = this.fb.group({
      isAlcoholic: ['', null],
      typeOfAddiction: ['', null],
      isTobbaco: ['', null],
      isAlcohol: ['', null],
      isAnyNarcotics: ['', null],
      tobaccoQuantity: ['', null],
      tobaccoSinceYears: ['', null],
      alcoholeQuantityPerDay: ['', null],
      alcoholeSinceYears: ['', null],
      narcoticsQuantity: ['', null],
      narcoticsSinceYears: ['', null],

      isStoppedConsumed: ['', null],
      isAnyMedication: ['', null],
      diseaseDiagnosed: ['', null],
      dateOfDiagnosis: ['', null],
      treatmentGiven: ['', null],
      detailsOfMedicines: ['', null],
      doctorName: ['', null],
      followUpDate: ['', null],
      anyComplications: ['', null],
      addRemark: ['', null],
      isReceivedTreatment: ['', null],
      isUndergoneHospitalisation: ['', null],
      isOtherHealthRelatedInformation: ['', null],
      OtherHealthRelatedInformation: ['', null],
      addRemark2: ['', null],
    });
    this.fifthFormGroup = this.fb.group({
      fifthCtrl: ['', null]
    });
    this.sixthFormGroup = this.fb.group({
      childfullName: ['', null],
      childGender: ['', null],
      childDOB: ['', null],
      childFName: ['', null],
      ChildMName: ['', null],
      childNationality: ['', null],
      address1: ['', null],
      address2: ['', null],
      childPincode: ['', null],
      childCity: ['', null],
      childState: ['', null],
      isAddressSame: ['', null],
      isChildQue1: ['', null],
      isChildQue2: ['', null],
      isChildQue3: ['', null],
      isChildQue4: ['', null],
      isChildQue5: ['', null],
      isChildQue6: ['', null],
      isChildQue7: ['', null],
      isChildQue8: ['', null],
      isChildQue9: ['', null],
      addRemark1: ['', null],

      physicianName: ['', null],
      physicianAddress: ['', null],
      physicianContactDetails: ['', null],
      HeightInFeet: ['', null],
      HeightInCm: ['', null],
      WeightInkgs: ['', null],
    });
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    this.footerVal = document.getElementsByTagName("footer")[0].offsetTop;
    this.currentPos = window.pageYOffset;

    if ((window.innerHeight + window.scrollY) < (this.footerVal - 20)) {
      this.isFloat = true
    } else {
      this.isFloat = false
    }

    let headerHeight = document.getElementsByTagName("header");

    if ((headerHeight[0].offsetHeight + 30) < window.scrollY) {
      document.getElementsByClassName("mat-horizontal-stepper-header-container")[0].classList.add("sticky-strpper");
      document.getElementsByClassName("form-progress-wrapper")[0].classList.add("sticky-progress");
      document.getElementsByClassName("mat-horizontal-content-container")[0].classList.add('mt-stepper-header-container')
    }
    else {
      document.getElementsByClassName("mat-horizontal-stepper-header-container")[0].classList.remove("sticky-strpper");
      document.getElementsByClassName("form-progress-wrapper")[0].classList.remove("sticky-progress");
      document.getElementsByClassName("mat-horizontal-content-container")[0].classList.remove('mt-stepper-header-container')
    }

  }

  onValChange(e) {
    // alert(this.firstFormGroup.value.policy);
    if (e.value == "yes") {
      this.firstFormGroup.get('policyFor').setValue("");
      this.isPolicyFor = false;
      this.tabIndex = e.source.tabIndex + 2;
      // this.scroll("scrollId-0");
    } else {
      this.firstFormGroup.get('policyFor').setValue("child");
      this.isPolicyFor = true;
      this.tabIndex = 0;
    }
  }

  onIndexChange(tabIndexVal) {
    this.tabIndex = tabIndexVal + 1;
  }

  onSelection(e) {
    this.tabIndex = e.source.tabIndex + 1;
  }

  onSelectionPolicyFor(e) {
    // alert(this.firstFormGroup.value.policy+" -------- "+this.firstFormGroup.value.policyFor)
    if (this.firstFormGroup.value.policy == 'no' && this.firstFormGroup.value.policyFor != '') {
      this.isPolicyFor = true;
      // this.scroll("scrollId-0");
    } else {
      this.isPolicyFor = false;
    }
  }

  onIndexChangeMedical3(e, tabIndexVal) {
    if (e.value == "yes") {
      this.tabIndex = tabIndexVal + 1;
    } else {
      this.tabIndex = 34;
    }
  }

  onIndexChangeMedical1(e, tabIndexVal) {
    // this.tabIndex=17;
    // console.log(e)
    if (e.value == "yes") {
      this.tabIndex = tabIndexVal + 1;
    } else {
      this.tabIndex = 24;
    }

  }
  getNext(tabIndexVal) {
    // console.log(tabIndexVal)
    this.tabIndex = tabIndexVal + 1;
  }

  getSaveAndContinue(stepVal) {
    // console.log(this.firstFormGroup.value.policy)
    this.formStatus(stepVal)
    if (this.firstFormGroup.value.policy == 'no') {
      this.stepperVal = 6;
    }
    this.valueProgress = 0;
    let progressPer = 100 / this.stepperVal;
    this.valueProgress = progressPer * (stepVal + 1);
  }


  element: HTMLElement;

  // scroll(id) {

  //   id = Number(id.substring(id.indexOf("-") + 1)) + 1;

  //   console.log(id);
  //   let el = document.getElementById("scrollId-" + id);

  //   this.element = "scrollId-" + id;
  //   // console.log(id);
  //   // el.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
  //   window.scrollTo(el.yPosition)
  // }


  getSave() {
    this.getProposal();
  }

  getProposal() {
    this.dialog.open(ProposalPopupComponent, {
      panelClass: 'proposal-container'
    });
  }

  formStatus(stepVal) {
    // alert(stepVal)
    if (stepVal == 1) {
      if (this.firstFormGroup.valid) {
        this.isComplete1 = 'complited';
      } else {
        this.isComplete1 = "incomplete";
      }
    }

    if (stepVal == 2) {
      if (this.secondFormGroup.valid) {
        this.isComplete2 = 'complited';
      } else {
        this.isComplete2 = "incomplete";
      }
    }
    if (stepVal == 3) {
      if (this.thirdFormGroup.valid) {
        this.isComplete3 = 'complited';
      }
      else {
        this.isComplete3 = "incomplete";
      }
    }
    if (stepVal == 4) {
      if (this.fourthFormGroup.valid) {
        this.isComplete4 = 'complited';
      }
      else {
        this.isComplete4 = "incomplete";
      }
    }
    if (stepVal == 5) {
      if (this.fifthFormGroup.valid) {
        this.isComplete5 = 'complited';
      }
      else {
        this.isComplete5 = "incomplete";
      }
    }
    if (stepVal == 6) {
      if (this.sixthFormGroup.valid) {
        this.isComplete6 = 'complited';
      } else {
        this.isComplete6 = "incomplete";
      }
    }

  }

}
