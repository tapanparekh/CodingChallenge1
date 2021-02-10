import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  /**Variable for product list */
  public productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
  }

  /** This method is used to edit cart */
  public editProduct(product: Product): void {
    this.productService.editCart(product);
  }
}
