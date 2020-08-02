import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudServiceService } from '../crud-service.service'
import { PersonalDetail } from '../personal-detail';
import { Router, OutletContext } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

familyDetailsForm:any[]=[];
  personalData: PersonalDetail;
  constructor(private fb: FormBuilder, private service: CrudServiceService, private router: Router,
    private SpinnerService: NgxSpinnerService) { }
  personalForm: FormGroup;
  public isCollapsed = false;
  public isCollapsedAddress = true;
  public isCollapsedContact = true;
  public isCollapsedEducation = true;
  public isCollapsedHeight = true;
  Feets: any[] = [1, 2, 3, 4, 5, 6, 7];
  Inches: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  ngOnInit(): void {
    this.personalForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        fatherName: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        addressLine3: ['', Validators.required],
        cityName: ['', Validators.required],
        stateName: ['', Validators.required],
        maritalStatus: ['', Validators.required],


        emailId: ['', Validators.required],
        mobile: ['', Validators.required],
        phone: ['', Validators.required],
        facebookId: [''],
        corporateId: [''],
        education: ['', Validators.required],
        collegeName: ['', Validators.required],
        highestEducation: ['', Validators.required],
        heightInFeets: ['', Validators.required],
        heightInInches: ['', Validators.required],
        weight: ['', Validators.required]
      }
    );
    this.BindDetailsByTransactionId();
    console.log("ngOnInIt--------"+this.service.FlagforEmpType);
  }

  
  ngAfterContentChecked() {

    console.log("=ngAfterContentChecked==" + this.service.FlagforEmpType);
  }
  ngOnChanges() {
    console.log("=ngOnChanges==" + this.service.FlagforEmpType);
  }
  ngDoCheck() {
    console.log("=ngDoCheck==" + this.service.FlagforEmpType);
  }
  ngAfterContentInit() {
    console.log("=ngAfterContentInit==" + this.service.FlagforEmpType);
  }
  ngAfterViewInit() {
    console.log("=ngAfterViewInit==" + this.service.FlagforEmpType);
  }
  ngAfterViewChecked() {
    console.log("=ngAfterViewChecked==" + this.service.FlagforEmpType);
  }
  ngOnDestroy() {
    alert("destroyed");
    console.log("=ngOnDestroy==" + this.service.FlagforEmpType);
  }

  BindDetailsByTransactionId() {
    this.SpinnerService.show();
    this.service.getById("12201990000").subscribe((data: PersonalDetail) => {
      this.personalData = data;
      console.log(data);
      this.personalForm.patchValue({
        firstName: this.personalData.firstName,
        middleName: this.personalData.middleName,
        lastName: this.personalData.lastName,
        fatherName: this.personalData.fatherName,
        addressLine1: this.personalData.addressLine1,
        addressLine2: this.personalData.addressLine2,
        addressLine3: this.personalData.addressLine3,
        cityName: this.personalData.cityName,
        stateName: this.personalData.stateName,
        maritalStatus: this.personalData.maritalStatus == "" ? "Single" : this.personalData.maritalStatus,
        emailId: this.personalData.emailId,
        mobile: this.personalData.mobile,
        phone: this.personalData.phone,
        facebookId: this.personalData.facebookId,
        corporateId: this.personalData.corporateId,
        education: this.personalData.education,
        collegeName: this.personalData.collegeName,
        highestEducation: this.personalData.highestEducation,
        heightInFeets: this.personalData.heightInFeets,
        heightInInches: this.personalData.heightInInches,
        weight: this.personalData.weight

      });
      this.SpinnerService.hide();
    });
  }

  SavePersonalDetails() {
    this.SpinnerService.show();
    this.service.update(this.personalForm.value).subscribe((data) => {
      alert('Details Saved Sucessfully...');
      this.SpinnerService.hide();
      this.router.navigate(['FileUpload']);
    });
  }
SaveFamilyDetails(val:FormGroup)
{
  //console.log(val);
  this.familyDetailsForm.push(
    {"relation":val.get("relationShip").value,
    "health":val.get("healthSstatus").value,
    "age":val.get("age").value}    
  );  
  val.get("relationShip").setValue('');
  val.get("healthSstatus").setValue('');
  val.get("age").setValue('');
  console.log(this.familyDetailsForm);
}
removefamilydetails(i: number,relation:string)
{
  this.familyDetailsForm=this.familyDetailsForm.filter(x=>x.relation!==relation);
}
}
