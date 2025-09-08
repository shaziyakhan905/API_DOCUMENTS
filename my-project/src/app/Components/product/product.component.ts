import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productList: any[] = [];
  cart: any[] = [];

  selectedProductIds: any[] = [];
  isLoading:boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute
  ) {
    this.getDataFromAPI();
  }

  async getDataFromAPI() {
    try {
     this.isLoading = true;
     setTimeout(async()=>{
       const DataFromAPI = await fetch('https://dummyjson.com/products')
      const result = await DataFromAPI.json();
      console.log(result)
      this.productList = result.products.map((ele: any) => (
        {
          ...ele,
          quantity: 0
        }
      ));
      this.isLoading = false;
    },3000)
    }
    catch (error) {
      console.log(error)
    }

  }

  increase(index: number) {
    this.productList[index].quantity++;
  }

  decrease(index: number) {
    if (this.productList[index].quantity > 0) {
      this.productList[index].quantity--;
    }
  }

  addToCart(item: any) {
    console.log(item);
    if (this.selectedProductIds.includes(item.id)) {
      return
    } else {
      this.selectedProductIds.push(item.id);
    }
  }

  proceedToCheckOut() {
    const result = this.productList.filter((product: any) => {
      if (this.selectedProductIds.includes(product.id)) {
        return product
      }
    });
    console.log(result);
    const selectedItems = JSON.stringify(result);
    localStorage.setItem('checkoutItems',selectedItems)
     this.router.navigate(["/poc/checkout"]);

  }
}
