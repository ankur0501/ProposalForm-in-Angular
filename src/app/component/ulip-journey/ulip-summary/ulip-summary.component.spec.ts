import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlipSummaryComponent } from './ulip-summary.component';

describe('UlipSummaryComponent', () => {
  let component: UlipSummaryComponent;
  let fixture: ComponentFixture<UlipSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlipSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlipSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
