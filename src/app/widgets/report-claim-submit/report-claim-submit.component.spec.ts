import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClaimSubmitComponent } from './report-claim-submit.component';

describe('ReportClaimSubmitComponent', () => {
  let component: ReportClaimSubmitComponent;
  let fixture: ComponentFixture<ReportClaimSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportClaimSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClaimSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
