import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, Product } from 'src/app/products/product.model';
import { CartPresenterService } from '../cart-presenter/cart-presenter.service';

@Component({
  selector: 'app-cart-presentation',
  templateUrl: './cart-presentation.component.html',
  styleUrls: ['./cart-presentation.component.css'],
  viewProviders: [CartPresenterService]
})
export class CartPresentationComponent implements OnInit {
  /** List of product added in cart */
  @Input() cartProductList: Product[];
  /** Event emmitor to edit product */
  @Output() public updateCart: EventEmitter<Product>;
  constructor(private cartPresenterService: CartPresenterService) {
    this.updateCart = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  /** Method to remove product from cart */
  public removeFromCartProduct(product: Product): void {
    this.updateCart.next(this.cartPresenterService.removeFromCart(product));
  }
}
