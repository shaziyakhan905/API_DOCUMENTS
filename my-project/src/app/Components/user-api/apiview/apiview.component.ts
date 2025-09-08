import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-apiview',
  templateUrl: './apiview.component.html',
  styleUrls: ['./apiview.component.scss']
})
export class ApiviewComponent {

  baseUrl: string = "https://myfirstapp-api-v1en.onrender.com/api/";
  userDetails:any = {};

  constructor(private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute, 
    private authService:AuthService){
      this.activatedRoute.queryParams.subscribe((qparams:any)=>{
        console.log(qparams.id)
        this.getUserDetails(qparams.id)
      })
  }

  getUserDetails(userId:any){
     let headers = new HttpHeaders();
        headers = headers.append("authorization", `Bearer ${this.authService.getToken()}`);
        headers = headers.append("os", "windows");
    
    this.httpClient.get(`${this.baseUrl}user/getUserById/${userId}`,{headers:headers}).subscribe((result:any)=>{
      console.log(result)
      this.userDetails = result.user
    });
  };
}
