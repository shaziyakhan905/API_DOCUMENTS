import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprationsHomeComponent } from './oprations-home.component';

describe('OprationsHomeComponent', () => {
  let component: OprationsHomeComponent;
  let fixture: ComponentFixture<OprationsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OprationsHomeComponent]
    });
    fixture = TestBed.createComponent(OprationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
