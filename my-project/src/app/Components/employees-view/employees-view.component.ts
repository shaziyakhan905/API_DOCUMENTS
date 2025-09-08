import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent {
  employeeDetails: any = {};
  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe((result: any) => {
      console.log(result);
      const selectIndex = parseInt(result.index);
      this.getEmployeedataByIndex(selectIndex);
    });

  }

  getEmployeedataByIndex(selectIndex: number): void {
    const setEmployeeDataFromLs = localStorage.getItem("employeeList");
    if (setEmployeeDataFromLs != null) {
      let outcome = JSON.parse(setEmployeeDataFromLs);
      console.log(outcome[selectIndex]);
      this.employeeDetails = outcome[selectIndex];
    }
  }
}
