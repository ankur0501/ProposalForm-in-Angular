import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlipFundComponent } from './ulip-fund.component';

describe('UlipFundComponent', () => {
  let component: UlipFundComponent;
  let fixture: ComponentFixture<UlipFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlipFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlipFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
