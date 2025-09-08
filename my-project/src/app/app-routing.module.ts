import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './Components/company/company.component';
import { DepartmentComponent } from './Components/department/department.component';
import { AdmissionEnquiryComponent } from './Components/admission-enquiry/admission-enquiry.component';
import { InterviewDetailsComponent } from './Components/interview-details/interview-details.component';
import { MeetingComponent } from './Components/meeting/meeting.component';
import { MeetingFormComponent } from './Components/meeting-form/meeting-form.component'
import { CreateInterviewComponent } from './Components/create-interview/create-interview.component';
import { FeedbackFormComponent } from './Components/feedback-form/feedback-form.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { FeedbackViewComponent } from './Components/feedback-view/feedback-view.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
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
// import { authGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { protectGuard } from './guards/protect.guard';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { checkAlreadyLoggedInGuard } from './guards/auth.guard';
import { PostsComponent } from './Components/posts/posts.component';
import { LoginComponent } from './Components/forms/components/login/login.component';
import { Form4Component } from './Components/forms/components/form-4/form-4.component';
import { CreatUserComponent } from './Components/Users/creat-user/creat-user.component';
import { UsersrecordComponent } from './Components/Users/users-record/usersrecord.component';
import { ViewComponent } from './Components/Users/view/view.component';
import { UserViewComponent } from './Components/Users/user-view/user-view.component';
import { CreateuserApiComponent } from './Components/user-api/createuser-api/createuser-api.component';
import { UserapiRecordComponent } from './Components/user-api/userapi-record/userapi-record.component';
import { ApiviewComponent } from './Components/user-api/apiview/apiview.component';
import { LandingComponent } from './Components/landing/landing/landing.component';
import { NoticeComponent } from './Components/landing/notice/notice.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { OprationsHomeComponent } from './Components/Oprations/oprations-home/oprations-home.component';
import { ApiHomeComponent } from './Components/API Product/api-home/api-home.component';
import { ProductformComponent } from './Components/API Product/productform/productform.component';
import { ApiproviewComponent } from './Components/API Product/apiproview/apiproview.component';


const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login", canActivate: [checkAlreadyLoggedInGuard], component: LoginComponent
  },
  {
    path: "poc",
    component: PocHomeComponent,
    canActivate: [
      // authGuard
      protectGuard
    ],

    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "landing", component: LandingComponent },
      { path: "employees", component: EmployeesComponent },
      { path: "campany", component: CompanyComponent },
      { path: "department", component: DepartmentComponent },
      { path: "admission-enquiry", component: AdmissionEnquiryComponent },
      { path: "interview-details", component: InterviewDetailsComponent },
      { path: "create-interview", component: CreateInterviewComponent },
      { path: "meeting", component: MeetingComponent },
      { path: "create-meeting", component: MeetingFormComponent },
      { path: "feedback", component: FeedbackComponent },
      { path: "create-feedback", component: FeedbackFormComponent },
      { path: "feedback-view/:index", component: FeedbackViewComponent },
      // { path:"feedback-view",component:FeedbackViewComponent},
      { path: "create-employee", component: CreateEmployeeComponent },
      { path: "employees-view", component: EmployeesViewComponent },
      { path: "calendar", component: CalendarComponent },
      { path: "test", component: TestComponent },
      { path: "html-test", component: HTMLTestComponent },
      { path: "student", component: StudentComponent },
      { path: "test1", component: Test1Component },
      { path: "test-2", component: Test2Component },
      { path: "test-department", component: TestDepartmentComponent },
      { path: "product", component: ProductComponent },
      { path: "checkout", component: ProductCheckoutComponent },
      { path: "posts", component: PostsComponent },
      { path: "usersresord", component: UsersrecordComponent },
      { path: "creatuser", component: CreatUserComponent },
      { path: "viewUser/:id", component: ViewComponent },
      { path: "createuserapi", component: CreateuserApiComponent },
      { path: "userapirecord", component: UserapiRecordComponent },
      { path: "apiview", component: ApiviewComponent },
      { path: "oprationshome", component: OprationsHomeComponent },
      { path: "apihome", component: ApiHomeComponent },
      { path: "productform", component: ProductformComponent },
      { path: "apiproview", component: ApiproviewComponent },
      

      {
        path: "forms",
        component: FormHomeComponent,
        children: [
          { path: "form-1", component: Form1Component },
          { path: "form-2", component: Form2Component },
          { path: "form-3", component: Form3Component },
          { path: "form-4", component: Form4Component },
          { path: "login", component: LoginComponent },
        ]
      },
    ]
  },

  { 
    path: 'customers', 
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) 
  },

  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },

  // {path:"**",component:PageNotFoundComponent}

  { path: "**", component: ErrorpageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
