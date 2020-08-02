import { Component, OnInit } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recommended-add-ons',
  templateUrl: './recommended-add-ons.component.html',
  styleUrls: ['./recommended-add-ons.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class RecommendedAddOnsComponent implements OnInit {
  showMore=false;
  isMobile=false;
  isWeb=true;
  
  recAddonSelect=new FormControl('op1', [Validators.required]);
  
  constructor(public dialogRef: MatDialogRef<RecommendedAddOnsComponent>, private router: Router) { }

  ngOnInit() {
    
    if(window.innerWidth<990){
      this.isMobile=true;
      this.isWeb=false;
    }
    else{
      this.isWeb=true;
      this.isMobile=false;
    }

  }

  closeDialog(){ 
    this.dialogRef.close(); 
  }

  getMore(){
    this.showMore=true;
  }
  getLess(){
    this.showMore=false;
  }

  getSummery(){
    this.closeDialog();
    this.router.navigate(['/summary']);
  }

}
