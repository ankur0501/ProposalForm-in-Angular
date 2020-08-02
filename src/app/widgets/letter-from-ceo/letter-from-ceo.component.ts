import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-letter-from-ceo',
  templateUrl: './letter-from-ceo.component.html',
  styleUrls: ['./letter-from-ceo.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class LetterFromCeoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LetterFromCeoComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }
}
