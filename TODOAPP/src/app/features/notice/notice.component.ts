import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environments } from 'src/environments/enviroments';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subscription, switchMap, throttleTime } from 'rxjs';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated// default
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.None // make style global and can impact another conponent style
})
export class NoticeComponent implements OnInit, AfterViewInit,AfterViewChecked,DoCheck, OnDestroy {
  @ViewChild('noticeTable', { static: true }) noticeTable!: ElementRef

  CommonHttpService: any;
  allNoticeDetails: any[] = [];
  gotToEditUser: any;
  searchSubject$ = new BehaviorSubject<string>("");
  searchSubjectSubscription!: Subscription;
  searchText: string = "";
  profileImgageUrl: string = "../../../../../assets/images/profile-image.jpg";

  page: number = 1;
  limit: number = 5;
  totalItems: number = 0;

  constructor(private router: Router,
    private CommonHttp: CommonHttpService,
    private breadcrumsService: BreadcrumsService,
    private notifyService: NotifyService,
  private renderer2:Renderer2) {
    console.log("constructor called");
  }
  ngOnInit(): void {
console.log("ngOnInit called");
    this.breadcrumsService.setBreadcrums(BREADCRUMS.notice.list);
  }

  ngAfterViewInit(): void {
   console.log("ngAfterViewInit called"); 
    this.searchSubjectSubscription = this.searchSubject$.pipe(
      debounceTime(300), // Wait 300ms after user stops typing
      throttleTime(500), // Limit to one request every 500ms
      distinctUntilChanged(), // Only emit if value changed
      switchMap((seachVal) => {
        // console.log(this.page);// need to undersatd here 
        // console.log(this.limit);// need to understand here
        this.page = 1;
        let params = new HttpParams()
          .append('search', seachVal)
          .append('page', `${this.page}`)//why we have mention $here
          .append('limit', `${this.limit}`);
        return this.CommonHttp.get(`${environments.baseUrl}notice/allNotice`, params)
      })
    ).subscribe((result: any) => {
      this.allNoticeDetails = result.notices;
      this.totalItems = result.totalCounts;
    });
  };

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called"); 
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  goToCreateNotice() {
    // this.noticeTable.nativeElement.style.display = "none";// Direct DOM manipulation avoid change detection cycle
    this.renderer2.setStyle(this.noticeTable.nativeElement, 'display', 'none');
    setTimeout(()=>{
      this.router.navigate(['/landing/notice/createnotice'], { queryParams: { action: 'add' } });
    },5000)
  }

  deleteNoticeRecordById(notice: any) {
    const confirmation = confirm("Are you sure want to delete user?");
    if (confirmation) {
      const noticeId = notice._id
      this.CommonHttp.delete(`${environments.baseUrl}notice/deleteNoticeById/${noticeId}`)
        .subscribe((result: any) => {
          console.log(result)
          this.notifyService.showError("Delete Confirmation", "User Deleted successfully");
          // this.getAllNoticeDetails();
        });
    };
  };
  goToviewNoticeById(notice: any) {
    const noticeId = notice._id
    this.router.navigate([`/landing/notice/viewnotice/${noticeId}`])
  };

  gotToEditNotice(notice: any) {
    const noticeId = notice._id
    this.router.navigate([`/landing/notice/edit-notice/${noticeId}`]);
  }

  onSearch(event: any) {
    this.searchText = event.target.value;
    this.searchSubject$.next(this.searchText)
  }

  onPageChange(event: any) {
    this.page = event;
    let params = new HttpParams()
      .append('search', this.searchText)
      .append('page', `${this.page}`)
      .append('limit', `${this.limit}`);
    this.CommonHttp.get(`${environments.baseUrl}notice/allNotice`, params).subscribe((result: any) => {
      this.allNoticeDetails = result.notices;
      this.totalItems = result.totalCounts;
    });
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([]);
    this.searchSubjectSubscription.unsubscribe();
  }
}
