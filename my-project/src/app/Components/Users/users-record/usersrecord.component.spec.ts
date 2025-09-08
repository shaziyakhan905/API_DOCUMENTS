import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersrecordComponent } from './usersrecord.component';

describe('UsersrecordComponent', () => {
  let component: UsersrecordComponent;
  let fixture: ComponentFixture<UsersrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersrecordComponent]
    });
    fixture = TestBed.createComponent(UsersrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
