import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiproviewComponent } from './apiproview.component';

describe('ApiproviewComponent', () => {
  let component: ApiproviewComponent;
  let fixture: ComponentFixture<ApiproviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiproviewComponent]
    });
    fixture = TestBed.createComponent(ApiproviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
