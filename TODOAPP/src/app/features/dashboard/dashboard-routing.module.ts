import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { userProfileResolver } from 'src/app/core/resolvers/user-profile.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      profile: userProfileResolver
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardHomeComponent
      },
      {
        path: 'view-profile',
        component: ViewProfileComponent,
        // resolve:{
        //   profile:userProfileResolver
        // }
      },
      { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
      { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
      { path: 'notice', loadChildren: () => import('../notice/notice.module').then(m => m.NoticeModule) },
      { path: 'news-manegment', loadChildren: () => import('../news-manegment/news-manegment.module').then(m => m.NewsManegmentModule) },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
