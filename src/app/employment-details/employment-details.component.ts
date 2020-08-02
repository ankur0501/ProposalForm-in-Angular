import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudServiceService } from '../crud-service.service';
import { EmploymentDetails } from '../personal-detail';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  title = 'appBootstrap';
  employmentForm: FormGroup;
  closeResult: string;
  EmpType: any[] = [

    { id: "1", type: "Salaried" },
    { id: "2", type: "Retired" },
    { id: "3", type: "Agriculture" }
  ];
  years: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  months: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor(private modalService: NgbModal, private fb: FormBuilder, private serv: CrudServiceService,private SpinnerService:NgxSpinnerService) { }
  ngOnInit(): void {
    this.employmentForm = this.fb.group({
      employmentType: ['', Validators.required],
      compName: [''],
      annualIncome: ['', Validators.required],
      designation: [''],
      monthExperience: [''],
      yearExperience: ['']
    });
    this.BindEmploymentDetails();
    this.SetValidationEmpType();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'Employment Details' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SaveEmploymentDetails() {
    console.log(this.employmentForm.value);
    this.SpinnerService.show();  
    this.serv.updateEmploymentDetails(this.employmentForm.value).subscribe((x)=>{
      console.log("Saving employment details");
      console.log(x);
      this.serv.FlagforEmpType="Y";
      this.SpinnerService.hide();  
    })
  }
  onSelection(value: string) {
    console.log(value);
  }
  BindEmploymentDetails() {
    this.SpinnerService.show();  
    this.serv.getEmploymentDetails("12201990000").subscribe((x: EmploymentDetails) => {
      console.log(x);
      this.employmentForm.setValue({
        annualIncome: x.annualIncome,
        yearExperience: x.yearExperience,
        monthExperience: x.monthExperience,
        compName: x.compName,
        designation: x.designation,
        employmentType:x.employmentType
      });
      this.SpinnerService.hide();  
    });
  }

  SetValidationEmpType()
  {
    this.employmentForm.get('employmentType').valueChanges.subscribe(x=>{
      console.log("changed value is "+x);
      if(x==='1')
      {
        this.employmentForm.get('yearExperience').setValidators([Validators.required]);
        this.employmentForm.get('monthExperience').setValidators([Validators.required]);
        this.employmentForm.get('compName').setValidators([Validators.required]);
        this.employmentForm.get('designation').setValidators([Validators.required]);
      }
      else{
        this.employmentForm.get('yearExperience').setValidators(null);
        this.employmentForm.get('monthExperience').setValidators(null);
        this.employmentForm.get('compName').setValidators(null);
        this.employmentForm.get('designation').setValidators(null);
      }
      this.employmentForm.get('yearExperience').updateValueAndValidity();
      this.employmentForm.get('monthExperience').updateValueAndValidity();
      this.employmentForm.get('compName').updateValueAndValidity();
      this.employmentForm.get('designation').updateValueAndValidity();
    })
  }

}
