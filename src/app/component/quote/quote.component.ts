import { Component, OnInit, HostListener} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

import { GetQuotePopupComponent } from '../../widgets/get-quote-popup/get-quote-popup.component';
// import { ThankYouComponent } from '../../widgets/thank-you/thank-you.component';
import { ScheduleCallComponent } from '../../widgets/schedule-call/schedule-call.component';
import { Router } from '@angular/router';
import { RecommendedAddOnsComponent } from '../../widgets/recommended-add-ons/recommended-add-ons.component';

import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}


declare function myTest() : any;

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css', '../common/ng-style/ng-style.component.css'],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]
})
export class QuoteComponent implements OnInit {

  customePlan = false;
  customePlanSelected = false;
  showBenefitsBreakups = false;
  breakUp = false;
  rupeesSignPrefix=true;
  // inrRegular="^(\d{1,2})(,\d{2})*(,\d{1,3}){1}(\.\d{1,})?$";

  show = false;
  toggle = false;
  toggle1 = false;
  isCritiCarePlus=false;
  isAccidental=false;

  insuranceCover = new FormControl('50,00,000', [Validators.required]);
  paymentFreq= new FormControl('m', [Validators.required]);
  term= new FormControl('35', [Validators.required]);
  payFor= new FormControl('35', [Validators.required]);
  lowestDropSelect=new FormControl('op1', [Validators.required]);
  additionalSelect=new FormControl('op1', [Validators.required]);

  finalval = '50 Lacs';
  valCust;
  showtooltip = false;
  cardHeight; 
  isSticky:boolean=false;
  constructor(public dialog: MatDialog, private router: Router) { 
    document.querySelector('addon-container');
    
  }

  ngOnInit() { 
    
  }

  @HostListener('window:scroll')
  checkScroll(): void  {
    this.isSticky = window.pageYOffset >= 280 && window.pageYOffset <= 485;
  }

  // isSticky: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   // if(window.innerWidth >= 991)
  //   //   {
  //   //     this.isSticky = window.pageYOffset >= 180;
  //   //   }
    
  //   let divHeight=document.getElementById('x').offsetHeight;
  //   console.log("window.pageYOffse"+window.pageYOffset+":divHeight:"+divHeight);
  //   if (window.pageYOffset > 300 && window.pageYOffset<(divHeight-50)) {
  //     let element = document.getElementById('my-plan');
  //     element.classList.add('sticky');
  //   } 
  //   else {
  //    let element = document.getElementById('my-plan');
  //      element.classList.remove('sticky'); 
  //   }
    
  // }

  slideConfig = {
    slidesToShow : 1,
    dots : true,
    arrows : false,
    speed : 500,
    autoplay : true
  };

  getErrorMessageCover(){
    return this.insuranceCover.hasError('required') ? 'You must enter a value' :
        '';
  }

  getCustomPlan() {
    this.customePlan = true;
    window.scroll(0,0);
    //console.log(document.querySelector('.addon-container'))
  }

  showPlan() {
    this.customePlan = false;
    this.customePlanSelected = true;
    window.scroll(0,0);
  }
  // thankYouPopup() {
  //   this.dialog.open(ThankYouComponent, {
  //     panelClass: 'thankyou-popup-container'
  //   });
  // }

  editGetQuote() {
    this.dialog.open(GetQuotePopupComponent, {
      panelClass: 'get-quote-popup-container'
    });
  }

  getCallBack() {
    this.dialog.open(ScheduleCallComponent, {
      panelClass: 'schedule-call-popup-container'
    });
  }

  showMore() {
    this.show = !this.show
    this.toggle = !this.toggle
  }

  remove() {
    this.toggle1 = !this.toggle1
  }

  showBenefits() {
    this.showBenefitsBreakups = true;
  }
  showBenefitsLess() {
    this.showBenefitsBreakups = false;
  }

  showBreakUp() {
    this.breakUp = true;
  }

  hideBreakUp() {
    this.breakUp = false;
  }

  getAmntValue(val){
    if(val){
      this.rupeesSignPrefix=true;
    }
    else{
      this.rupeesSignPrefix=false;
    }
  }
  
  getValueInWord(e){
    // console.log(e.target.value.length+1);
    // console.log(this.insuranceCover.value);

    if(e.target.value.length+1 == 0) {
      this.finalval =  ''; 
    }
    
    
  }

  getTooltipshowhide(){
    this.showtooltip=true;
  }
  closeTooltip(){
    this.showtooltip=false;
  }
  
  getRecomAddOn(){
    this.dialog.open(RecommendedAddOnsComponent, {
      panelClass: 'add-ons-popup-container'
    });
  }
  getSummery(){
    this.router.navigate(['/summary']);
  }

  showOptions(val){
    if(val=='accidental'){
      this.isAccidental=!this.isAccidental;
    }
    else if(val=='criticare'){
      this.isCritiCarePlus=!this.isCritiCarePlus;
    }
  }

  getValueLogAdd(){
    let elm =document.querySelector("body").classList.add("scroll-hidden");
    // let elm1 =document.querySelector("html").classList.add("scroll-hidden");
  }
  getValueLog(){
    let elm1 =document.querySelector("body").classList.remove("scroll-hidden");
  }

}
