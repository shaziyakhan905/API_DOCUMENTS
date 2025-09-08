import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { productResolver } from 'src/app/core/resolvers/product.resolver';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: 'product-view',
    component: ProductViewComponent,
    resolve: {
      product: productResolver
    },
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
    resolve: {
      product: productResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
