import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { LoaderInterceptor } from 'src/app/core/interceptors/loader.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { HttpErrorInterceptor } from 'src/app/core/interceptors/http-error.interceptor';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    SidebarComponent,
    TopHeaderComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
})
export class DashboardModule { }
