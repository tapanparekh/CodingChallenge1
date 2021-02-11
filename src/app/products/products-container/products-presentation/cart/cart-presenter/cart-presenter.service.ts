import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartPresenterService {

  constructor() { }
  /** Method to remove a product from cart */
  public removeFromCart(product: Product): Product {
    product.addedToCart = false;
    return product;
  }
}
