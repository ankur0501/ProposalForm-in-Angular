import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQuoteComponent } from './pre-quote.component';

describe('PreQuoteComponent', () => {
  let component: PreQuoteComponent;
  let fixture: ComponentFixture<PreQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
