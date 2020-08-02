import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDreamComponent } from './child-dream.component';

describe('ChildDreamComponent', () => {
  let component: ChildDreamComponent;
  let fixture: ComponentFixture<ChildDreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
