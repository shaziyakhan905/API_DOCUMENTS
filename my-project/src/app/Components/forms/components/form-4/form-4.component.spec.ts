import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form4Component } from './form-4.component';

describe('Form4Component', () => {
  let component: Form4Component;
  let fixture: ComponentFixture<Form4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Form4Component]
    });
    fixture = TestBed.createComponent(Form4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
