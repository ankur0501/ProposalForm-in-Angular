import { Component, OnInit, ViewChild, ElementRef, HostListener,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT } from '@angular/common';

import { FormControl, Validators } from '@angular/forms';
import {MatSort,MatSortHeader} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GetQuotePopupComponent } from '../../../widgets/get-quote-popup/get-quote-popup.component';
import { ScheduleCallComponent } from '../../../widgets/schedule-call/schedule-call.component';
import { RisingStarComponent } from '../../../widgets/rising-star/rising-star.component';
import { ChildDreamComponent } from '../../../widgets/child-dream/child-dream.component';
import { EditGrowMoneyComponent } from '../../..//widgets/edit-grow-money/edit-grow-money.component';
import { RouterModule, Routes,ActivatedRoute,Router } from '@angular/router';

import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@Component({
  selector: 'app-ulip-quote',
  templateUrl: './ulip-quote.component.html',
  styleUrls: ['./ulip-quote.component.css', '../../common/ng-style/ng-style.component.css'],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class UlipQuoteComponent implements OnInit {

  insuranceCover = new FormControl('50,00,000', [Validators.required]);
  payment = new FormControl('m', [Validators.required]);
  payFor = new FormControl('35', [Validators.required]);
  returnper = new FormControl('NAV', [Validators.required]);
  equityDropdown = new FormControl('Equity250', [Validators.required]);
  lockingPeriod = new FormControl('7', [Validators.required]);
  equityNAV = new FormControl('NAV', [Validators.required]);
  myself = new FormControl('myself', [Validators.required]);
  term = new FormControl('35', [Validators.required]);

  rupeesSignPrefix = true;
  finalval = '50 Lacs';
  show = false;
  toggle = false;
  toggle1 = false;
  isChild = false;
  showBenefitsBreakups = false;

  @ViewChild('comparePlans', { static: true }) public panel: ElementRef;
 

  constructor(public dialog: MatDialog,private Routes:Router ,private route:ActivatedRoute, @Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 1400) {
      let element = document.getElementById('sticky-div');
      element.classList.add('sticky');
    } else {
     let element = document.getElementById('sticky-div');
       element.classList.remove('sticky'); 
    }
 }

  getGrowMoney() {
    this.dialog.open(EditGrowMoneyComponent, {
      panelClass: 'edit-grow-money-container'
    });
  }

  editGetQuote() {
    this.dialog.open(GetQuotePopupComponent, {
      panelClass: 'get-quote-popup-container'
    });
  }

  public scrolltoView(): void {
      setTimeout(() => {
          this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
  }
 
  
  getCallBack() {
    this.dialog.open(ScheduleCallComponent, {
      panelClass: 'schedule-call-popup-container'
    });
  }

  getRisingStar() {
    this.dialog.open(RisingStarComponent, {
      panelClass: 'rising-star-container'
    });
  }

  getChildDream() {
    this.dialog.open(ChildDreamComponent, {
      panelClass: 'child-dream-container'
    });
  }


  showMore() {
    this.show = !this.show;
    this.toggle = !this.toggle;
  }

  remove() {
    this.toggle1 = !this.toggle1;
  }

  getErrorMessageCover() {
    return this.insuranceCover.hasError('required') ? 'You must enter a value' : '';
  }

  getAmntValue(val) {
    if (val) {
      this.rupeesSignPrefix = true;
    }
    else {
      this.rupeesSignPrefix = false;
    }
  }

  selectChild(val) {
    this.isChild = !this.isChild
  }
  get()
  {
    this.Routes.navigate(['/fund'])
  } 

  showBenefits() {
    this.showBenefitsBreakups = true;
  }
  showBenefitsLess() {
    this.showBenefitsBreakups = false;
  }
}

