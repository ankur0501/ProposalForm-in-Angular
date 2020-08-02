import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlipJourneyComponent } from './ulip-journey.component';

describe('UlipJourneyComponent', () => {
  let component: UlipJourneyComponent;
  let fixture: ComponentFixture<UlipJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlipJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlipJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
