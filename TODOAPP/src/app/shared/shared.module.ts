import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonHttpService } from '../core/services/common-http.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconComponent } from './components/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { TruncatePipe } from './components/pipe/truncate.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';

const materialModules = [
  MatButtonModule,
  MatDatepickerModule
];

const commonModule = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  NgxPaginationModule,
  NgChartsModule,
  ...materialModules
];


const commonComponents = [
  LoaderComponent,
  BreadcrumbsComponent,
  IconComponent,
  TruncatePipe

]

@NgModule({
  declarations: [
    ...commonComponents,
    BreadcrumbsComponent,
    TruncatePipe,

  ],
  imports: [
    CommonModule,
    ...commonModule,

  ],
  exports: [
    ...commonModule,
    ...commonComponents

  ],
  providers: [
    CommonHttpService
  ]
})
export class SharedModule { }
