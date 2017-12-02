import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.categoryService.ge()
    //   .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
