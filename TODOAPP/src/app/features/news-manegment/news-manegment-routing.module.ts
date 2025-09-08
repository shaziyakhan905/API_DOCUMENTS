import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsManegmentComponent } from './news-manegment.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { newsResolver } from 'src/app/core/resolvers/news.resolver';

const routes: Routes = [
  { path: '', component: NewsManegmentComponent },
  {
    path: 'create-news',
    component: CreateNewsComponent,
  },
  {
    path: 'edit-news/:id',
    component: CreateNewsComponent,
    resolve: {
      newsData: newsResolver
    }
  },
  {
    path: 'view-news/:id',
    component: ViewNewsComponent,
    resolve: {
      newsData: newsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsManegmentRoutingModule { }
