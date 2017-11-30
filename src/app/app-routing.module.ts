import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CategoryComponent }      from './category/category.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HomeComponent }  from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: HeroDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products/:categoryid', component: ProductsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
