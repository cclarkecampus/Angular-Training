import { Component } from '@angular/core';
import { WishListComponent } from "../wish-list/wish-list.component";
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wish-list-container',
  imports: [WishListComponent],
  templateUrl: './wish-list-container.component.html',
  styleUrl: './wish-list-container.component.scss'
})
export class WishListContainerComponent {

  constructor(public wishListService: WishlistService) {}


  onMoveToShoppingCart($event: number) {
        throw new Error('Method not implemented.');
}
}
