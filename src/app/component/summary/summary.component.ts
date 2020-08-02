import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetQuotePopupComponent } from '../../widgets/get-quote-popup/get-quote-popup.component';
import { SummaryTableComponent } from 'src/app/widgets/summary-table/summary-table.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css', '../common/ng-style/ng-style.component.css']
})
export class SummaryComponent implements OnInit {

  modeSelect = 'option2';
  showBenefitsBreakups = false;
  showBenefitsBreakupsWeb = false;
  toggle1 = false;

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
  }

  showBenefitsLess() {
    this.showBenefitsBreakups = false;
  }

  remove() {
    this.toggle1 = !this.toggle1;
  }

  editGetQuote() {
    this.dialog.open(GetQuotePopupComponent, {
      panelClass: 'get-quote-popup-container'
    });
  }

  getSummaryTable() {
    this.dialog.open(SummaryTableComponent, {
      panelClass: 'summary-table-container'
    });
  }
}
