import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDepartmentComponent } from './test-department.component';

describe('TestDepartmentComponent', () => {
  let component: TestDepartmentComponent;
  let fixture: ComponentFixture<TestDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDepartmentComponent]
    });
    fixture = TestBed.createComponent(TestDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
