import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, Product } from '../../product.model';

@Component({
  selector: 'app-products-presentation',
  templateUrl: './products-presentation.component.html',
  styleUrls: ['./products-presentation.component.css']
})
export class ProductsPresentationComponent implements OnInit {

  /** Input property for product */
  @Input() public productList: Product[];
  /** Input property for list of product added in cart */
  @Input() public cartList: Product[];
  /** Input property for available gold */
  @Input() public availableGold: number;
  /** Event emmitor to edit product */
  @Output() public editProduct: EventEmitter<Product>;
  constructor() {
    this.editProduct = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  /** Method to edit event */
  public updateCart(product: Product): void {
    this.editProduct.next(product);
  }

}
