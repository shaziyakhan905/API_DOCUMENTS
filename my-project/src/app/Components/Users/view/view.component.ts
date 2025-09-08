import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  userDetails: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.getUserDetails(params.id);
    })
  }
  getUserDetails(userId: any) {
    this.httpClient.get(`${this.baseUrl}user/getUserById/${userId}`).subscribe((result: any) => {
      console.log(result);
      this.userDetails = result.user;
    });

  }

}
