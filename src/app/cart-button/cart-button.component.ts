import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
    cnt:number;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getCartCount();
  }



  getCartCount() {
    this.cnt = this.cart._getCartNumber();
    console.log(this.cnt);
    return this.cnt;
  }
}
