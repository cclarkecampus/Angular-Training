import { Injectable, signal } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

   public count = signal<number>(0);

  private wishListItems = signal<Product[]>([]);

  public totalItems = signal<number>(0);

  addToWishlist(product: Product) {

    //to avoid refference issues, we create a new object
    const productToAdd = {...product};

    this.wishListItems.update(items => [...items, productToAdd ]);

    this.updateTotalItems();
  }

  getWishListItems() {
    return this.wishListItems();
  }

  updateTotalItems() {
    this.totalItems.set(this.wishListItems().length);
  }

  removeItem(index: number) {
    this.wishListItems.update(items => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
    this.updateTotalItems();
  }

  constructor() { }
}
