import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent {
    feedbackDetails:any = {};
    constructor(private activatedRoute:ActivatedRoute){
      this.activatedRoute.params.subscribe((result:any)=>{
        console.log(result);
        const selctedIndex = parseInt(result.index);
        this.getFeedbackByIndex(selctedIndex);
      })
    }

    getFeedbackByIndex(selctedIndex:number): void {
      const feedbackListFromLs = localStorage.getItem("feedback");
      if (feedbackListFromLs != null) {
        let result = JSON.parse(feedbackListFromLs);
        console.log(result[selctedIndex])
        this.feedbackDetails = result[selctedIndex];
      }
    }
}
