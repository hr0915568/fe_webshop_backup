import { Component, OnInit,Input } from '@angular/core';
// simport { Category } from '../../shared/category.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout-category',
  templateUrl: './layout-category.component.html',
  styleUrls: ['./layout-category.component.scss']
})
export class LayoutCategoryComponent implements OnInit {
  test = [
    {
      "categori_id": 1,
      "name": "Lights"
    },
    {
      "categori_id": 2,
      "name": "BRAaaaaM"
    },
    {
      "categori_id": 3,
      "name": "Steering Wheels"
    },
    {
      "categori_id": 4,
      "name": "Tires"
    },
    {
      "categori_id" : 5,
      "name": "Wheels"
    },
    {
      "categori_id" : 6,
      "name": "Test"
    },
    {
      "categori_id" : 7,
      "name": "123Wheels"
    }
  ];
  // @Input() category: Category;
  // @Input() categories: Category[];
  
  constructor(    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }

}
