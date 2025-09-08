import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ProductsComponent,
    ProductViewComponent,
    CreateProductComponent,
   
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
