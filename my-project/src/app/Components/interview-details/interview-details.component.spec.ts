import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDetailsComponent } from './interview-details.component';

describe('InterviewDetailsComponent', () => {
  let component: InterviewDetailsComponent;
  let fixture: ComponentFixture<InterviewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewDetailsComponent]
    });
    fixture = TestBed.createComponent(InterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
