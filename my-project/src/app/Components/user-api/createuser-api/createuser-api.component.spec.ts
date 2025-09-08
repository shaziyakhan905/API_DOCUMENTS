import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserApiComponent } from './createuser-api.component';

describe('CreateuserApiComponent', () => {
  let component: CreateuserApiComponent;
  let fixture: ComponentFixture<CreateuserApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateuserApiComponent]
    });
    fixture = TestBed.createComponent(CreateuserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
