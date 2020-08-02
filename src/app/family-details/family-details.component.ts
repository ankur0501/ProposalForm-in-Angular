import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  @Output() familydetails= new EventEmitter<FormGroup>();
  familyDetailsForm: FormGroup;
  realtion: any[] = [{ id: "1", rel: "Father" }, { id: "2", rel: "Mother" }, { id: "3", rel: "Spuse" }, { id: "4", rel: "Sister(s)" }, { id: "5", rel: "Brother(s)" }, { id: "6", rel: "Son(s)" }, { id: "7", rel: "Daughter(s)" }]
  Health: any[] = [{ status: "Healthy" }, { status: "Bed-ridden" }, { status: "Disabled" }, { status: "Suffering from major illness" }, { status: "Suffering from minor illness" }, { status: "Deceased" }];
  CauseofDeath: any[] = [{ cod: "Natural death" }, { cod: "Heart attack" }, { cod: "Accident" }, { cod: "Stroke" }, { cod: "Fever" }, { cod: "Alzheimer Disease" }];

  public isCollapsed = false;
  constructor(private fb: FormBuilder, private ngxspinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.familyDetailsForm = this.fb.group({
      relationShip: new FormControl('', [Validators.required]),
      healthSstatus: new FormControl('', [Validators.required]),
      age: new FormControl(''),
      ageAtDeath: new FormControl(''),
      deathCause: new FormControl('')
    });
    this.SetValidationEmpType();
  }
//First way of Validation
  Validations(event: any) {
    console.log(event);
    if (event == "Deceased") {
      console.log("If condition");
      this.familyDetailsForm.get("age").setValidators(null);
      this.familyDetailsForm.get("age").updateValueAndValidity();
      //this.familyDetailsForm.get("ageAtDeath").setValidators([Validators.required]);
      //this.familyDetailsForm.get("ageAtDeath").updateValueAndValidity();
      this.familyDetailsForm.get("deathCause").setValidators([Validators.required]);
      this.familyDetailsForm.get("deathCause").updateValueAndValidity();
    }
    else {
      this.familyDetailsForm.get("age").setValidators([Validators.required]);
      this.familyDetailsForm.get("age").updateValueAndValidity();
     // this.familyDetailsForm.get("ageAtDeath").setValidators(null);
      //this.familyDetailsForm.get("ageAtDeath").updateValueAndValidity();
      this.familyDetailsForm.get("deathCause").setValidators(null);
      this.familyDetailsForm.get("deathCause").updateValueAndValidity();
    }
  }
  //2nd way of validation during runtime condition
  SetValidationEmpType()
  {
    this.familyDetailsForm.get('healthSstatus').valueChanges.subscribe(x=>{
      console.log("changed value is "+x);
      if(x==='Deceased')
      {
        this.familyDetailsForm.get('ageAtDeath').setValidators([Validators.required]);
      }
      else{
        this.familyDetailsForm.get('ageAtDeath').setValidators(null);        
      }
      this.familyDetailsForm.get('ageAtDeath').updateValueAndValidity()
    })
  }
  PassFamilyDetailsToParent()
  {
    this.familydetails.emit(this.familyDetailsForm);
  }
}
