import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http'


import { ProductService }  from '../product.service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';

import { Jsonp,RequestOptions } from '@angular/http';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {Product} from '../_models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products: Product= new Product();
 products: Product[] = new Array<Product>();


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient) { }



  ngOnInit() {
    const categoryid = +this.route.snapshot.paramMap.get('categoryid');
    this.productService.getProducts(categoryid)
    .subscribe(products => this.products  = products);
  }


  getProducts(): void {

    const categoryid = +this.route.snapshot.paramMap.get('categoryid');
    this.productService.getProducts(categoryid)
    .subscribe(products => this.products  = products);
    // this.products = Array.of(this.products);



  }



}
