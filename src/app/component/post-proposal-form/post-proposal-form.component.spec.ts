import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProposalFormComponent } from './post-proposal-form.component';

describe('PostProposalFormComponent', () => {
  let component: PostProposalFormComponent;
  let fixture: ComponentFixture<PostProposalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProposalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProposalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
