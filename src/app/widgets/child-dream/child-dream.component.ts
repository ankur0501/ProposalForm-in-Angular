import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-dream',
  templateUrl: './child-dream.component.html',
  styleUrls: ['./child-dream.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class ChildDreamComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChildDreamComponent>) { }
  ChildDream = new FormControl('option2', [Validators.required]);
  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
  getErrorMessageChildDream() {
    return this.ChildDream.hasError('required') ? 'Please select a value' : '';
  }
}
