import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from '../_models/product';

@Injectable()
export class CartService {

  constructor() { }

    _getCartNumber() {
      return localStorage.getItem('cart').length;
    }

    _getcart() {
      return JSON.parse(localStorage.getItem('cart'));
    }


    _getcart1 () {
      return localStorage["cart"];
    }

    _addtocart(item) {
      let productAdd = new Array(Product);
      productAdd = item;
      var products =  new Array(this._getcart());
      var temp = products.push(productAdd);
      console.log("products"+ products);
      console.log("temp" + temp);
      console.log("test" + products[0]);
      if (products.length < 0 || products[0] === null) {
        localStorage.setItem('cart', JSON.stringify(productAdd));
      }
      else {
        localStorage.setItem('cart', JSON.stringify(products));
       }
  }
  
}
