import { Component } from '@angular/core';
import { WishListComponent } from "../wish-list/wish-list.component";
import { WishlistService } from '../services/wishlist.service';
import { Product } from '../modals/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list-container',
  imports: [WishListComponent],
  templateUrl: './wish-list-container.component.html',
  styleUrl: './wish-list-container.component.scss'
})
export class WishListContainerComponent {

  constructor(public wishListService: WishlistService, private cartService:CartService) {}


  onMoveToShoppingCart($event: {index:number,product:Product}) {
   
    this.wishListService.removeItem($event.index);
    this.cartService.addToCart($event.product);

  }
}
