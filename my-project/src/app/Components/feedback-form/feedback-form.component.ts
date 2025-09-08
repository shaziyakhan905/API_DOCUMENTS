import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {

  filterstateList: any[] = [];
  filterCityList: any[] = [];
  filterAreaList: any[] = [];

  countriesList = [
    { countryId: 1, name: "India" },
    { countryId: 2, name: "United States" },
    { countryId: 3, name: "Australia" }
  ];

  allstatesList = [
    { id: 1, countryId: 1, name: "Maharashtra" },
    { id: 2, countryId: 1, name: "Gujarat" },
    { id: 3, countryId: 2, name: "California" },
    { id: 4, countryId: 2, name: "Texas" },
    { id: 5, countryId: 3, name: "New South Wales" },
    { id: 6, countryId: 3, name: "Victoria" }
  ];

  allCitiesList = [
    { id: 1, stateId: 1, name: "Mumbai" },
    { id: 2, stateId: 1, name: "Pune" },
    { id: 3, stateId: 2, name: "Ahmedabad" },
    { id: 4, stateId: 2, name: "Surat" },
    { id: 5, stateId: 3, name: "Los Angeles" },
    { id: 6, stateId: 3, name: "San Francisco" },
    { id: 7, stateId: 4, name: "Houston" },
    { id: 8, stateId: 4, name: "Dallas" },
    { id: 9, stateId: 5, name: "Sydney" },
    { id: 10, stateId: 5, name: "Newcastle" },
    { id: 11, stateId: 6, name: "Melbourne" },
    { id: 12, stateId: 6, name: "Geelong" }
  ];

  allAreaList = [
    { id: 1, cityId: 1, name: "Andheri" },
    { id: 2, cityId: 1, name: "Bandra" },
    { id: 3, cityId: 2, name: "Shivajinagar" },
    { id: 4, cityId: 2, name: "Kothrud" },
    { id: 5, cityId: 3, name: "Navrangpura" },
    { id: 6, cityId: 3, name: "Maninagar" },
    { id: 7, cityId: 4, name: "Adajan" },
    { id: 8, cityId: 4, name: "Vesu" },
    { id: 9, cityId: 5, name: "Hollywood" },
    { id: 10, cityId: 5, name: "Venice" }
  ];

  feedbackForm: FormGroup;
  isSubmitted:boolean = false

  queryParams:any = null;
  feedbackDetails:any = null;
  formTitle:string = "";
  constructor(
    private toastrService: ToastrService,
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient,
    private authService:AuthService) {

    this.feedbackForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      emailAddress: new FormControl("",[Validators.required]),
      mobileNumber: new FormControl("",[Validators.required]),
      country: new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      area: new FormControl("",[Validators.required])
    });

    this.activatedRoute.queryParams.subscribe((qParams:any)=>{
      console.log(qParams)
      this.queryParams = qParams;
    });

    if(this.queryParams.action == "edit"){
      this.formTitle = "Update Feedback";
      const feedbackListFromLs = localStorage.getItem("feedback");
      if (feedbackListFromLs != null) {
        let result = JSON.parse(feedbackListFromLs);
        const selectedIndex = parseInt(this.queryParams.index)
        this.feedbackDetails = result[selectedIndex];
        this.onCountrySelect(null, this.feedbackDetails.country);
        this.onStateSelect(null, this.feedbackDetails.state);
        this.onCitySelect(null, this.feedbackDetails.city);

        //update from controls
        this.feedbackForm.patchValue({
          name:this.feedbackDetails.name,
          emailAddress:this.feedbackDetails.emailAddress,
          mobileNumber:this.feedbackDetails.mobileNumber,
          country:this.feedbackDetails.country,
          state:this.feedbackDetails.state,
          city:this.feedbackDetails.city,
          area:this.feedbackDetails.area,
        })
      }
    }else{
      this.formTitle = "Create New Feedback";
    }

  }


  onsubmit() {
    this.isSubmitted = true;
    if(this.feedbackForm.valid){
      const feedbackDetails = this.feedbackForm.value
      console.log(feedbackDetails)
      // this.setFeedbackDetailsInLs(feedbackDetails);
      //make an api call send data as payload to api using post methid
       const headers = this.authService.getRequestHeaders();
      this.httpClient.post('https://dummyjson.com/docs/posts',feedbackDetails,{headers:headers}).subscribe((response:any)=>{
        console.log(response)
      })
      // this.router.navigate(["/poc/feedback"]);
    }
  
  }

  setFeedbackDetailsInLs(newFeedback: any) {
    let finalPayload = {...newFeedback};
    finalPayload["countryName"] = this.countriesList.find((element)=> element.countryId == newFeedback.country)?.name;
    finalPayload["stateName"] = this.allstatesList.find((element)=> element.id == newFeedback.state)?.name;
    finalPayload["cityName"] = this.allCitiesList.find((element)=> element.id == newFeedback.city)?.name;
    finalPayload["areaName"] = this.allAreaList.find((element)=> element.id == newFeedback.area)?.name;

    const feedbackFromLs = localStorage.getItem("feedback");
  
    if (feedbackFromLs != null) {
      const latestFeedback = JSON.parse(feedbackFromLs);
      if(this.queryParams.action == "edit"){
        const selectedIndex = parseInt(this.queryParams.index);
        //perform update logic
        finalPayload["createdAt"] = latestFeedback[selectedIndex].createdAt;
        finalPayload["updatedAt"] = new Date();
        latestFeedback.splice(selectedIndex, 1, finalPayload);
        this.toastrService.success("Feedback updated successfully","Confirmation");
      }else{
        finalPayload["createdAt"] = new Date();
        finalPayload["updatedAt"] = new Date();

        latestFeedback.push(finalPayload);
        this.toastrService.success("New feedback created successfully","Confirmation");
      }
      const result = JSON.stringify(latestFeedback);
      localStorage.setItem("feedback", result);
      this.router.navigate(["/feedback"]);
    } else {
      finalPayload["createdAt"] = new Date();
      finalPayload["updatedAt"] = new Date();
      const result = [finalPayload];
      const finalResult = JSON.stringify(result);
      localStorage.setItem("feedback", finalResult);
      this.toastrService.success("New feedback created successfully","Confirmation");
      this.router.navigate(["/poc/feedback"]);
    }
  }

  onCountrySelect(event: any, countryCode?:number) {
    let countryId:any = null; 
    if(event != null){
      countryId = event.target.value;
    }else{
      countryId = countryCode;
    }
    this.filterstateList = this.allstatesList.filter((state) => {
      return state.countryId == countryId

    });
    this.filterCityList = [];
    this.filterAreaList = [];
  }

  onStateSelect(event: any, stateCode?:number) {
    let stateId:any = null;
    if(event != null){
      stateId = event.target.value;
    }else{
      stateId = stateCode;
    }
    this.filterCityList = this.allCitiesList.filter((city) => {
      return city.stateId == stateId

    });
    this.filterAreaList = [];
  }

  onCitySelect(event: any, cityCode?:number) {
    let cityId:any = null;
    if(event != null){
      cityId = event.target.value;
    }else{
      cityId = cityCode;
    }
    this.filterAreaList = this.allAreaList.filter((area) => {
      return area.cityId == cityId
    });
  }

  get feedbackDataForm(){
    return this.feedbackForm
  }

}



