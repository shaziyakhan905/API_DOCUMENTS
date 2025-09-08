// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environments } from 'src/environments/enviroments';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  productDetails: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private CommonHttp: CommonHttpService,
    private breadcrumsService: BreadcrumsService) {
    this.setProductDetailsFromResolver();
  };

  setProductDetailsFromResolver(): void {
    this.activatedRoute.data.subscribe((resolverData: any) => {
      const productData = resolverData?.product?.singleProduct;
      this.productDetails = productData;
    });
  };

  ngOnInit(): void {
    this.breadcrumsService.setBreadcrums(BREADCRUMS.product.list)
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  }

}
