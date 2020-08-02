import { Component, OnInit } from '@angular/core';
import { EditSummaryDetailsComponent } from 'src/app/widgets/edit-summary-details/edit-summary-details.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ulip-summary',
  templateUrl: './ulip-summary.component.html',
  styleUrls: ['./ulip-summary.component.css', '../../common/ng-style/ng-style.component.css']
})
export class UlipSummaryComponent implements OnInit {

  modeSelect = "option2";
  showBenefitsBreakups = false;
  showBenefitsBreakupsWeb = false;
  toggle1 = false;

  currentValue = new FormControl('NAV', [Validators.required]);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showBenefits() {
    this.showBenefitsBreakups = true;
  }

  showBenefitsDesktop() {
    this.showBenefitsBreakupsWeb = true;
  }

  closeTooltip() {
    this.showBenefitsBreakupsWeb = false;
    // alert(12);
  }


  showBenefitsLess() {
    this.showBenefitsBreakups = false;
  }

  remove() {
    this.toggle1 = !this.toggle1
  }

  editSummaryDetails() {
    this.dialog.open(EditSummaryDetailsComponent, {
      panelClass: 'edit-summary-details-container'
    });
  }


}
