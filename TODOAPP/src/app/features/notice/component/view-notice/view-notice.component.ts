import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.scss']
})
export class ViewNoticeComponent implements OnInit {
  noticeDetail: any = {};
  constructor(private commonHttp: CommonHttpService,
    private activatedRoute: ActivatedRoute,
    private breadcrumsService: BreadcrumsService) {
    this.setNoticeDetailFromResolver();

  }

  setNoticeDetailFromResolver() {
    this.activatedRoute.data.subscribe((resolverData: any) => {
      console.log(resolverData);
      this.noticeDetail = resolverData.notice.notice;
    });
  }

  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.notice.view)
  }
}
