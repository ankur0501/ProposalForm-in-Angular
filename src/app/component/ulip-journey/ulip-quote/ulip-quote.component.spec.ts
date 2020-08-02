import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlipQuoteComponent } from './ulip-quote.component';

describe('UlipQuoteComponent', () => {
  let component: UlipQuoteComponent;
  let fixture: ComponentFixture<UlipQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlipQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlipQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
