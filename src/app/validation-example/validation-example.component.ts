import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {CustomFilterPipe} from '../custom-filter.pipe';
@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent implements OnInit {
  userForm:FormGroup;
usergender:string="";
username:string="";
  public genderList:string[]=["","Male","Female"];
  public maritalList:any[]=[{id:"Single",name:"Single"},{id:2,name:"Married"},{id:3,name:"Divorced"},{id:4,name:"Widow"}];
  public gender:string='';
  public marital:string='';
  public namePlaceholder:string='Enter Your Name';
  public emailIdPlaceholder:string='Enter Your Emaial';
  public profilePlaceholder:string='Enter Your Profile';
  constructor(private builder:FormBuilder){}
  
  ngOnInit(){
  this.userForm=this.builder.group({
    name: ['',Validators.required],
    email: new FormControl('',Validators.required),
     gender: new FormControl('',Validators.required),
      maritalstatus: new FormControl('',Validators.required),
    profile: this.builder.control('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)])
  });
  
  // this.apiService.getMaritalStatus().subscribe(
  //   (data)=>{
  //       console.log(data);
  //       this.maritalList = data;
  //               }
  //         );
  }
   //event handler for the select element's change event
    genderChangeHandler (event: any) {
      //update the ui
      console.log("===================="+event.target.value);
      this.gender = event.target.value;
    }
    maritalChangeHandler (event: any) {
      //update the ui
      console.log("===================="+event.target.value);
      this.marital = event.target.value+" "+event.target.options[event.target.options.selectedIndex].text;
    }
  
  saveUser(){
    if (this.userForm.dirty && this.userForm.valid) {
        alert(
          `Welcome to CHUTIYAPA with ANKUR \n
          Name: ${this.userForm.get('name').value} 
          \n Email: ${this.userForm.value.email}
          \n Profile: ${this.userForm.value.profile}
          \n Gender: ${this.gender}
          \n Marital: ${this.marital}
          `
        );
        //console.log(this.userForm.value.maritalstatus);
      }
  }
  
  get name(){
    return this.userForm.get('name');
  }
  
  get email(){
    return this.userForm.get('email');
  }
  
  get profile(){
    return this.userForm.get('profile');
  }
}
