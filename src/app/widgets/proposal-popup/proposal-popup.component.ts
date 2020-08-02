import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-popup',
  templateUrl: './proposal-popup.component.html',
  styleUrls: ['./proposal-popup.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class ProposalPopupComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ProposalPopupComponent>, private router: Router) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  postProposal() {
    this.closeDialog();
    this.router.navigateByUrl('post-proposal');
  }

}
