import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from './_models/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

 // URL to web api
  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

 /** GET heroes from the server */
 getProducts (categoryid: number): Observable<Product[]> {
  const url = `${this.productsUrl}`;
  // const url = `${this.productsUrl}/${categoryid}`;
  // const url = 'http://api.hrwebshop.tk/admin/products';
  return this.http.get<Product[]>(url)
    .pipe(
      map(products => products),
    tap(products => this.log(`fetched product categoryid=${categoryid}`)),
    catchError(this.handleError<Product[]>(`getProducts categoryid=${categoryid}`))
  );
  }

// getProducts(): Observable<Product[]> {
//   console.log('getting customers...');
//   const url = 'http://api.hrwebshop.tk/admin/products';
//   return this.http.get<Product[]>(url,  {
//     withCredentials: true,
//     headers: new HttpHeaders()
//       .set('Content-type', 'text/plain')

//   }).pipe(
//     tap(products => console.log(`fetched products`)),
//     catchError(this.handleError('getHeroes', []))
//   );
// }


  /** GET hero by id. Will 404 if id not found */
  getProduct(categoryid: number): Observable<Product> {
    const url = `${this.productsUrl}/${categoryid}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched products id=${categoryid}`)),
      catchError(this.handleError<Product>(`getProduct id=${categoryid}`))
    );
  }

  getHeroNo404<Data>(categoryid: number): Observable<Product> {
    const url = `${this.productsUrl}/?categoryid=${categoryid}`;
    return this.http.get<Product[]>(url)
      .pipe(
        map(products => products[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${categoryid}`);
        }),
        catchError(this.handleError<Product>(`getHero id=${categoryid}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
