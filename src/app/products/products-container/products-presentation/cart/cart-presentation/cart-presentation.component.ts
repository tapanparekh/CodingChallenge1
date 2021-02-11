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
  /** Available gold */
  @Input() availableGold: number;
  /** Event emmitor to edit product */
  @Output() public updateCart: EventEmitter<Product>;
  /** Total */
  public total: number;
  constructor(private cartPresenterService: CartPresenterService) {
    this.updateCart = new EventEmitter<Product>();
    this.total = 0;
  }

  ngOnInit() {
  }

  /** Method to remove product from cart */
  public removeFromCartProduct(product: Product): void {
    this.updateCart.next(this.cartPresenterService.removeFromCart(product));
  }

  /** Amount check */
  public amountCheck(): boolean {
    this.total = 0;
    this.cartProductList.forEach(p => {
      this.total = this.total + p.price;
    });
    return this.total > this.availableGold;
  }

  /** Checkout */
  public checkOut(): void {
    alert('Done!')
  }
}
