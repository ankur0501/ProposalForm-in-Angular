import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrowMoneyComponent } from './edit-grow-money.component';

describe('EditGrowMoneyComponent', () => {
  let component: EditGrowMoneyComponent;
  let fixture: ComponentFixture<EditGrowMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGrowMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrowMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
