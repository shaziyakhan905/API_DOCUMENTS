import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  filteredFeedbacks: any[] = [];
  availableFeedbacks: any[] = [];
  searchText: string = "";
  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private httpClient: HttpClient,
  private authService:AuthService) {
    this.getFeedbackDetailsFromLs();
  }

  getFeedbackDetailsFromLs(): void {
    const feedbackListFromLs = localStorage.getItem("feedback");
    if (feedbackListFromLs != null) {
      let result = JSON.parse(feedbackListFromLs);
      this.availableFeedbacks = result;
      this.filteredFeedbacks = this.availableFeedbacks;
    }
  }

  deleteFeedback(index: number): void {
    if (confirm("Are you sure want to proceed?")) {
      const dataFromLS: any = localStorage.getItem('feedback');
      if (dataFromLS != null) {
        let result: any = JSON.parse(dataFromLS);
        result.splice(index, 1);
        const finalResult = JSON.stringify(result);
        localStorage.setItem('feedback', finalResult);
        const headers = this.authService.getRequestHeaders();
        // this.getFeedbackDetailsFromLs();
        this.httpClient.delete('https://dummyjson.com/docs/posts/65464',{headers:headers}).subscribe((response: any) => {
          console.log(response)
        })
        this.toastrService.error("Record deleted successfully", "Confirmation");
      }
    }
  }

  navigateToViewfeedback(index: number): void {
    //navigate to view feedback component using router service
    this.router.navigate([`/feedback-view/${index}`])
  }
  navigateToCreateOrEditfeedback(slectedIndex: number): void {
    //navigate to view feedback component using router service
    this.router.navigate(['/poc/create-feedback'], { queryParams: { index: slectedIndex, action: "edit" } });
  }

  searchFeedbacks(event: any) {
    const searcText: string = this.searchText.toLowerCase();
    console.log(searcText);
    if (searcText.length > 0) {
      const result = this.availableFeedbacks.filter((el: any) => {
        return el.name.toLowerCase().includes(searcText);
      });
      this.filteredFeedbacks = result;
    } else {
      this.filteredFeedbacks = this.availableFeedbacks;
    }
  }

  clearSearch() {
    this.searchText = "";
    this.filteredFeedbacks = this.availableFeedbacks;
  }
}
