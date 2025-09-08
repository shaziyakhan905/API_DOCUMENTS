import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-1',
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.scss']
})
export class Form1Component {
interviewForm: FormGroup;
  isSubmitted:boolean = false;
  errorMessage:any = {
    required:"This field is required",
    minlength:"Please enter minimum 5 charectors",
    emailValidationMessage:"Please enter valid email id",
  }
  constructor(private toastrService: ToastrService, private router:Router){

      this.interviewForm = new FormGroup({
          interviewTitle : new FormControl("",[Validators.required,Validators.minLength(5)]),
          jobTitle : new FormControl("",[Validators.required]),
          candidateName: new FormControl("",[Validators.required]),
          location:new FormControl("",[Validators.required]),
          mobileNumber : new FormControl(""),
          emailId :new FormControl("",[Validators.required,Validators.email]),
          interviewerName :new FormControl("",[Validators.required]),
          interviewDateTime : new FormControl("",[Validators.required]),
        })
  }

  get f():FormGroup{
    return this.interviewForm
  }

  onFormsubmit(){
    console.log(this.interviewForm.invalid)
    this.isSubmitted = true;
    if(this.interviewForm.invalid){
      return
    }
    const formValue = this.interviewForm.value;
    formValue['interviewDateTime'] = new Date(formValue.interviewDateTime)
    console.log(formValue);
    this.setInterviewDataInLS(formValue);
  }

  setInterviewDataInLS(data:any):void{
    const dataFromLS:any = localStorage.getItem('interviewList');
    if(dataFromLS != null || dataFromLS != undefined){
      let tempResult:any = JSON.parse(dataFromLS);
      tempResult.push(data);
      const finalResult = JSON.stringify(tempResult);
      localStorage.setItem('interviewList',finalResult);
      this.toastrService.success("Interview is created","Interview");
      this.router.navigate(['/interview-details']);
    }else{
      const finalResult = JSON.stringify([data]);
      localStorage.setItem('interviewList',finalResult);
      this.toastrService.success("Interview is created","Interview");
      this.router.navigate(['/interview-details']);
    }
  }
}
