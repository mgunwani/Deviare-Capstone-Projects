import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  constructor(private _cartSevice: CartService,
    private _router: Router) { }

  ngOnInit(): void {
    this.cartItems = this._cartSevice.loadCartItems();
    console.log(this.cartItems);
  }

  cartEmpty() {
    this._cartSevice.clearCartItems();
    alert('Cart is cleared now.')
    this._router.navigate(['/products']);
  }

  removeCartItem(id) {
    for (var i = 0; i < this.cartItems.length; i++) {
      let item = this.cartItems[i];
      if (item.id == id) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

  }

}
