import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class CartService {

  constructor(private _cookieService:CookieService) { }

  setCooki(){
    return this._cookieService.put('test','testvalue');
  }
}
