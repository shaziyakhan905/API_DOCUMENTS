import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-apiproview',
  templateUrl: './apiproview.component.html',
  styleUrls: ['./apiproview.component.scss']
})
export class ApiproviewComponent implements OnInit {
  productDetails:any = {};

  constructor(private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient ){
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      const productId = result.id
      this.viewSelectedProduct(productId)
    });
  };

  viewSelectedProduct(productId:string){
    this.httpClient.get(`${environment.baseUrl}product/getProductById/${productId}`)
    .subscribe((result:any)=>{
      console.log(result)
      this.productDetails = result.singleProduct;

    })

  }

}
