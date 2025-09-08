import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { environments } from 'src/environments/enviroments';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  page: number = 1;
  limit: number = 5;
  profileImgageUrl: string = "../../../../../assets/images/profile-image.jpg"

  constructor(private router: Router,
    private commonHttpService: CommonHttpService,
    private notifyService: NotifyService,
    private breadcrumsService: BreadcrumsService,
  ) {
  }
  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.product.list)
    this.getAllProductData()
  }

  onClickToNavigate() {
    this.router.navigate(['/landing/products/create-product'],
      { queryParams: { actionType: 'add' } });
  }

  getAllProductData() {
    this.commonHttpService.get(`${environments.baseUrl}product/allProduct`).subscribe((result: any) => {
      this.productList = result.allProduct
    });
  }
  
  onDeleteProduct(product: any) {
    const confirmation = confirm(" are you sure want to delete it");
    if (confirmation) {
      const productId = product._id
      this.commonHttpService.delete(`${environments.baseUrl}product/deleteProductById/${productId}`)
        .subscribe((result: any) => {
          console.log(result)
          this.notifyService.showError("Delete Confirmation", "Detail removed succesfully")
          this.getAllProductData();
        });
    };
  }

  goToViewpage(product: any) {
    console.log(product._id);
    this.router.navigate(['/landing/products/product-view'], { queryParams: { id: product._id } });
  }

  updateProduct(product: any) {
    const productId = product._id
    console.log(productId)
    this.router.navigate(['/landing/products/create-product'],
      { queryParams: { id: productId, actionType: 'edit' } });
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  }

}
