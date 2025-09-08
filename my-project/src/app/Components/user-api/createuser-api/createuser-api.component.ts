import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { every } from 'rxjs';
import { FormAction } from 'src/app/enums/actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-createuser-api',
  templateUrl: './createuser-api.component.html',
  styleUrls: ['./createuser-api.component.scss']
})
export class CreateuserApiComponent {
  FromAction = FormAction;
  apiForm: FormGroup
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  queryParams: any = {};
  actionType:string = "add";
  isSubmitted: boolean = false

  constructor(private router: Router,
    private httpClient: HttpClient,
    private activatedroute: ActivatedRoute,
    private toster: ToastrService) {

    this.apiForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      emailId: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      mobileNo: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
    });

    this.activatedroute.queryParams.subscribe((qprams: any) => {
      if (Object.keys(qprams).length > 0) {
        this.actionType = qprams.action;
        this.queryParams = qprams
        if (this.actionType == "edit") {
          this.getuserbyId(this.queryParams.id);
        };
      };
    });

    this.getAllCountries();
  }

  onSubmitted() {
    this.isSubmitted = true
    const apiDetails = this.apiForm.value;
    const payload = {
      firstName: apiDetails.firstName,
      lastName: apiDetails.lastName,
      emailId: apiDetails.emailId,
      mobileNo: apiDetails.mobileNo,
      countryId: apiDetails.country,
      stateId: apiDetails.state,
      cityId: apiDetails.city
    }
    console.log(payload);
    if (this.actionType == "add") {
      this.httpClient.post(`${environment.baseUrl}user/createUser`, payload).subscribe((result: any) => {
        console.log(result)
        this.toster.success("User created succesfully")
        this.router.navigate(['/poc/userapirecord'])
      });
    } else {
      this.httpClient.put(`${environment.baseUrl}user/updateUserById/${this.queryParams.id}`, payload).subscribe((result: any) => {
        console.log(result)
        this.toster.success("User updated succesfully")
        this.router.navigate(['/poc/userapirecord'])
      });
    }
  }

  getAllCountries() {
    this.httpClient.get(`${environment.baseUrl}address/countries`).subscribe((result: any) => {
      console.log(result);
      this.countryList = result;
    });
  };

  onCountrySelect(event: any) {
    let countryId = event.target.value;
    this.getStatesByCountryId(countryId);
  }

  getStatesByCountryId(countryId: any) {
    this.httpClient.get(`${environment.baseUrl}address/states/${countryId}`).subscribe((result: any) => {
      console.log(result)
      this.stateList = result;
    });
  }

  onStateSelect(event: any) {
    let stateId = event.target.value;
    this.getCitySelectByStateId(stateId)
  }

  getCitySelectByStateId(stateId: any) {
    this.httpClient.get(`${environment.baseUrl}address/cities/${stateId}`).subscribe((result:any) => {
      console.log(result)
      this.cityList = result
    });
  };

  onCitySelect(event: any) {
    let cityId = event.target.value;
  }

  get apiData() {
    return this.apiForm
  }
  getuserbyId(userId: any) {
    this.httpClient.get(`${environment.baseUrl}user/getUserById/${userId}`).subscribe((result) => {
      this.prepopulateapiForm(result)
    });
  };
  prepopulateapiForm(userDetails: any) {
    const { user } = userDetails;
    console.log(user)
    this.getStatesByCountryId(user.country._id),
      this.getCitySelectByStateId(user.state._id),
      this.apiForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        mobileNo: user.mobileNo,
        country: user.country._id,
        state: user.state._id,
        city: user.city._id
      });
  }
}




