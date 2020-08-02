import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { ScheduleCallComponent } from 'src/app/widgets/schedule-call/schedule-call.component';
import { MatDialog } from '@angular/material/dialog';
import { ReportClaimSubmitComponent } from 'src/app/widgets/report-claim-submit/report-claim-submit.component';
import { LetterFromCeoComponent } from 'src/app/widgets/letter-from-ceo/letter-from-ceo.component';

import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css', '../common/ng-style/ng-style.component.css'],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]
})
export class ClaimComponent implements OnInit {

  yourclaim = new FormControl('FHGJHG3458');
  nomineeName = new FormControl('');
  nomineeNumber = new FormControl('');
  policyNumber = new FormControl('');
  selectLanguage = new FormControl('');

  isShow = true;
  isHide = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  slideConfigCustomers = {
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: '350px',
    slidesToShow: 1,
    speed: 500,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev'><img src='./assets/icons/previous-arrow.svg'></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='./assets/icons/previous-arrow.svg'></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          centerMode: true,
          infinite: true,
          centerPadding: '350px',
          slidesToShow: 1,
          speed: 500,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  };

  toggleDisplay() {
    this.isShow = !this.isShow;
    this.isHide = !this.isHide;
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

  getCallBack() {
    this.dialog.open(ScheduleCallComponent, {
      panelClass: 'schedule-call-popup-container'
    });
  }

  //Number Validation With  
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 47 && charCode < 58) || charCode == 45) {
      //consider 0 to 9 and "-"
      //consider 47 - 58 and 45
    }
    else {
      return false;
    }
  }

}
