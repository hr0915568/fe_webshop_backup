import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CategoryComponent }      from './category/category.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HomeComponent }  from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {CategoryProductsListComponent} from './category-products-list/category-products-list.component';
import {SiteLayoutComponent} from "./_layouts/site-layout/site-layout.component";
import {MyaccountLayoutComponent} from "./_layouts/myaccount-layout/myaccount-layout.component";
import {LoginComponent} from "./login/login.component";
import {MyAccountComponent} from './my-account/my-account.component';
import {AuthGuard} from './_services/auth-guard.service';
import {SearchComponent} from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RegisterComponent} from './register/register.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'details/:id', component: HeroDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/:id', component: CategoryProductsListComponent },
      // { path: 'products/:categoryid', component: ProductsComponent},
      { path: 'search/:keywords', component: SearchComponent},
      { path: 'search', component: SearchComponent},
      { path: 'cart', component :CartComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'product/:id', component: ProductsComponent}
    ]
  },
  {
    path: '',
    component: MyaccountLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'myaccount', component: MyAccountComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'invoices', component: InvoicesComponent},
      { path: 'profile', component: ProfileComponent},
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
