import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChildFutureComponent } from './edit-child-future.component';

describe('EditChildFutureComponent', () => {
  let component: EditChildFutureComponent;
  let fixture: ComponentFixture<EditChildFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChildFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChildFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
