import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';
import { toArray } from 'rxjs/operators/toArray';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getproductsforCart();
  }

  getproductsforCart() {
  // let tempproducts = JSON.parse(this.cart._getcart());
  // this.products = toArray(tempproducts);
  this.products = this.cart._getcart1()
  console.log(this.products);
  
  // return this.products;  
  return this.products;
  }

}
