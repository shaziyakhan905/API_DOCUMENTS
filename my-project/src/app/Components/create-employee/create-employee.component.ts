import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationCancel, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;
  queryParams: any;
  employeeFormDetails: any
  isSubmitted: boolean = false
  addressOptions: any[] = [
    {
      element: { text: "India" },
      value: { id: 1, name: "India", countryCode: "+91" },
    },
    {
      element: { text: "US" },
      value: { id: 2, name: "US", countryCode: "+91" },
    }
  ]
  get empForm() {
    return this.employeeForm;
  }

  constructor(private router: Router, private activatedroute: ActivatedRoute) {

    this.employeeForm = new FormGroup({
      employeeName: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      location: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      mobileNumber: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      emailId: new FormControl("", [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]),
      dateOfJoining: new FormControl("", [Validators.required]),
    });

    this.activatedroute.queryParams.subscribe((result) => {
      console.log(result);
      this.queryParams = result;
    });

    if (this.queryParams.action == "edit") {
      const updatedForm = localStorage.getItem("employeeList")
      if (updatedForm != null) {
        const getData = JSON.parse(updatedForm);
        const selectedIndex = parseInt(this.queryParams.index)
        this.employeeFormDetails = getData[selectedIndex]
        this.updatedForm();
        console.log(this.employeeFormDetails);
      }

    }
  }

  updatedForm() {
    this.employeeForm.patchValue({
      employeeName: this.employeeFormDetails.employeeName,
      location: this.employeeFormDetails.location,
      mobileNumber: this.employeeFormDetails.mobileNumber,
      emailId: this.employeeFormDetails.emailId,
      dateOfJoining: this.employeeFormDetails.mobileNumber
    })
  }

  onFormsubmit() {
    this.isSubmitted = true;
    if (this.employeeForm.invalid) {
      return
    }
    const formValue = this.employeeForm.value;
    this.setEmployeeDataInLS(formValue);
  }

  setEmployeeDataInLS(data: any): void {
    const dataFromLS: any = localStorage.getItem('employeeList');
    if (dataFromLS != null) {
      let tempResult: any = JSON.parse(dataFromLS);
      tempResult.push(data);
      const finalResult = JSON.stringify(tempResult);
      console.log()
      localStorage.setItem('employeeList', finalResult);
      this.router.navigate(["employees"])
    } else {
      const finalResult = JSON.stringify([data]);
      localStorage.setItem('employeeList', finalResult);
      this.router.navigate(["employees"])
    }
  }





  getLocation(event: any) {
    console.log(event)
  }

}




