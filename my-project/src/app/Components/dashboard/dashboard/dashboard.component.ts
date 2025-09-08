import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { Notice } from 'src/app/interfaces/notice';
import { banners, notices, advertisements } from 'src/app/mocks/landing'
import { stocks } from 'src/app/mocks/oprations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bannersList: any = banners;
  noticesList: Notice[] = notices;
  advertisementsList: any = advertisements;
  stockList: any = stocks;

  // banner$ = this.httpClient.get("APIEndpoint");
  banner$ = of(banners);
  notice$ = of(notices);
  advertisements$ = of(advertisements);

  constructor(private httpClient:HttpClient){

  }
 

  ngOnInit(): void {
    this.makeMultipleApiCall();
    this.getUsersAndProducts();
  }

  makeMultipleApiCall() {
    forkJoin([this.banner$, this.notice$, this.advertisements$]).subscribe((result: any) => {
      console.log(result[0])
    });
  }

  getUsersAndProducts(){
    const userAPI$:Observable<any> = this.httpClient.get(`${environment.baseUrl}user/getAllUsers`);
    const productAPI$:Observable<any> = this.httpClient.get(`${environment.baseUrl}product/allProduct`);
     
    forkJoin([userAPI$,productAPI$]).subscribe((result: any) => {
      console.log(result);
    });
  }
}
