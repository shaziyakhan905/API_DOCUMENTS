import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  userList: any = {};
  isLoading:boolean = false;

  constructor(private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient){
      this.activatedRoute.params.subscribe((params:any)=>{
        console.log(params.id)
        this.getUserDetails(params.id)
      });
    }
    getUserDetails(userId:any){
      this.isLoading = true;
      this.httpClient.get(`${this.baseUrl}user/getUserById/${userId}`).subscribe((result:any)=>{
        console.log(result)
      this.userList = result.user
      this.isLoading = false;
      });
    }

  }


