import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLTestComponent } from './html-test.component';

describe('HTMLTestComponent', () => {
  let component: HTMLTestComponent;
  let fixture: ComponentFixture<HTMLTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HTMLTestComponent]
    });
    fixture = TestBed.createComponent(HTMLTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
