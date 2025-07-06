import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {

  @Input() wishlistItems: Product[] = []

  @Input() totalItems: number = 0;

  @Output() moveToShoppingCart = new EventEmitter<number>();



  moveToShoppingCartClick(index:number) {
   
    this.moveToShoppingCart.emit(index);
  }

}
