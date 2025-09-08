import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsManegmentRoutingModule } from './news-manegment-routing.module';
import { NewsManegmentComponent } from './news-manegment.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  declarations: [
    NewsManegmentComponent,
    CreateNewsComponent,
    ViewNewsComponent
  ],
  imports: [
    CommonModule,
    NewsManegmentRoutingModule,
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ]
})
export class NewsManegmentModule { }
