import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-form-4',
  templateUrl: './form-4.component.html',
  styleUrls: ['./form-4.component.scss']
})
export class Form4Component {
  userForm: FormGroup;
  isSubmitted: boolean = false;
  countryList: any[] = [];
  stateList: any[] = [];
  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  constructor(private httpClient: HttpClient) {
    this.userForm = new FormGroup({

      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      emailId: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      zipCode: new FormControl(),

    });

    this.getCountryDetails();
  }

  getCountryDetails() {
    this.httpClient.get(`${this.baseUrl}address/countries`)
    .subscribe((result: any) => {
      console.log(result);
      this.countryList = result;
    });
   
  }

   getStateDetails(){
      this.httpClient.get(`${this.baseUrl}address/state`)
      .subscribe((result)=>{
        console.log(result)
        // this.stateList= result
      });
    }

  onSubmit() {
    this.isSubmitted = true
    if (this.userForm.valid) {
      const userDatils = this.userForm.value
    }

  }

  get signUpData() {
    return this.userForm
  }

}
function getStateDetails() {
  throw new Error('Function not implemented.');
}

