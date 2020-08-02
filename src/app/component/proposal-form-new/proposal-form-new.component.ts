import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { CustomValidationService } from '../../services/custom-validation.service';
import { CrudServiceService } from 'src/app/crud-service.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-proposal-form-new',
  templateUrl: './proposal-form-new.component.html',
  styleUrls: ['./proposal-form-new.component.css', '../common/ng-style/ng-style.component.css']
})

export class ProposalFormNewComponent implements OnInit {
  valueProgress = 10;
  btnClickCount = 0;
  bufferValueProgress = 100;
  selectedItem = 'item1';
  color;
  mode;
  isFloat = true;
  footerVal
  currentPos: number;
  stepperVal = 5;

  isComplete1
  isComplete2
  isComplete3
  isComplete4
  isComplete5
  isComplete6
  isStickyProgress: boolean = true;

  personalGroup: FormGroup;
  employmentGroup: FormGroup;
  historyGroup: FormGroup;
  medicalGroup: FormGroup;
  taxOtherGroup: FormGroup;
  childGroup: FormGroup;
  stateList: any = [];
  qualificationList: any = [];
  isOtherEducation: boolean = false;
  isStudentFlag: boolean = false;
  isequalPerment_CurrentAddr: boolean = true;
  isMinor: boolean = false;
  isLesThan_5_Age: boolean = false;
  isLAproposerSame: boolean = true;
  isPropOtherEducation: boolean = false;
  isPropStudentFlag: boolean = false;
  isPropequalPerment_CurrentAddr: boolean = true;
  employmentDetailsList: any = [
    { id: "Salaried", value: "Salaried" }, { id: "Self employed (Business)", value: "Self employed (Business)" }, { id: "Self employed (Professional)", value: "Self employed (Professional)" },
    { id: "Agriculture", value: "Agriculture" }, { id: "Housewife", value: "Housewife" }, { id: "Labourer/Worker", value: "Labourer/Worker" }, { id: "Retired", value: "Retired" }
  ];
  natureOfDutyList: any = [
    { id: 'Office Work', value: 'Office Work' }, { id: 'Sales', value: 'Sales' }, { id: 'Driving', value: 'Driving' }, { id: 'Teaching', value: 'Teaching' },
    { id: 'Farming', value: 'Farming' }, { id: 'Managerial Work', value: 'Managerial Work' }, { id: 'Others', value: 'Others' }
  ];
  experienceYearList: any[] = [];
  experienceMonthList: any[] = [];
  numberOfEmployee: any = [
    { id: "Upto 50", value: "Upto 50" },
    { id: "50-250", value: "50-250" },
    { id: "250-1000", value: "250-1000" },
    { id: "1000+", value: "1000+" }
  ];
  occupationIndustry: [
    { id: "BFSI", value: "BFSI" },
    { id: "BPO", value: "BPO" },
    { id: "Education", value: "Education" },
    { id: "Energy", value: "Energy" },
    { id: "FMCG", value: "FMCG" },
    { id: "Finance", value: "Finance" },
    { id: "Health Care", value: "Health Care" },
    { id: "Hotel", value: "Hotel" },
    { id: "IT", value: "IT" },
    { id: "Imports", value: "Imports" },
    { id: "Medicine", value: "Medicine" },
    { id: "Retail", value: "Retail" },
  ];

  constructor(private router: Router, private fb: FormBuilder, private elem: ElementRef, public dialog: MatDialog, public cvserv: CustomValidationService, private service: CrudServiceService) { }

  ngOnInit() {
    this.personalGroup = this.fb.group({
      policy: [''],
      nameTitle: ['', [Validators.required]],
      policyFor: ['child'],
      firstName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      middleName: ['', [Validators.pattern(this.cvserv.HumanName)]],
      lastName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      fullName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      panNumber: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      dob: ['', [Validators.required, Validators.pattern(this.cvserv.Date)]],
      gender: ['', [Validators.required]],
      fName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      mName: ['', [Validators.pattern(this.cvserv.HumanName)]],
      education: ['', [Validators.required]],
      year_Semester_Std: [''],
      otherDetails: [''],
      duration_course: [''],
      course_name: [''],
      highestEducation: ['', [Validators.required]],
      collegelName: ['', [Validators.required]],
      isStudent: ['', Validators.required],
      classStudied: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      parentInsuranceCoverd: ['', null],
      parentAnnualIncome: ['', null],
      sibInsuCover: ['', null],
      maritalStatus: ['', null],
      nationality: ['', Validators.required],
      addressline1: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      addressline2: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      addressline3: ['', [Validators.pattern(this.cvserv.Address)]],
      corr_addressline1: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      corr_addressline2: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      corr_addressline3: ['', Validators.pattern(this.cvserv.Address)],
      contact: ['', Validators.pattern(this.cvserv.Phone)],
      officePhone: ['', Validators.pattern(this.cvserv.Phone)],
      mobile: ['', [Validators.required, Validators.pattern(this.cvserv.Phone)]],
      emailId: ['', [Validators.required, Validators.pattern(this.cvserv.Email)]],
      facebookId: ['', Validators.pattern(this.cvserv.Email)],
      linkedInId: ['', Validators.pattern(this.cvserv.Email)],
      equalPermentRecidencial: ['', [Validators.required]],
      // address: ['', Validators.pattern(this.cvserv.Address)],
      city: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern(this.cvserv.Pincode)]],
      corr_city: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      corr_state: ['', [Validators.required]],
      corr_pincode: ['', [Validators.required, Validators.pattern(this.cvserv.Pincode)]],
      corr_Address_Value: ['', [Validators.required]],
      weightOfMinor: ['', [Validators.required, Validators.pattern(this.cvserv.NumbersOnly)]],
      vaccinationIsDone: ['', Validators.required],
      AgeProof: ['', [Validators.required]],
      //start of Proposer
      propnameTitle: [''],
      propfirstName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      propmiddleName: ['', [Validators.pattern(this.cvserv.HumanName)]],
      proplastName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      propfullName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      proppanNumber: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      propdob: ['', [Validators.required, Validators.pattern(this.cvserv.Date)]],
      propgender: ['', [Validators.required]],
      propfName: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      propmName: ['', [Validators.pattern(this.cvserv.HumanName)]],
      propeducation: ['', [Validators.required]],
      propyear_Semester_Std: [''],
      propotherDetails: [''],
      propduration_course: [''],
      propcourse_name: [''],
      prophighestEducation: ['', [Validators.required]],
      propcollegelName: ['', [Validators.required]],
      propisStudent: ['', null],
      propclassStudied: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      propparentInsuranceCoverd: ['', null],
      propparentAnnualIncome: ['', null],
      propsibInsuCover: ['', null],
      propmaritalStatus: ['', null],
      propnationality: ['', Validators.required],
      propaddressline1: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      propaddressline2: ['', [Validators.required, Validators.pattern(this.cvserv.Address)]],
      propaddressline3: ['', [Validators.pattern(this.cvserv.Address)]],
      propcorr_addressline1: ['', [Validators.pattern(this.cvserv.Address)]],
      propcorr_addressline2: ['', [Validators.pattern(this.cvserv.Address)]],
      propcorr_addressline3: ['', Validators.pattern(this.cvserv.Address)],
      propcontact: ['', Validators.pattern(this.cvserv.Phone)],
      propofficePhone: ['', Validators.pattern(this.cvserv.Phone)],
      propmobile: ['', [Validators.required, Validators.pattern(this.cvserv.Phone)]],
      propemailId: ['', [Validators.required, Validators.pattern(this.cvserv.Email)]],
      propfacebookId: ['', Validators.pattern(this.cvserv.Email)],
      proplinkedInId: ['', Validators.pattern(this.cvserv.Email)],
      propequalPermentRecidencial: ['', [Validators.required]],
      // address: ['', Validators.pattern(this.cvserv.Address)],
      propcity: ['', [Validators.required, Validators.pattern(this.cvserv.HumanName)]],
      propstate: ['', [Validators.required]],
      proppincode: ['', [Validators.required, Validators.pattern(this.cvserv.Pincode)]],
      propcorr_city: ['', [Validators.pattern(this.cvserv.HumanName)]],
      propcorr_state: ['', null],
      proppropcorr_pincode: ['', [Validators.pattern(this.cvserv.Pincode)]],
      proppropcorr_Address_Value: [''],
      proppropAgeProof: ['', [Validators.required]],
      LAPropserSame: [''],
      propAgeProof: [''],
      //End of proposer
      nomineeName: ['', Validators.pattern(this.cvserv.HumanName)],
      nomineedob: ['', Validators.pattern(this.cvserv.Date)],
      relWithNomini: ['', null],
      nameOfAppointee: ['', Validators.pattern(this.cvserv.HumanName)],
      relOfAppointee: ['', Validators.pattern(this.cvserv.HumanName)],
      nominationPercentage: ['', null]
    });
    this.employmentGroup = this.fb.group({
      employmentType: ['', [Validators.required]],
      employerName: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      natureOfDuty: ['', [Validators.required]],
      workExperienceInYears: ['', [Validators.required]],
      workExperienceInMonths: ['', [Validators.required]],
      addressOfEmployer: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      numberOfEmployees: ['', [Validators.required]],
      annualIncome: ['', [Validators.required]],
      //proposer employment details
      propemploymentType: ['', [Validators.required]],
      propemployerName: ['', [Validators.required]],
      propdesignation: ['', [Validators.required]],
      propnatureOfDuty: ['', [Validators.required]],
      propworkExperienceInYears: ['', [Validators.required]],
      propworkExperienceInMonths: ['', [Validators.required]],
      propaddressOfEmployer: ['', [Validators.required]],
      propoccupation: ['', [Validators.required]],
      propnumberOfEmployees: ['', [Validators.required]],
      propannualIncome: ['', [Validators.required]]

    });
    this.historyGroup = this.fb.group({
      history: ['', null],
    });
    this.medicalGroup = this.fb.group({
      isAlcoholic: ['no', null],
      typeOfAddiction: ['', null],
      isTobbaco: ['', null],
      isAlcohol: ['', null],
      isAnyNarcotics: ['', null],
      tobaccoQuantity: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      tobaccoSinceYears: ['', null],
      alcoholeQuantityPerDay: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      alcoholeSinceYears: ['', null],
      narcoticsQuantity: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      narcoticsSinceYears: ['', null],
      isStoppedConsumed: ['no', null],
      isAnyMedication: ['no', null],
      diseaseDiagnosed: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      dateOfDiagnosis: ['', Validators.pattern(this.cvserv.Date)],
      treatmentGiven: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      detailsOfMedicines: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      doctorName: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      followUpDate: ['', Validators.pattern(this.cvserv.Date)],
      anyComplications: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      addRemark: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      isReceivedTreatment: ['no', null],
      isUndergoneHospitalisation: ['no', null],
      isOtherHealthRelatedInformation: ['no', null],
      OtherHealthRelatedInformation: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      addRemark2: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      durationSinceStopped: ['', null],
      sinceNoDays: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      reasonForDisc: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],
      diseaseList: ['', null],
      arePregnent: ['no', null],
      gynaecologicalComplications: ['no', null],
    });
    this.taxOtherGroup = this.fb.group({
      taxOther: ['', null],
    });
    this.childGroup = this.fb.group({
      nameTitleChild: ['', null],
      childfullName: ['', Validators.pattern(this.cvserv.HumanName)],
      childGender: ['', null],
      childDOB: ['', Validators.pattern(this.cvserv.Date)],
      maritalStatusChild: ['', null],
      childFName: ['', Validators.pattern(this.cvserv.HumanName)],
      ChildMName: ['', Validators.pattern(this.cvserv.HumanName)],
      childNationality: ['', null],
      educationChild: ['', null],
      isStudentChild: ['', null],
      classStudiedChild: ['', Validators.pattern(this.cvserv.NumbersOnly)],

      parentInsuranceCoverdChild: ['', null],
      parentAnnualIncomeChild: ['', null],
      sibInsuCoverChild: ['', null],
      contactChild: ['', Validators.pattern(this.cvserv.Phone)],
      emailIdChild: ['', Validators.pattern(this.cvserv.Email)],
      address1: ['', Validators.pattern(this.cvserv.Address)],
      address2: ['', Validators.pattern(this.cvserv.Address)],
      childPincode: ['', Validators.pattern(this.cvserv.Pincode)],
      childCity: ['', null],
      childState: ['', null],
      isAddressSame: ['', null],
      isChildQue1: ['no', null],
      isChildQue2: ['no', null],
      isChildQue3: ['no', null],
      isChildQue4: ['no', null],
      isChildQue5: ['no', null],
      isChildQue6: ['no', null],
      isChildQue7: ['no', null],
      isChildQue8: ['no', null],
      isChildQue9: ['no', null],
      isChildQue10: ['no', null],
      addRemark1: ['', Validators.pattern(this.cvserv.AlphaNumbersOnly)],

      physicianName: ['', Validators.pattern(this.cvserv.HumanName)],
      physicianAddress: ['', Validators.pattern(this.cvserv.Address)],
      physicianContactDetails: ['', Validators.pattern(this.cvserv.Phone)],
      HeightInFeet: ['', Validators.pattern(this.cvserv.NumbersOnly)],
      HeightInCm: ['cms', null],
      WeightInkgs: ['', null],
    });

    // to bind states   
    this.service.getProduct().subscribe(res => {
      console.log(res.default.states);
      console.log("====================================");
      console.log(res);
      this.stateList = res.default.states;
    });
    this.BindQualificationList();
    this.personalGroup.controls["LAPropserSame"].setValue("Yes");
    this.isLAproposerSame = false;
    this.experienceList("years");
    this.experienceList("months");
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    this.currentPos = window.pageYOffset;
    let currentPos1 = window.scrollY
  }

  myFunction(elm, type) {
    let classListElm1 = elm.target;
    var matches1 = document.getElementsByClassName('inner-box');
    let innerBox = this.closest1(classListElm1, '.inner-box');
    let proposalDetails = this.closest1(classListElm1, '.proposal-details');

    if (type == "visited") {
      // console.log(111)
      innerBox.classList.remove("skipped");
      innerBox.classList.add("visited");

      var matches1 = document.getElementsByClassName('inner-box');

      for (var k = 0; k < matches1.length - 1; k++) {
        matches1[k].classList.remove('active');
      }


      if (innerBox.nextElementSibling != null && innerBox.nextElementSibling.classList[0] === 'inner-box') {
        innerBox.nextElementSibling.classList.add("active");
        console.log(this.childElement(innerBox.nextElementSibling, "mat-input"));
      }
      else if (proposalDetails.nextElementSibling != null) {
        console.log(proposalDetails.nextElementSibling.children[0].children[0]);
        proposalDetails.nextElementSibling.children[0].children[0].classList.add("active");
      }
      innerBox.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    }

  }

  closest1(el, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
      if (typeof document.body[fn] == 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    })

    var parent;

    // traverse parents
    while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
        // console.log(parent)
        return parent;
      }

      el = parent;
      // console.log(el)
    }

    return null;
  }

  childElement(el, selector) {

    var matchesFn;
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
      if (typeof document.body[fn] == 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    })

    var child;
    while (el) {
      child = el.firstElementChild;

      if (child && child.className.indexOf(selector) != -1) {
        console.log(child);
        child.focus();
      }
      el = child;
    }

    return null;
  }


  getScrollVal(ev) {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let y = window.scrollY;

    if (isMobile) {
      if (ev.target.scrollTop > 100) {
        this.isStickyProgress = false;
      } else {
        this.isStickyProgress = true;
      }
    }

  }
  // 2nd function
  myFunction1(elm) {

    let classListElm = elm.target;
    var matches = document.getElementsByClassName('inner-box');
    let innerBox = this.closest1(classListElm, '.inner-box');
    if (innerBox.classList.contains("active") == false) {
      for (var i = 0; i < matches.length; i++) {
        matches[i].classList.remove('active');
      }
      // innerBox.classList.remove("skipped");
      innerBox.classList.remove("visited");
      innerBox.classList.add("active");
    }
  }

  getSelectVal(e) {

  }

  onValChange(e) {
    if (this.personalGroup.value.policy == 'no') {
      this.stepperVal = 6;
    } else {
      this.stepperVal = 5;
    }
  }

  getProgress(val) {
    this.valueProgress = 20;
    let progressPer = 100 / this.stepperVal;
    this.valueProgress = progressPer * (val + 1);
  }

  getSave(val) {

    this.getProgress(val);
    if (val == 1) {
      this.selectedItem = 'item2';
      let el = document.getElementById('employment');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      if (this.personalGroup.valid) {
        this.isComplete1 = 'complited';
      } else {
        this.isComplete1 = "incomplete";
      }
    }

    else if (val == 2) {

      this.selectedItem = 'item3';
      let el = document.getElementById('history');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

      if (this.employmentGroup.valid) {
        this.isComplete2 = 'complited';
      } else {
        this.isComplete2 = "incomplete";
      }

    }
    else if (val == 3) {

      this.selectedItem = 'item4';
      let el = document.getElementById('medical');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

      if (this.historyGroup.valid) {
        this.isComplete3 = 'complited';
      } else {
        this.isComplete3 = "incomplete";
      }

    }
    else if (val == 4) {

      this.selectedItem = 'item5';
      let el = document.getElementById('taxOther');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

      if (this.medicalGroup.valid) {
        this.isComplete4 = 'complited';
      } else {
        this.isComplete4 = "incomplete";
      }

    }
    else if (val == 5) {

      if (this.personalGroup.value.policy == 'no') {
        this.selectedItem = 'item6';
        let el = document.getElementById('child');
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }


      if (this.taxOtherGroup.valid) {
        this.isComplete5 = 'complited';
      } else {
        this.isComplete5 = "incomplete";
      }

    }

    else if (val == 6) {
      if (this.childGroup.valid) {
        this.isComplete6 = 'complited';
        // this.valueProgress= 100;
      } else {
        this.isComplete6 = "incomplete";
      }
    }
  }

  checkForStudent(value: any, typeLAorPROP: string) {
    console.log(value);
    if (typeLAorPROP == "LA") {
      if (value === "Student" && this.isLesThan_5_Age) {
        this.isStudentFlag = true;
        this.removeRequiredValidation('duration_course');
        this.removeRequiredValidation('course_name');
        this.removeRequiredValidation('year_Semester_Std');
      }
      else if (value === "Student" && !this.isLesThan_5_Age) {
        this.isStudentFlag = true;
        this.addRequiredValidation('duration_course', null);
        this.addRequiredValidation('course_name', null);
        this.addRequiredValidation('year_Semester_Std', null);
      } else {
        this.isStudentFlag = false;
        this.removeRequiredValidation('duration_course');
        this.removeRequiredValidation('course_name');
        this.removeRequiredValidation('year_Semester_Std');
      }
      if (value === "Others") {
        this.isOtherEducation = true;
        this.addRequiredValidation('otherDetails', null);
      }
      else {
        this.isOtherEducation = false;
        this.removeRequiredValidation('otherDetails');
      }
    }
    if (typeLAorPROP == "PROP") {
      if (value === "Student") {
        this.isPropStudentFlag = true;
        this.addRequiredValidation('propduration_course', null);
        this.addRequiredValidation('propcourse_name', null);
        this.addRequiredValidation('propyear_Semester_Std', null);
      } else {
        this.isPropStudentFlag = false;
        this.removeRequiredValidation('propduration_course');
        this.removeRequiredValidation('propcourse_name');
        this.removeRequiredValidation('propyear_Semester_Std');
      }
      if (value === "Others") {
        this.isPropOtherEducation = true;
        this.addRequiredValidation('propotherDetails', null);
      }
      else {
        this.isPropOtherEducation = false;
        this.removeRequiredValidation('propotherDetails');
      }
    }
  }

  checkForAddress(value: any, typeLAorPROP: string) {
    console.log(value);
    if (typeLAorPROP == "LA") {
      if (value === "Yes") {
        this.isequalPerment_CurrentAddr = true;

        this.removeRequiredValidation('corr_addressline1');
        this.removeRequiredValidation('corr_addressline2');
        this.removeRequiredValidation('corr_city');
        this.removeRequiredValidation('corr_state');
        this.removeRequiredValidation('corr_pincode');
        this.removeRequiredValidation('corr_Address_Value');
      } else {
        this.isequalPerment_CurrentAddr = false;
        this.addRequiredValidation('corr_addressline1', null);
        this.addRequiredValidation('corr_addressline2', null);
        this.addRequiredValidation('corr_city', null);
        this.addRequiredValidation('corr_state', null);
        this.addRequiredValidation('corr_pincode', null);
        this.addRequiredValidation('corr_Address_Value', null);
      }
    }
    if (typeLAorPROP == "PROP") {
      if (value === "Yes") {
        this.isPropequalPerment_CurrentAddr = true;
        this.removeRequiredValidation('propcorr_addressline1');
        this.removeRequiredValidation('propcorr_addressline2');
        this.removeRequiredValidation('propcorr_city');
        this.removeRequiredValidation('propcorr_state');
        this.removeRequiredValidation('propcorr_pincode');
        this.removeRequiredValidation('propcorr_Address_Value');
      } else {
        this.isPropequalPerment_CurrentAddr = false;
        this.addRequiredValidation('propcorr_addressline1', null);
        this.addRequiredValidation('propcorr_addressline2', null);
        this.addRequiredValidation('propcorr_city', null);
        this.addRequiredValidation('propcorr_state', null);
        this.addRequiredValidation('propcorr_pincode', null);
        this.addRequiredValidation('propcorr_Address_Value', null);
      }
    }
  }

  checkForMinor(value: any) {
    console.log(value);
    if (value === "Less than 5") {
      this.isMinor = true;
      this.isLesThan_5_Age = true;
      this.addRequiredValidation('weightOfMinor', null);
      this.addRequiredValidation('vaccinationIsDone', null);
    }
    else if (value === "Between 5 and 18") {
      this.isMinor = true;
      this.isLesThan_5_Age = false;
      this.addRequiredValidation('education', null);
    }
    else {
      this.isMinor = false;
      this.isLesThan_5_Age = false;

      this.addRequiredValidation('panNumber', null);
      this.addRequiredValidation('education', null);
      this.addRequiredValidation('highestEducation', null);
      this.addRequiredValidation('collegelName', null);
      this.addRequiredValidation('addressline1', null);
      this.addRequiredValidation('addressline2', null);
      this.addRequiredValidation('mobile', null);
      this.addRequiredValidation('emailId', null);
      this.addRequiredValidation('equalPermentRecidencial', null);
      this.addRequiredValidation('city', null);
      this.addRequiredValidation('state', null);
      this.addRequiredValidation('pincode', null);
      this.removeRequiredValidation('weightOfMinor');
      this.removeRequiredValidation('vaccinationIsDone');
    }
    if (this.isMinor) {
      this.removeRequiredValidation('panNumber');
      this.removeRequiredValidation('education');
      this.removeRequiredValidation('year_Semester_Std');
      this.removeRequiredValidation('otherDetails');
      this.removeRequiredValidation('duration_course');
      this.removeRequiredValidation('course_name');
      this.removeRequiredValidation('highestEducation');
      this.removeRequiredValidation('collegelName');
      this.removeRequiredValidation('classStudied');
      this.removeRequiredValidation('parentInsuranceCoverd');
      this.removeRequiredValidation('parentAnnualIncome');
      this.removeRequiredValidation('sibInsuCover');
      this.removeRequiredValidation('addressline1');
      this.removeRequiredValidation('addressline2');
      this.removeRequiredValidation('corr_addressline1');
      this.removeRequiredValidation('corr_addressline2');
      this.removeRequiredValidation('mobile');
      this.removeRequiredValidation('emailId');
      this.removeRequiredValidation('equalPermentRecidencial');
      this.removeRequiredValidation('city');
      this.removeRequiredValidation('state');
      this.removeRequiredValidation('pincode');
      this.removeRequiredValidation('corr_city');
      this.removeRequiredValidation('corr_state');
      this.removeRequiredValidation('corr_pincode');
      this.removeRequiredValidation('corr_Address_Value');
      this.removeEmploymentRequiredValidation('employmentType');
      this.removeEmploymentRequiredValidation('employerName');
      this.removeEmploymentRequiredValidation('designation');
      this.removeEmploymentRequiredValidation('natureOfDuty');
      this.removeEmploymentRequiredValidation('workExperienceInYears');
      this.removeEmploymentRequiredValidation('workExperienceInMonths');
      this.removeEmploymentRequiredValidation('addressOfEmployer');
      this.removeEmploymentRequiredValidation('occupation');
      this.removeEmploymentRequiredValidation('numberOfEmployees');
      this.removeEmploymentRequiredValidation('annualIncome');
    }
    else {
      this.addEmploymentRequiredValidation('employmentType', null);
      this.addEmploymentRequiredValidation('employerName', null);
      this.addEmploymentRequiredValidation('designation', null);
      this.addEmploymentRequiredValidation('natureOfDuty', null);
      this.addEmploymentRequiredValidation('workExperienceInYears', null);
      this.addEmploymentRequiredValidation('workExperienceInMonths', null);
      this.addEmploymentRequiredValidation('addressOfEmployer', null);
      this.addEmploymentRequiredValidation('occupation', null);
      this.addEmploymentRequiredValidation('numberOfEmployees', null);
      this.addEmploymentRequiredValidation('annualIncome', null);
    }
    this.BindQualificationList();
  }

  BindQualificationList() {
    if (!this.isMinor) {
      this.qualificationList = [{ id: "Post Graduate", value: "postgraduate" },
      { id: "Graduate", value: "Graduate" },
      { id: "12th Passed", value: "12th" },
      { id: "10th Passed", value: "10th" },
      { id: "Below 10th", value: "below10th" },
      { id: "Professional", value: "Professional" },
      { id: "Student", value: "Student" },
      { id: "Others", value: "Others" }];
    }
    else {
      this.qualificationList = [
        { id: "Student", value: "Student" },
        { id: "Others", value: "Others" }];
    }
  }

  addRequiredValidation(id: string, funct: ValidatorFn) {
    if (funct != null) {
      this.personalGroup.get(id).setValidators([Validators.required, funct]);
    }
    else {
      this.personalGroup.get(id).setValidators([Validators.required]);
    }
    this.personalGroup.get(id).updateValueAndValidity();
  }
  removeRequiredValidation(id: string) {
    this.personalGroup.get(id).setValidators(null);
    this.personalGroup.get(id).updateValueAndValidity();
  }
  addEmploymentRequiredValidation(id: string, funct: ValidatorFn) {
    if (funct != null) {
      this.employmentGroup.get(id).setValidators([Validators.required, funct]);
    }
    else {
      this.employmentGroup.get(id).setValidators([Validators.required]);
    }
    this.employmentGroup.get(id).updateValueAndValidity();
  }
  removeEmploymentRequiredValidation(id: string) {
    this.employmentGroup.get(id).setValidators(null);
    this.employmentGroup.get(id).updateValueAndValidity();
  }

  checkFormValidOrNot() {
    Object.keys(this.personalGroup.controls).forEach(key => {
      const err: ValidationErrors = this.personalGroup.get(key).errors;

      if (err != null) {
        Object.keys(err).forEach(keyError => {
          console.log("Key Control - " + key + " , Key Error: " + keyError + " , error value: " + err[keyError]);
        });
      }
    });
    let formGroup: FormGroup = this.personalGroup as FormGroup;

  }
  checkLAProposerSame(value: string) {
    console.log(value);
    if (value == "Yes") {
      this.isLAproposerSame = false;
      this.addProposerValidation();
    } else {
      this.isLAproposerSame = true;
      this.removeProposerValidation();
    }
  }
  removeProposerValidation() {
    //Remove Personal details validation
    this.removeRequiredValidation('propfirstName');
    this.removeRequiredValidation('proplastName');
    this.removeRequiredValidation('propfullName');
    this.removeRequiredValidation('proppanNumber');
    this.removeRequiredValidation('propdob');
    this.removeRequiredValidation('propgender');
    this.removeRequiredValidation('propfName');
    this.removeRequiredValidation('propmName');
    this.removeRequiredValidation('propeducation');
    this.removeRequiredValidation('prophighestEducation');
    this.removeRequiredValidation('propcollegelName');
    this.removeRequiredValidation('propnationality');
    this.removeRequiredValidation('propaddressline1');
    this.removeRequiredValidation('propaddressline2');
    this.removeRequiredValidation('propmobile');
    this.removeRequiredValidation('propemailId');
    this.removeRequiredValidation('propequalPermentRecidencial');
    this.removeRequiredValidation('propcity');
    this.removeRequiredValidation('propstate');
    this.removeRequiredValidation('proppincode');
    this.removeRequiredValidation('proppropAgeProof');
    //Removal of validation for Employment details
    this.removeEmploymentRequiredValidation('propemploymentType');
    this.removeEmploymentRequiredValidation('propemployerName');
    this.removeEmploymentRequiredValidation('propdesignation');
    this.removeEmploymentRequiredValidation('propnatureOfDuty');
    this.removeEmploymentRequiredValidation('propworkExperienceInYears');
    this.removeEmploymentRequiredValidation('propworkExperienceInMonths');
    this.removeEmploymentRequiredValidation('propaddressOfEmployer');
    this.removeEmploymentRequiredValidation('propoccupation');
    this.removeEmploymentRequiredValidation('propnumberOfEmployees');
    this.removeEmploymentRequiredValidation('propannualIncome');
  }
  addProposerValidation() {
    //Add Validation to Personal Form details
    this.addRequiredValidation('propfirstName', null);
    this.addRequiredValidation('proplastName', null);
    this.addRequiredValidation('propfullName', null);
    this.addRequiredValidation('proppanNumber', null);
    this.addRequiredValidation('propdob', null);
    this.addRequiredValidation('propgender', null);
    this.addRequiredValidation('propfName', null);
    this.addRequiredValidation('propmName', null);
    this.addRequiredValidation('propeducation', null);
    this.addRequiredValidation('prophighestEducation', null);
    this.addRequiredValidation('propcollegelName', null);
    this.addRequiredValidation('propnationality', null);
    this.addRequiredValidation('propaddressline1', null);
    this.addRequiredValidation('propaddressline2', null);
    this.addRequiredValidation('propmobile', null);
    this.addRequiredValidation('propemailId', null);
    this.addRequiredValidation('propequalPermentRecidencial', null);
    this.addRequiredValidation('propcity', null);
    this.addRequiredValidation('propstate', null);
    this.addRequiredValidation('proppincode', null);
    this.addRequiredValidation('proppropAgeProof', null);

    this.addEmploymentRequiredValidation('propemploymentType', null);
    this.addEmploymentRequiredValidation('propemployerName', null);
    this.addEmploymentRequiredValidation('propdesignation', null);
    this.addEmploymentRequiredValidation('propnatureOfDuty', null);
    this.addEmploymentRequiredValidation('propworkExperienceInYears', null);
    this.addEmploymentRequiredValidation('propworkExperienceInMonths', null);
    this.addEmploymentRequiredValidation('propaddressOfEmployer', null);
    this.addEmploymentRequiredValidation('propoccupation', null);
    this.addEmploymentRequiredValidation('propnumberOfEmployees', null);
    this.addEmploymentRequiredValidation('propannualIncome', null);
  }

  experienceList(type: string) {
    let i = 0;
    if (type == "years") {
      for (i = 0; i < 60; i++) {
        this.experienceYearList.push({ 'id': i, 'value': i + " years" });
      }
    }
    if (type == "months") {
      for (i = 0; i < 12; i++) {
        this.experienceMonthList.push({ 'id': i, 'value': i + " months" });
      }
    }
    console.log(this.experienceYearList);
  }
}
