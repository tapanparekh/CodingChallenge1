import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Injectable()
export class ProductPresenterService {

  constructor() { }

  /** Method to add a product in cart */
  public addToCart(product: Product): Product {
    product.addedToCart = true;
    return product;
  }

  /** Method to remove a product from cart */
  public removeFromCart(product: Product): Product {
    product.addedToCart = false;
    return product;
  }

}
