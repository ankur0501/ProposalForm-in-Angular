import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAllocatedComponent } from './fund-allocated.component';

describe('FundAllocatedComponent', () => {
  let component: FundAllocatedComponent;
  let fixture: ComponentFixture<FundAllocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundAllocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundAllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
