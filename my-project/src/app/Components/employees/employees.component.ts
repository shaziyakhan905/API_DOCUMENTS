import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  x:string = "";
  employeeData: any[] = [];

  constructor(private router: Router) {
    this.getEmployeeDataFromLs();
  }

  getEmployeeDataFromLs() {
    const dataFromLS: any = localStorage.getItem('employeeList');
    if (dataFromLS != null) {
      let result: any = JSON.parse(dataFromLS);
      console.log(result)
      this.employeeData = result;
    }
  }

  deleteEmployeeDataFromLS(index: number): void {
    if (confirm("Are you sure want to proceed?")) {
      const dataFromLS: any = localStorage.getItem('employeeList');
      if (dataFromLS != null){
        let result: any = JSON.parse(dataFromLS);
        result.splice(index, 1);
        const finalResult = JSON.stringify(result);
        localStorage.setItem('employeeList', finalResult);
      }
      this.getEmployeeDataFromLs();

    }
  }

  navigateToViewemployees(index: number): void {
    this.router.navigate([`/poc/employees-view`], {
      queryParams: { index: index, action: "view" }
    });
  }

  navigateToEditEmployees(index: number): void {
    this.router.navigate([`/poc/create-employee`], { queryParams: { index: index, action: "edit" } }

    );
  }
}


