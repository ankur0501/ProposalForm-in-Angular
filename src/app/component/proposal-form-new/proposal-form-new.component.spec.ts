import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFormNewComponent } from './proposal-form-new.component';

describe('ProposalFormNewComponent', () => {
  let component: ProposalFormNewComponent;
  let fixture: ComponentFixture<ProposalFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
