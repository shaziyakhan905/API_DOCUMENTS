import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  userList: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  private BreadcrumsService:BreadcrumsService) {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id)
      this.getUserDetails(params.id)
    });
  }
  ngOnInit(): void {
    this.BreadcrumsService.setBreadcrums(BREADCRUMS.user.view)
  }
  getUserDetails(userId: any) {
    this.httpClient.get(`${this.baseUrl}user/getUserById/${userId}`).subscribe((result: any) => {
      console.log(result)
      this.userList = result.user
    });
  }
  ngOnDestroy(){
    this.BreadcrumsService.setBreadcrums([])
  }

}
