import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapiRecordComponent } from './userapi-record.component';

describe('UserapiRecordComponent', () => {
  let component: UserapiRecordComponent;
  let fixture: ComponentFixture<UserapiRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserapiRecordComponent]
    });
    fixture = TestBed.createComponent(UserapiRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
