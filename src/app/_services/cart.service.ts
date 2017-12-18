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
      // console.log(this.AllProducts.length);
      for (var i = 0; i < this.AllProducts.length; i++) {
          // console.log(Number(this.AllProducts[i].price));
          this.TotalPrice += Number(this.AllProducts[i].price);
      }
      // console.log(this.TotalPrice);
      return this.TotalPrice;
     }

    _getcart() {
      return JSON.parse(localStorage.getItem('cart'));
    }

    _addtocart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
      for (var i = 0; i < products.length; i++) {
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


    _addtocart_notCorrect(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
        this.AllProducts = products;
        this.product = item;
        for (var i = 0; i < this.AllProducts.length; i++) {
          if (this.AllProducts[i].id == this.product.id) {
            this.AllProducts = productAdd;
            break;
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
  }
  

