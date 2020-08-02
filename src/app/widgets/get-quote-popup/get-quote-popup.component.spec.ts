import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuotePopupComponent } from './get-quote-popup.component';

describe('GetQuotePopupComponent', () => {
  let component: GetQuotePopupComponent;
  let fixture: ComponentFixture<GetQuotePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuotePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
