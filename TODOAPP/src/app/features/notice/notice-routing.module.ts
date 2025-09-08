import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeComponent } from './notice.component';
import { CreateNoticeComponent } from './component/create-notice/create-notice.component';
import { ViewNoticeComponent } from './component/view-notice/view-notice.component';
import { noticeResolver } from 'src/app/core/resolvers/notice.resolver';

const routes: Routes = [
  { path: '', component: NoticeComponent },
  { path: 'createnotice', 
    component: CreateNoticeComponent,
    resolve: {
      notice:noticeResolver
    }
  },
  { path: 'edit-notice/:id', 
    component: CreateNoticeComponent,
    resolve: {
      notice:noticeResolver
    }
  },
  { path: 'viewnotice/:id', 
    component: ViewNoticeComponent,
    resolve:{
      notice:noticeResolver
    }
  },

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
