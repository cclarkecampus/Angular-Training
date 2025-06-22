import { Component } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-container',
  imports: [CartComponent],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss',
  standalone: true
})
export class CartContainerComponent {

  constructor(public cartService:CartService) {}
}
