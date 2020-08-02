import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedAddOnsComponent } from './recommended-add-ons.component';

describe('RecommendedAddOnsComponent', () => {
  let component: RecommendedAddOnsComponent;
  let fixture: ComponentFixture<RecommendedAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
