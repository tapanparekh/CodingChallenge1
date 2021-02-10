import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { ProductPresenterService } from '../product-presenter/product-presenter.service';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css'],
  viewProviders: [ProductPresenterService]
})
export class ProductPresentationComponent implements OnInit {

  /** Input property for product details */
  @Input() public product: Product;
  /** Event emmitor to edit product */
  @Output() public updateCart: EventEmitter<Product>;
  constructor(private productPresenterService: ProductPresenterService) {
    this.updateCart = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  /** Add to cart method */
  public addToCartProduct(): void {
    this.updateCart.next(this.productPresenterService.addToCart(this.product));
  }

  /** Remove from cart method */
  public removeFromCartProduct(): void {
    this.updateCart.next(this.productPresenterService.removeFromCart(this.product));
  }
}
