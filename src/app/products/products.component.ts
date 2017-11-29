import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http'

import { Product }         from '../product';
import { ProductService }  from '../product.service';

import 'rxjs/add/operator/map'

import { Jsonp,RequestOptions } from '@angular/http';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products: Product[];
 resultes: Product[];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient) { }

    

  ngOnInit() {
    // JSON.stringify(this.getProducts());
    this.getProducts();
    console.log('test' + JSON.stringify(this.products));
  }


  getProducts(): void {
    const categoryid = +this.route.snapshot.paramMap.get('categoryid');
    this.productService.getProducts(categoryid)
    .subscribe(products => this.products  = products);
    // this.products = Array.of(this.products);
    
    
    
  }



}
