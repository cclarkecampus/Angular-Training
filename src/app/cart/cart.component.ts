import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../modals/product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input() cartItems: Product[] = []
  
  constructor() {
  }
}
