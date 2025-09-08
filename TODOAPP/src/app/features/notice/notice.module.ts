import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateNoticeComponent } from './component/create-notice/create-notice.component';
import { ViewNoticeComponent } from './component/view-notice/view-notice.component';

@NgModule({
  declarations: [
    NoticeComponent,
    CreateNoticeComponent,
    ViewNoticeComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NoticeModule { }
