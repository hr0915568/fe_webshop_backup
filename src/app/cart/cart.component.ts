import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    this.setCooki();
  }

  setCooki(){
    return this._cookieService.put('test','testvalue');
  }
}
