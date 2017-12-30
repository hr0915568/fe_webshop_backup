import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';
import {OrderService} from '../_services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products : Product[];
  total : number = 0;
  order: any = {};

  constructor(private cart: CartService,private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.getproductsforCart();
    this.getTotalPrice();
  }

  getproductsforCart() {
    this.products = this.cart._getcart()
   // console.log(this.products);
   return this.products;
   }


   getTotalPrice() {
    this.products = this.cart._getcart()
    for (let product of this.products) {
        this.total = this.total + product.price;
    }
   return this.total;
   }


   placeorder()
   {
     this.orderService.placeorder(
       this.order.street,
       this.order.streetno,
       this.order.streetnoadd,
       this.order.postalcode).subscribe(
         response => {
           console.log(response);
         },
       error => {
           console.log(error)
       }
     );
     console.log(this.order.street);
   }
}
