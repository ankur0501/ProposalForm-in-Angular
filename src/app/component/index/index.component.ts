import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GetQuotePopupComponent } from '../../widgets/get-quote-popup/get-quote-popup.component';
import { ThankYouComponent } from '../../widgets/thank-you/thank-you.component';
import { RecommendedAddOnsComponent } from '../../widgets/recommended-add-ons/recommended-add-ons.component';
import { ScheduleCallComponent } from '../../widgets/schedule-call/schedule-call.component';
import { ChildDreamComponent } from 'src/app/widgets/child-dream/child-dream.component';
import { FundAllocatedComponent } from 'src/app/widgets/fund-allocated/fund-allocated.component';
import { RisingStarComponent } from 'src/app/widgets/rising-star/rising-star.component';
import { EditGrowMoneyComponent } from 'src/app/widgets/edit-grow-money/edit-grow-money.component';
import { EditChildFutureComponent } from 'src/app/widgets/edit-child-future/edit-child-future.component';
import { EditRetirementComponent } from 'src/app/widgets/edit-retirement/edit-retirement.component';
import { EditSummaryDetailsComponent } from 'src/app/widgets/edit-summary-details/edit-summary-details.component';
import { FundPerformanceComponent } from 'src/app/widgets/fund-performance/fund-performance.component';
import { SummaryTableComponent } from 'src/app/widgets/summary-table/summary-table.component';
import { ProposalPopupComponent } from 'src/app/widgets/proposal-popup/proposal-popup.component';
import { ReportClaimSubmitComponent } from 'src/app/widgets/report-claim-submit/report-claim-submit.component';
import { LetterFromCeoComponent } from 'src/app/widgets/letter-from-ceo/letter-from-ceo.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../common/ng-style/ng-style.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  thankYouPopup() {
    this.dialog.open(ThankYouComponent, {
      panelClass: 'thankyou-popup-container'
    });
  }

  editGetQuote() {
    this.dialog.open(GetQuotePopupComponent, {
      panelClass: 'get-quote-popup-container'
    });
  }

  getAddOns() {
    this.dialog.open(RecommendedAddOnsComponent, {
      panelClass: 'add-ons-popup-container'
    });
  }

  getScheduleCall() {
    this.dialog.open(ScheduleCallComponent, {
      panelClass: 'schedule-call-popup-container'
    });
  }

  getChildDream() {
    this.dialog.open(ChildDreamComponent, {
      panelClass: 'child-dream-container'
    });
  }

  getFundAllocated() {
    this.dialog.open(FundAllocatedComponent, {
      panelClass: 'fund-allocated-container'
    });
  }

  getRisingStar() {
    this.dialog.open(RisingStarComponent, {
      panelClass: 'rising-star-container'
    });
  }

  getGrowMoney() {
    this.dialog.open(EditGrowMoneyComponent, {
      panelClass: 'edit-grow-money-container'
    });
  }

  getChildFuture() {
    this.dialog.open(EditChildFutureComponent, {
      panelClass: 'edit-child-future-container'
    });
  }

  getRetirement() {
    this.dialog.open(EditRetirementComponent, {
      panelClass: 'edit-retirement-container'
    });
  }

  editSummaryDetails() {
    this.dialog.open(EditSummaryDetailsComponent, {
      panelClass: 'edit-summary-details-container'
    });
  }

  fundPerformance() {
    this.dialog.open(FundPerformanceComponent, {
      panelClass: 'fund-performance-container'
    });
  }

  getSummaryTable() {
    this.dialog.open(SummaryTableComponent, {
      panelClass: 'summary-table-container'
    });
  }

  getProposal() {
    this.dialog.open(ProposalPopupComponent, {
      panelClass: 'proposal-container'
    });
  }

  reportSubmit() {
    this.dialog.open(ReportClaimSubmitComponent, {
      panelClass: 'report-claim-popup-container'
    });
  }

  ceoLetter() {
    this.dialog.open(LetterFromCeoComponent, {
      panelClass: 'ceo-letter-popup-container'
    });
  }
}
