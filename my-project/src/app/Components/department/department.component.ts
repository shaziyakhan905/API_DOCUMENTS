import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  departmentData:any = [];
  

  constructor(
    public departmentService:DepartmentService,
    private router:Router
  ){
    this.departmentData = this.departmentService.getDepartmentList();
  }

  navigateTo(){
    this.router.navigate(['campany'])
  }
}
