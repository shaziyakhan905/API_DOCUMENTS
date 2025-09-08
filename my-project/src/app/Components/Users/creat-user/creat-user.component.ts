import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormAction } from 'src/app/enums/actions';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent {
  FromAction = FormAction;
  userForm: FormGroup;
  isSubmitted: boolean = false;
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  actionType: string = "add";
  queryParams: any = {};
  constructor(private httpClient: HttpClient,
    private toster: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.userForm = new FormGroup({

      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      emailId: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
    });

    this.getAllCountries();

    this.activatedRoute.queryParams.subscribe((qparams: any) => {
      if (Object.keys(qparams).length > 0) {
        this.actionType = qparams.action;
        this.queryParams = qparams;
        console.log(this.queryParams);
        if (this.actionType == "edit") {
          this.getUserById(this.queryParams.id);
        }
      }
    });
  }

  getAllCountries() {
    this.httpClient.get(`${this.baseUrl}address/countries`)
      .subscribe((result: any) => {
        console.log(result);
        const options = result.map((el: any) => {
          return {
            element: { text: el.name },
            value: { ...el }
          }
        });
        console.log(options)
        this.countryList = options;
      });
  }

  onCountryChange(event: any) {
    console.log(event)
    let countryId = event._id;
    this.getStatesByCountryId(countryId);
  }

  getStatesByCountryId(countryId: string) {
    this.httpClient.get(`${this.baseUrl}address/states/${countryId}`).subscribe((result: any) => {
      console.log(result)
      this.stateList = result
    });
  }

  onChangeState(event: any) {
    let stateId = event.target.value;
    this.getCitiesByStateId(stateId);
  }

  getCitiesByStateId(stateId: string) {
    this.httpClient.get(`${this.baseUrl}address/cities/${stateId}`)
      .subscribe((result: any) => {
        this.cityList = result
      })
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.userForm.valid) {
      const userDatails = this.userForm.value;
      const payload: any = {
        firstName: userDatails.firstName,
        lastName: userDatails.lastName,
        emailId: userDatails.emailId,
        mobileNo: userDatails.mobileNumber,
        countryId: userDatails.country,
        stateId: userDatails.state,
        cityId: userDatails.city
      }
      console.log(payload);
      if (this.actionType == "add") {
        payload['password'] = userDatails.password;
        this.httpClient.post(`${this.baseUrl}createUser`, payload).subscribe((result) => {
          console.log(result);
          this.toster.success("User created succesfully")
          this.router.navigate(['/poc/usersresord'])
        });
      } else {
        this.httpClient.put(`${this.baseUrl}user/updateUserById/${this.queryParams.id}`, payload).subscribe((result) => {
          console.log(result);
          this.toster.success("User updated succesfully")
          this.router.navigate(['/poc/usersresord'])
        });
      }

    };
  }


  get signUpData() {
    return this.userForm
  }

  getUserById(userId: any) {
    this.httpClient.get(`${this.baseUrl}user/getUserById/${userId}`).subscribe((result: any) => {
      this.prepopulateUserFrom(result);
    });
  }

  prepopulateUserFrom(userDetails: any) {
    const { user } = userDetails;
    console.log(user)
    this.getStatesByCountryId(user.country._id);
    this.getCitiesByStateId(user.state._id);
    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      emailId: user.emailId,
      mobileNumber: user.mobileNo,
      country: user.country._id,
      state: user.state._id,
      city: user.city._id,
    })
  }

}