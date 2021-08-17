import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private _productService: ProductService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result => {
      console.log(result);
      this.products = result;
    }, error => {
      console.log(error);
    })
  }

  buyNow(product) {
    this._cartService.addToCart(product);
  }

}
