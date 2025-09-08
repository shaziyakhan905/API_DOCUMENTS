import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-api-home',
  templateUrl: './api-home.component.html',
  styleUrls: ['./api-home.component.scss']
})
export class ApiHomeComponent implements OnInit {
  productList: any[] = [];
  

  constructor(private router: Router,
    private httpClient: HttpClient,
    private toaster: ToastrService) {
  }
  ngOnInit(): void {
    this.getAllProductData()
  }

  onClickToNavigate() {
    
     this.router.navigate(['/poc/productform'],
      { queryParams: { actionType: 'add' } });
  }

  getAllProductData() {
    this.httpClient.get(`${environment.baseUrl}product/allProduct`).subscribe((result: any) => {
      console.log(result)
      this.productList = result.allProduct
    });
  }

  onDeleteProduct(product: any) {
    const confirmation = confirm(" are you sure want to delete it");
    if (confirmation) {
      const productId = product._id
      this.httpClient.delete(`${environment.baseUrl}product/deleteProductById/${productId}`)
        .subscribe((result: any) => {
          console.log(result)
          this.toaster.success("Detail removed succesfully")
          this.getAllProductData();
        });
    };
  }

  goToViewpage(product: any) {
    console.log(product._id);
    this.router.navigate(['/poc/apiproview'], { queryParams: { id: product._id } });
  }

  updateProduct(product: any) {
    const productId = product._id
    this.router.navigate(['/poc/productform'],
      { queryParams: { id: productId, actionType: 'edit' } });
  };

}
