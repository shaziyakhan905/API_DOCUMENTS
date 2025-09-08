import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent implements OnDestroy {
  noticeForm: FormGroup;
  isSubmitted: boolean = false;
  noticeDetails: any = {};

  constructor(private CommonHttp: CommonHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumsService: BreadcrumsService,
    private notifyService:NotifyService) {
    this.noticeForm = new FormGroup({
      title: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
      type: new FormControl("urgent", Validators.required),
      createdBy: new FormControl("", Validators.required),
    });
    this.setNoticeFromResolverData();
    this.breadcrumsService.setBreadcrums(BREADCRUMS.notice.create);
  };

  setNoticeFromResolverData(){
  this.activatedRoute.data.subscribe((resolverData: any) => {
      if (resolverData.notice != null) {
        this.noticeDetails = resolverData.notice.notice;
        this.prePopulateNotice();
      }
    });
  }

  // ngOnInit(): void {
  //   this.activatedRoute.queryParams.subscribe((qparams: any) => {
  //     this.actionType = qparams.action;
  //     if (this.actionType == 'edit') {
  //       this.noticeId = qparams.id

  //     };
  //   });
  // };

  onSubmit() {
    this.isSubmitted = true;
    const noticeFormData = this.noticeForm.value;
    const payload = { ...noticeFormData };
    if (Object.keys(this.noticeDetails).length == 0) {
      this.CommonHttp.post(`${environments.baseUrl}notice/createNotice`, payload)
        .subscribe((result: any) => {
          this.router.navigate(['/landing/notice']);
          this.notifyService.showSuccess('Notice created successfully',"")
        });
    } else if (Object.keys(this.noticeDetails).length > 0) {
      this.CommonHttp.put(`${environments.baseUrl}notice/updateNoticeById/${this.noticeDetails._id}`, payload)
        .subscribe((result: any) => {
          this.router.navigate(['/landing/notice']);
          this.notifyService.showSuccess('Notice updated successfully',"")
        });
    };
  };

  prePopulateNotice() {
    const notice = this.noticeDetails
    this.noticeForm.patchValue({
      title: notice.title,
      message: notice.message,
      type: notice.type,
      createdBy: notice.createdBy
    });
  };
  get noticeFormData() {
    return this.noticeForm
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  };
}
