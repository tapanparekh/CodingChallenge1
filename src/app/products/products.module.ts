import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductsPresentationComponent } from './products-container/products-presentation/products-presentation.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPresentationComponent } from './products-container/products-presentation/product/product-presentation/product-presentation.component';
import { CartPresentationComponent } from './products-container/products-presentation/cart/cart-presentation/cart-presentation.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsPresentationComponent,
    ProductPresentationComponent,
    CartPresentationComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductsModule { }
