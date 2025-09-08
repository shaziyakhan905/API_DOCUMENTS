import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-test-department',
  templateUrl: './test-department.component.html',
  styleUrls: ['./test-department.component.scss']
})
export class TestDepartmentComponent {

  user: any = {
    name: "Jawed",
    mobileNumber: 1234567890,
    emailId: "abcgmail.com",
    section: "A",
    id: "009"

  }

  departments = [ // list of departments as array object
    { id: 1, name: 'HR', status: 'Active' },
    { id: 2, name: 'Finance', status: 'Inactive' },
    { id: 3, name: 'IT', status: 'Active' },
    { id: 4, name: 'Marketing', status: 'Active' },
    { id: 5, name: 'Operations', status: 'Active' }
  ];
  selectedDepartments: any[] = []; // used to store department id when checked

  get userEmail() {
    return this.user.emailId;
  }

  get usermobileNumber() {
    return this.user.mobileNumber
  }

  constructor() { }
  toggleSelectAll(event: any) {// event param is used here to receive event object
    const checked = event.target.checked;
    this.selectedDepartments = (checked) ? this.departments.map(department => department.id) : [];
    // console.log(this.userEmail)
  }

  toggleSelection(event: any, departmentId: number, departmentName: string) {
    const checked = event.target.checked;
    if (checked) {
      this.selectedDepartments.push(departmentId);
    } else {
      this.selectedDepartments = this.selectedDepartments.filter((id: any) => {
        return id !== departmentId
      })
    }
  }

  deleteSelected() {
    this.departments = this.departments.filter((ele: any) => {
      return !this.selectedDepartments.includes(ele.id);
    });
    this.selectedDepartments = [];
  }
  deleteDepartment(departmentId: number) {
    console.log(departmentId);
    const deptIndex = this.departments.findIndex((item: any) => {
      if (departmentId === item.id) {
        return item
      }
    });
    this.departments.splice(deptIndex, 1)

  }

  viewDetails(departmentId: number) {
    const deptResult:any = this.departments.find((ele: any) => {
      if (departmentId === ele.id) {
        return ele;
      }
    });
    deptResult.name = "welcome" + deptResult.name 
    const data = JSON.stringify(deptResult);
    alert(data)
}

}