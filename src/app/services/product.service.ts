import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductCategories():Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + '/categories'); // `${this.apiUrl}/categories`
  }

  //implement getCategories /categories  string[]
}
