import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterFromCeoComponent } from './letter-from-ceo.component';

describe('LetterFromCeoComponent', () => {
  let component: LetterFromCeoComponent;
  let fixture: ComponentFixture<LetterFromCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterFromCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterFromCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
