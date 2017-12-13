import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getCartCount();
  }


  getCartCount() {
    var cnt = this.cart._getCartNumber();
    console.log(cnt);
    return cnt;
  }
}
