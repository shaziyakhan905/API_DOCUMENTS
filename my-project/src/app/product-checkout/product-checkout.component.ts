import { Component } from '@angular/core';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent {
  checkoutList: any[] = [];
  totalPrice = 0
  itemTotals: number = 0;
  subtotal: number = 0

  deliveryCharges: number = 0;
  promotionDiscount: number = 10;
  finalTotal: number = 0;

  constructor() {
    this.getCheckoutItemFromLS();
  }

  getCheckoutItemFromLS() {
    const dataFromLs = localStorage.getItem('checkoutItems');
    if (dataFromLs != null) {
      const data = JSON.parse(dataFromLs);
      this.checkoutList = data.map((el: any) => {
        el['itemTotal'] = el.quantity * el.price;
        return el;
      });

      this.calculateOrderSummary();
    }
  }

  calculateOrderSummary() {
    const allItemTotal = this.checkoutList.reduce((total: number, currentItem: any) => {
      return total + currentItem.price
    }, 0);
    this.itemTotals = allItemTotal;
    this.finalTotal = (this.itemTotals + this.deliveryCharges) - this.promotionDiscount;
  }

}
