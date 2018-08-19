import { Injectable } from '@angular/core';
import { IProducts } from '../product-list/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
    private _productUrl = './assets/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProducts[]>{
    return this._http.get<IProducts[]>(this._productUrl);
  }
}
