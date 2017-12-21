import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from '../_models/product';

@Injectable()
export class CartService {
  producten : Product[];
  constructor() { }

    _getCartNumber() {
      var products =  this._getcart();
      return products.length;
    }

    _getcart() {
      var cartData = localStorage.getItem('cart');

      if(cartData == null) {
        cartData = "{}";
      }

      return JSON.parse(cartData);
    }


    _getcart1 () {
      var products =  this._getcart();
      for (var i = 0; i < products.length; i++) {
        console.log(products[i]);
        var temp2 = this.producten[i] = products[i];
      }
      console.log(this.producten);
      return this.producten;
    }

    _addtocart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
      for (var i = 0; i < products.length; i++) {
        console.log(products[i]);
        var temp2 = productAdd.push(products[i]);
      }
      localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      else
      {
        localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      this._getCartNumber();
    }
  }


