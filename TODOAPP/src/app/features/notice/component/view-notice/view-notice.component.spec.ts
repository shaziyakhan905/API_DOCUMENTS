import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewNoticeComponent } from './view-notice.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { of } from 'rxjs';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';

describe('ViewNoticeComponent', () => {
  let component: ViewNoticeComponent;
  let fixture: ComponentFixture<ViewNoticeComponent>;
  let mockActivatedRoute: any;
  let mockBreadcrumsService: any;
  let mockCommonHttpService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      data: of({
        notice: {
          notice: {
            title: 'Test Notice',
            description: 'This is a test notice.'
          }
        }
      })
    };

    mockBreadcrumsService = {
      setBreadcrums: jasmine.createSpy('setBreadcrums')
    };

    mockCommonHttpService = {}; // Not used directly in this component

    await TestBed.configureTestingModule({
      declarations: [ViewNoticeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: BreadcrumsService, useValue: mockBreadcrumsService },
        { provide: CommonHttpService, useValue: mockCommonHttpService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set noticeDetail from resolver data', () => {
    expect(component.noticeDetail.title).toBe('Test Notice');
    expect(component.noticeDetail.description).toBe('This is a test notice.');
  });

  it('should set breadcrumbs on init', () => {
    expect(mockBreadcrumsService.setBreadcrums).toHaveBeenCalledWith(BREADCRUMS.notice.view);
  });
});
