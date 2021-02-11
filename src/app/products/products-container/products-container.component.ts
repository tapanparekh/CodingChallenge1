import { Component, OnInit } from '@angular/core';
import { Cart, Product } from '../product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  /** Variable for product list */
  public productList: Product[];
  /** Veriable for cart list */
  public cartList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
    this.cartList = this.productService.getCartList();
  }

  /** This method is used to edit cart */
  public editProduct(product: Product): void {
    this.productService.editCart(product);
    this.cartList = this.productService.getCartList();
  }

}
