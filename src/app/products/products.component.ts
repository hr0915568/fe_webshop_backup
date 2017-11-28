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
  // products: Product[];
  producten: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient) { }

    

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void {
    const parent_id = +this.route.snapshot.paramMap.get('parent_id');
    this.productService.getProducts(parent_id)
    .map(result => result as Product[])
    .subscribe(result => this.producten = result);
  }
  

}
