import { Injectable, signal } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public count = signal<number>(0);

  private cartItems = signal<Product[]>([]);


  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product ]);
  }

  getCartItems() {
    return this.cartItems();
  }

  constructor() { }
}
