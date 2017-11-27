import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  // private productsUrl = 'api/products';  // URL to web api
  private productsUrl = 'http://demo1178997.mockable.io';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET heroes from the server */
    getProducts (parent_id): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.productsUrl}/${parent_id}`)
        .pipe(
          tap(products => this.log(`fetched heroes`)),
          catchError(this.handleError('getHeroes', []))
        );
    }

  /** GET hero by id. Will 404 if id not found */
  getProduct(parent_id: number): Observable<Product> {
    const url = `${this.productsUrl}/${parent_id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched products id=${parent_id}`)),
      catchError(this.handleError<Product>(`getProduct id=${parent_id}`))
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