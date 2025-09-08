import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {


  productForm: FormGroup;
  isSubmitted: boolean = false
  actionType: string = "";
  productId: string = "";

  constructor(private httpClient: HttpClient,
    private router: Router,
    private activatedrout: ActivatedRoute) {
    this.productForm = new FormGroup({

      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      status: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.activatedrout.queryParams.subscribe((qParams: any) => {
      console.log(qParams)
      // const actionType = qParams.actionType;
      this.actionType = qParams.actionType;
      this.productId = qParams.id;
      this.prePopulateData();
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    const formdata = this.productForm.value;
    const { status, ...restValue } = formdata;
    console.log(formdata)
    const payload = {
      ...restValue,
      isActive: status
    }
    if (this.actionType == "add") {
      this.httpClient.post(`${environment.baseUrl}product/createProduct`, payload).subscribe((result: any) => {
        console.log(result)
        this.router.navigate(['/poc/apihome'])
      });
    } else if (this.actionType == "edit") {
      console.log("Edit block executed");
      this.httpClient.put(`${environment.baseUrl}product/updateProductById/${this.productId}`, payload)
        .subscribe((result: any) => {
          console.log(result);
          this.router.navigate(['/poc/apihome'])
        });
    };
  };

  prePopulateData() {
    this.httpClient.get(`${environment.baseUrl}product/getProductById/${this.productId}`)
      .subscribe((result: any) => {
        console.log(result)
        const product = result.singleProduct;
        this.productForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          brand: product.brand,
          stock: product.stock,
          status: product.isActive
        });
      });

  };

  get productData() {
    return this.productForm
  };
}
