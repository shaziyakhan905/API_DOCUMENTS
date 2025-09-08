import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadProfilesComponent } from './head-profiles.component';

describe('HeadProfilesComponent', () => {
  let component: HeadProfilesComponent;
  let fixture: ComponentFixture<HeadProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadProfilesComponent]
    });
    fixture = TestBed.createComponent(HeadProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
