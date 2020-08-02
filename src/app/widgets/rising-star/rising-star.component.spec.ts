import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisingStarComponent } from './rising-star.component';

describe('RisingStarComponent', () => {
  let component: RisingStarComponent;
  let fixture: ComponentFixture<RisingStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisingStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
