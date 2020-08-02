import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationExampleComponent } from './validation-example/validation-example.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import {FormArrayDemoComponent} from './form-array-demo/form-array-demo.component'
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FamilyDetailsComponent} from './family-details/family-details.component';

//Routing component
import { PreQuoteComponent } from './component/pre-quote/pre-quote.component';
import { QuoteComponent } from './component/quote/quote.component';
import { SummaryComponent } from './component/summary/summary.component';
import { IndexComponent } from './component/index/index.component';
import { UlipQuoteComponent } from './component/ulip-journey/ulip-quote/ulip-quote.component';
import { UlipSummaryComponent } from './component/ulip-journey/ulip-summary/ulip-summary.component';
import { UlipFundComponent } from './component/ulip-journey/ulip-fund/ulip-fund.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { ProposalFormComponent } from './component/proposal-form/proposal-form.component';
import { PostProposalFormComponent } from './component/post-proposal-form/post-proposal-form.component';
import { ClaimComponent } from './component/claim/claim.component';
import { ProposalFormNewComponent } from './component/proposal-form-new/proposal-form-new.component';

const routes: Routes = [
  //{path:"",redirectTo:"/login",component:LoginComponent},
// {path:"validation-example",component:ValidationExampleComponent},
//  {path:"login",component:LoginComponent}
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {path:"FormArrayDemo",component:FormArrayDemoComponent},
  {path:"PersonalDetails",component:PersonalDetailsComponent},
  {path:"FileUpload",component:FileUploadComponent},
  {path:"FamilyDetails",component:FamilyDetailsComponent},
  { path: '', component: ProposalFormNewComponent, pathMatch: 'full' },
  { path: 'get-quote', component: PreQuoteComponent, pathMatch: 'full' },
  { path: 'plan-suggetion', component: QuoteComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'fund', component: UlipFundComponent },
  { path: 'ulip-summary', component: UlipSummaryComponent },
  { path: 'ulip-quote', component: UlipQuoteComponent },
  { path: 'proposal', component: ProposalFormComponent },
  { path: 'post-proposal', component: PostProposalFormComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'proposal-new', component: ProposalFormNewComponent },
  { path: '**', redirectTo: '' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
