import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule, FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  
  constructor(public cartService:CartService , private productService:ProductService) {}


  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  filteredProducts: Product[] = [];

  productOutPutEvent(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
      this.productService.getProducts().subscribe({
        next: (data) => {

          this.categories = Array.from(new Set(data.map(product => product.category))) 
          this.products = data;
          this.filteredProducts = data
        },
        error: (err) => {
          alert("Request Failed " + err);
        }
      })
  }

    filterByCategory(category: string) {
      this.selectedCategory = category;
      
      if (category == 'all') {
        this.filteredProducts = this.products
      } else {
        this.filteredProducts = this.products.filter(product => product.category === category);
      }

  }


}
