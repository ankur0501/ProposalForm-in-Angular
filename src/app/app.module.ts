import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule,FormsModule,} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackByExampleComponent } from './track-by-example/track-by-example.component';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import {DatePipe} from '@angular/common';
import {ValidationExampleComponent} from './validation-example/validation-example.component';
import { CustomFilterPipe } from './custom-filter.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {CrudServiceService} from './crud-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FamilyDetailsComponent } from './family-details/family-details.component';  
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HighchartsChartModule } from 'highcharts-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

//Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


//Core
import { MaterialModule } from "./core/material.module";

//Directive

//Common component
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

//Custom component
import { PreQuoteComponent } from './component/pre-quote/pre-quote.component';
import { QuoteComponent } from './component/quote/quote.component';
import { GetQuotePopupComponent } from './widgets/get-quote-popup/get-quote-popup.component';
import { ThankYouComponent } from './widgets/thank-you/thank-you.component';
import { SummaryComponent } from './component/summary/summary.component';
import { IndexComponent } from './component/index/index.component';
import { ScheduleCallComponent } from './widgets/schedule-call/schedule-call.component';
import { RecommendedAddOnsComponent } from './widgets/recommended-add-ons/recommended-add-ons.component';
import { UlipFundComponent } from './component/ulip-journey/ulip-fund/ulip-fund.component';
import { ChildDreamComponent } from './widgets/child-dream/child-dream.component';
import { FundAllocatedComponent } from './widgets/fund-allocated/fund-allocated.component';
import { RisingStarComponent } from './widgets/rising-star/rising-star.component';
import { EditGrowMoneyComponent } from './widgets/edit-grow-money/edit-grow-money.component';
import { EditChildFutureComponent } from './widgets/edit-child-future/edit-child-future.component';
import { EditRetirementComponent } from './widgets/edit-retirement/edit-retirement.component';
import { EditSummaryDetailsComponent } from './widgets/edit-summary-details/edit-summary-details.component';
import { UlipJourneyComponent } from './component/ulip-journey/ulip-journey.component';
import { UlipQuoteComponent } from './component/ulip-journey/ulip-quote/ulip-quote.component';
import { UlipSummaryComponent } from './component/ulip-journey/ulip-summary/ulip-summary.component';
import { FundPerformanceComponent } from './widgets/fund-performance/fund-performance.component';
import { SummaryTableComponent } from './widgets/summary-table/summary-table.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { ProposalFormComponent } from './component/proposal-form/proposal-form.component';
import { ProposalPopupComponent } from './widgets/proposal-popup/proposal-popup.component';
import { PostProposalFormComponent } from './component/post-proposal-form/post-proposal-form.component';
import { ClaimComponent } from './component/claim/claim.component';
import { ReportClaimSubmitComponent } from './widgets/report-claim-submit/report-claim-submit.component';
import { LetterFromCeoComponent } from './widgets/letter-from-ceo/letter-from-ceo.component';
import { AngHeaderComponent } from './component/common/ang-header/ang-header.component';
import { SubHeaderComponent } from './component/common/sub-header/sub-header.component';
import { ProposalFormNewComponent } from './component/proposal-form-new/proposal-form-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackByExampleComponent,
    NgSwitchExampleComponent,
    ValidationExampleComponent,
    CustomFilterPipe,
    PaginationComponent,
    LogInComponent,
    RegisterComponent,
    FormArrayDemoComponent,
    PersonalDetailsComponent,
    EmploymentDetailsComponent,
    FileUploadComponent,
    FamilyDetailsComponent,

    HeaderComponent,
    FooterComponent,
    PreQuoteComponent,
    QuoteComponent,
    GetQuotePopupComponent,
    ThankYouComponent,
    SummaryComponent,
    IndexComponent,
    ScheduleCallComponent,
    RecommendedAddOnsComponent,
    UlipFundComponent,
    ChildDreamComponent,
    FundAllocatedComponent,
    RisingStarComponent,
    EditGrowMoneyComponent,
    EditChildFutureComponent,
    EditRetirementComponent,
    EditSummaryDetailsComponent,
    UlipJourneyComponent,
    UlipQuoteComponent,
    UlipSummaryComponent,
    FundPerformanceComponent,
    SummaryTableComponent,
    TermsConditionsComponent,
    ProposalFormComponent,
    ProposalPopupComponent,
    PostProposalFormComponent,
    ClaimComponent,
    ReportClaimSubmitComponent,
    LetterFromCeoComponent,
    AngHeaderComponent,
    SubHeaderComponent,
    ProposalFormNewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgbModule ,
    NgxSpinnerModule,
    SlickCarouselModule,
    MaterialModule,
    PerfectScrollbarModule,
    HighchartsChartModule,
    ScrollToModule.forRoot()

  ],
  entryComponents: [
    GetQuotePopupComponent,
    ThankYouComponent,
    ScheduleCallComponent,
    RecommendedAddOnsComponent,
    ChildDreamComponent,
    FundAllocatedComponent,
    RisingStarComponent,
    EditGrowMoneyComponent,
    EditChildFutureComponent,
    EditRetirementComponent,
    EditSummaryDetailsComponent,
    FundPerformanceComponent,
    SummaryTableComponent,
    ProposalPopupComponent,
    ReportClaimSubmitComponent,
    LetterFromCeoComponent

  ],

  providers: [DatePipe,CrudServiceService,
    {provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
