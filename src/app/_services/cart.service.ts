import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from '../_models/product';

@Injectable()
export class CartService {
  product : Product;
  AllProducts : Product[];
  test : Product;
  TotalPrice: number = 0.0;

  constructor() { }

     _getCartNumber() {
      var products =  this._getcart();
      if (products === null) {
      return 0;}
      else {
      return products.length;
      }
    }

    _getCartTotPrice():number {
      this.AllProducts = this._getcart()
      if (this.AllProducts !== null) {
      for (var i = 0; i < this.AllProducts.length; i++) {
          this.TotalPrice += Number(this.AllProducts[i].price);
      }
      return this.TotalPrice;
     }
     else {
       return 0.0;
     } 
     }

    _getcart() {
      return JSON.parse(localStorage.getItem('cart'));
    }

    _addtocart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
        this.AllProducts = products;
        this.product = item;
        for (var i = 0; i < this.AllProducts.length; i++) {
          if (this.AllProducts[i].id == this.product.id) {
            continue;
          }
          else {
            var temp2 = productAdd.push(this.AllProducts[i]);
          }
        }
      localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      else 
      {
        localStorage.setItem('cart',JSON.stringify(productAdd));
      }
    }

    _deletefromcart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      console.log(products.length);
      let newArray = new Array();
      if (products !== null && products.length > 1) {
        this.AllProducts = products;
        this.product = item;
        for (var i = 0; i < this.AllProducts.length; i++) {
          if (this.AllProducts[i].id !== this.product.id) {
            var temp2 = newArray.push(this.AllProducts[i]);
          }
          else {
            continue;
          }
        }
      localStorage.setItem('cart',JSON.stringify(newArray));
      }
      else 
      {
        localStorage.removeItem('cart');
      }
    }

    _clearCart() {
      localStorage.removeItem('cart');
    }
  }
  

