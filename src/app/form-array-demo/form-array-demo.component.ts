import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, startWith, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CIty } from '../personal-detail';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {
  public form: FormGroup;
  public placeList: FormArray;
  options: CIty[] = [{id:"1",name:'mumbai'}, {id:"2",name:'vashi'}, {id:"3",name:'panvel'}, {id:"4",name:'vile parle'}, {id:"5",name:'bandra'}, {id:"6",name:'mahim'}, {id:"7",name:'wadala'}, {id:"8",name:'govandi'}, {id:"9",name:'chembur'}];
  options2:Observable<CIty[]>[]=[];
  options3:Observable<CIty[]>;
  // returns all form groups under contacts
  get contactFormGroup() {

    return this.form.get('places') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      places: this.fb.array([this.createContact()])
    });

    this.placeList = this.form.get('places') as FormArray;   
    this.ManageNameControl(this.placeList.length - 1);  
  }

  ManageNameControl(index: number) {
    this.options2[index] = this.contactFormGroup.at(index).get('toCity').valueChanges
      .pipe(
      startWith<string | CIty>(''),//only use to display all the list value when component is loaded for the first time
      map(x => typeof x==='string' ?this._filter(x):this._filter(x.name) )
      );

  }
  private _filter(x: string): CIty[] {
    if(x!=undefined && x!=null)
    {
    console.log(x);
    const filterValue = x.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }else{
      return this.options;
    }
  }

  displayFn(city: CIty) {
    console.log(city);
    alert(city ? city.name : undefined);
    return city ? city.name : undefined;
  }
  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      fromCity: [null, Validators.compose([Validators.required])],
      toCity: [null, Validators.compose([Validators.required])],
      fromDate: [null, Validators.compose([Validators.required])],
      toDate: [null, Validators.compose([Validators.required])],
    });
  }

  // add a contact form group
  addContact() {
    this.placeList.push(this.createContact());
    this.ManageNameControl(this.placeList.length - 1);    
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.placeList.removeAt(index);
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.placeList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
  // changeInput(value: string) {
  //   console.log(value);
  //   console.log("================");
  //   console.log(this.options2.filter(x => x.value.toLowerCase().indexOf(value.toLowerCase())>-1));
  //   this.options = this.options2.filter(x => x.value.toLowerCase().indexOf(value.toLowerCase())>-1);

  // }
}
