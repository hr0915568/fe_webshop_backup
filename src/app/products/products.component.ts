import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product }         from '../product';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // @Input() product: Product[];
  product : any;
  test = [{
    game : "Deus Ex: Mankind Divided",
    platform: " Xbox One, PS4, PC",
    release : "August 23"
},
{
    game : "Hue",
    platform: " Xbox One, PS4, Vita, PC",
    release : "August 23"
},
{
    game : "The Huntsman: Winter's Curse",
    platform: "PS4",
    release : "August 23"
},
{
    game : "The Huntsman: Winter's Curse",
    platform: "PS4",
    release : "August 23"
}]

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

    

  ngOnInit() :void {
    this.getProducts();
  }

  // getProduct(): void {
  //   const parent_id = +this.route.snapshot.paramMap.get('parent_id');
  //   this.productService.getProduct(parent_id)
  //     .subscribe(product => this.product = product);
  // }

  // getProducts(): void {
  //   this.productService.getProducts()
  //   .subscribe(product => this.product = product);
  // }

  getProducts(): void {
    const parent_id = +this.route.snapshot.paramMap.get('parent_id');
    this.productService.getProducts(parent_id)
      .subscribe(product => this.product = product);
  }

}
