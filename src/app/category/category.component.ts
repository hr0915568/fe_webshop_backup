import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getHeroes();    
  }

  getHeroes(): void {
    this.categoryService.getHeroes()
    .subscribe(categories => this.categories = categories);
    
  }

}
