import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingFormComponent } from './MeetingFormComponent';

describe('MeetingFormComponent', () => {
  let component: MeetingFormComponent;
  let fixture: ComponentFixture<MeetingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingFormComponent]
    });
    fixture = TestBed.createComponent(MeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
