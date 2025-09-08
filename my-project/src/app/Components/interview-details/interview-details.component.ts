import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent {
  interviewData: any[]= [];
  interviewDetails:any = {};
  constructor(private toastrService: ToastrService){
    this.getInterviewDataFromLS();
  }

  getInterviewDataFromLS(){
    const dataFromLS:any = localStorage.getItem('interviewList');
    if(dataFromLS != null || dataFromLS != undefined){
      let result:any = JSON.parse(dataFromLS);
      this.interviewData = result;
    }
  }

  deleteInterviewDataFromLS(index:number):void{
    if(confirm("Are you sure want to proceed?")){
      const dataFromLS:any = localStorage.getItem('interviewList');
      if(dataFromLS != null){
        let result:any = JSON.parse(dataFromLS);
        result.splice(index, 1);
        const finalResult = JSON.stringify(result);
        localStorage.setItem('interviewList',finalResult);
  
        this.getInterviewDataFromLS();
        this.toastrService.error("Record deleted successfully","Confirmation");
      }
    }
  }

  viewInterview(item:any){
    this.interviewDetails = item;
  }
}
