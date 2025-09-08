import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './Components/company/company.component';
import { DepartmentComponent } from './Components/department/department.component';
import { ConcatStringPipe } from './Pipes/concat-string.pipe';
import { AdmissionEnquiryComponent } from './Components/admission-enquiry/admission-enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewDetailsComponent } from './Components/interview-details/interview-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeetingComponent } from './Components/meeting/meeting.component';
import { MeetingFormComponent } from './Components/meeting-form/meeting-form.component';
import { CreateInterviewComponent } from './Components/create-interview/create-interview.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { NavHeaderComponent } from './Components/nav-header/nav-header.component';
import { FeedbackViewComponent } from './Components/feedback-view/feedback-view.component';
import { FeedbackFormComponent } from './Components/feedback-form/feedback-form.component';
import { EmployeesViewComponent } from './Components/employees-view/employees-view.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { TestComponent } from './Components/test/test.component';
import { HTMLTestComponent } from './Components/html-test/html-test.component';
import { StudentComponent } from './Components/student/student.component';
import { Test1Component } from './Components/test1/test1.component';
import { Test2Component } from './Components/test-2/test-2.component';
import { TestDepartmentComponent } from './Components/test-department/test-department.component';
import { FormHomeComponent } from './Components/forms/form-home/form-home.component';
import { Form1Component } from './Components/forms/components/form-1/form-1.component';
import { Form2Component } from './Components/forms/components/form-2/form-2.component';
import { Form3Component } from './Components/forms/components/form-3/form-3.component';
import { PocHomeComponent } from './Components/poc-home/poc-home.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './Components/posts/posts.component';
import { LoginComponent } from './Components/forms/components/login/login.component';
import { Form4Component } from './Components/forms/components/form-4/form-4.component';
import { UsersrecordComponent } from './Components/Users/users-record/usersrecord.component';
import { CreatUserComponent } from './Components/Users/creat-user/creat-user.component';
import { ViewComponent } from './Components/Users/view/view.component';
import { UserViewComponent } from './Components/Users/user-view/user-view.component';
import { CreateuserApiComponent } from './Components/user-api/createuser-api/createuser-api.component';
import { UserapiRecordComponent } from './Components/user-api/userapi-record/userapi-record.component';
import { ApiviewComponent } from './Components/user-api/apiview/apiview.component';
import { LandingComponent } from './Components/landing/landing/landing.component';
import { BannersComponent } from './Components/landing/banners/banners.component';
import { NoticeComponent } from './Components/landing/notice/notice.component';
import { AdvertisementComponent } from './Components/landing/advertisement/advertisement.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './Components/loader/loader.component';
import { OprationsHomeComponent } from './Components/Oprations/oprations-home/oprations-home.component';
import { DeparmentComponent } from './Components/Oprations/deparment/deparment.component';
import { ServiceComponent } from './Components/Oprations/service/service.component';
import { HeadProfilesComponent } from './Components/Oprations/head-profiles/head-profiles.component';
import { AddsComponent } from './Components/Oprations/adds/adds.component';
import { RoleComponent } from './Components/Oprations/role/role.component';
import {StocksComponent} from './Components/dashboard/dashboard/stocks/stocks.component';
import { ProductformComponent } from './Components/API Product/productform/productform.component';
import { ApiHomeComponent } from './Components/API Product/api-home/api-home.component';
import { ApiproviewComponent } from './Components/API Product/apiproview/apiproview.component'
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SelectOptionComponent } from './Components/select-option/select-option.component';
import { MediaComponent } from './Components/media/media.component';
import { ImageReaderComponent } from './Components/reusable-components/image-reader/image-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    DepartmentComponent,
    ConcatStringPipe,
    AdmissionEnquiryComponent,
    InterviewDetailsComponent,
    MeetingComponent,
    MeetingFormComponent,
    CreateInterviewComponent,
    FeedbackComponent,
    FeedbackFormComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    NavHeaderComponent,
    FeedbackViewComponent,
    EmployeesViewComponent,
    CalendarComponent,
    TestComponent,
    HTMLTestComponent,
    StudentComponent,
    Test1Component,
    Test2Component,
    TestDepartmentComponent,
    FormHomeComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    PocHomeComponent,
    ProductComponent,
    ProductCheckoutComponent,
    LoginFormComponent,
    PageNotFoundComponent,
    ErrorpageComponent,
    PostsComponent,
    LoginComponent,
    Form4Component,
    UsersrecordComponent,
    CreatUserComponent,
    ViewComponent,
    UserViewComponent,
    CreateuserApiComponent,
    UserapiRecordComponent,
    ApiviewComponent,
    LandingComponent,
    BannersComponent,
    NoticeComponent,
    AdvertisementComponent,
    DashboardComponent,
    LoaderComponent,
    OprationsHomeComponent,
    DeparmentComponent,
    ServiceComponent,
    HeadProfilesComponent,
    AddsComponent,
    RoleComponent,
    StocksComponent,
    ProductformComponent,
    ApiHomeComponent,
    ApiproviewComponent,
    SelectOptionComponent,
    MediaComponent,
    ImageReaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule, // required animations module
    HttpClientModule

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
      useClass: ErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
