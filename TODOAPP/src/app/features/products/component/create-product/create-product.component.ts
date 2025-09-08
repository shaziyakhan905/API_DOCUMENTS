// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environments } from 'src/environments/enviroments';
import { CommonHttpService } from 'src/app/core/services/common-http.service';
import { BreadcrumsService } from 'src/app/core/services/breadcrums.service';
import { BREADCRUMS } from 'src/app/core/constants/breadcrums';
import { NotifyService } from 'src/app/core/services/notify.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  productForm: FormGroup;
  isSubmitted: boolean = false
  actionType: string = "";
  productId: string = "";
  productDetails: any = {};

  constructor(private commonHttp: CommonHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumsService: BreadcrumsService,
    private notifyService:NotifyService) {
    this.productForm = new FormGroup({

      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      status: new FormControl(),
    });
    this.setProductDataFromResolver();
  }

  ngOnInit(): void {
    this.prePopulateData();
    this.breadcrumsService.setBreadcrums(BREADCRUMS.product.create)
  }

  setProductDataFromResolver() {
    this.activatedRoute.data.subscribe((resolverData: any) => {
      if (resolverData.product != null) {
        const productData = resolverData?.product?.singleProduct;
        // console.log(productData)
        this.productDetails = productData
        this.productId = productData._id;
        this.prePopulateData();
        this.actionType = "edit";
      } else {
        this.actionType = "add"
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.productForm.invalid) return
    const formdata = this.productForm.value;
    const { status, ...restValue } = formdata;
    console.log(formdata)
    const payload = {
      ...restValue,
      isActive: status
    };

    if (this.actionType == "add") {
      this.commonHttp.post(`${environments.baseUrl}product/createProduct`, payload).subscribe((result: any) => {
        this.router.navigate(['/landing/products'])
        this.notifyService.showSuccess('Product Created successfully',"")
      });
    } else if (this.actionType == "edit") {
      // console.log("Edit block executed");
      this.commonHttp.put(`${environments.baseUrl}product/updateProductById/${this.productId}`, payload)
        .subscribe((result: any) => {
          this.router.navigate(['/landing/products'])
          this.notifyService.showSuccess('Product updated successfully',"")
        });
    };
  };

  prePopulateData() {
    const product = this.productDetails;
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      status: product.isActive
    });
  };

  get productData() {
    return this.productForm
  };

  ngOnDestroy(): void {
    this.breadcrumsService.setBreadcrums([])
  }

}
