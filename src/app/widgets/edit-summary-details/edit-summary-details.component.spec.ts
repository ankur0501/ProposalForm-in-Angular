import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSummaryDetailsComponent } from './edit-summary-details.component';

describe('EditSummaryDetailsComponent', () => {
  let component: EditSummaryDetailsComponent;
  let fixture: ComponentFixture<EditSummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
