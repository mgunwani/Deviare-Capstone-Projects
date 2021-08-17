import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  constructor(private _cartSevice: CartService) { }

  ngOnInit(): void {
    this.cartItems = this._cartSevice.loadCartItems();
    console.log(this.cartItems);
  }

}
