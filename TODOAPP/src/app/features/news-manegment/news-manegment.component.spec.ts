import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManegmentComponent } from './news-manegment.component';

describe('NewsManegmentComponent', () => {
  let component: NewsManegmentComponent;
  let fixture: ComponentFixture<NewsManegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsManegmentComponent]
    });
    fixture = TestBed.createComponent(NewsManegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
