import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../services/wishlist.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule, FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {


  constructor(public cartService:CartService , private productService:ProductService, public wishListService: WishlistService) {}


  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  filteredProducts: Product[] = [];

  searchTerm = '';

  private searchSubject = new Subject<string>();

  productOutPutEvent(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {

      this.setupSearchSubscription();

      this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
          this.filteredProducts = data
        },
        error: (err) => {
          alert("Request Failed " + err);
        }
      })

      this.productService.getProductCategories().subscribe({
        next: (data) => {
          this.categories = data
        },
        error: (err) => {
          alert("Request Failed" + err)
        }
      })
  }

  private setupSearchSubscription() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(val => 
      this.filterProducts()
    );
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

    filterProducts() {
      
      let filtered = this.products;

      if (this.selectedCategory != 'all') {
        filtered = filtered.filter(p => p.category === this.selectedCategory)
      }

      if (this.searchTerm) {

        let searchTermLower = this.searchTerm.toLowerCase()

        filtered = filtered.filter(
          p => p.title.toLowerCase().includes(searchTermLower) 
           || p.description.toLowerCase().includes(searchTermLower)
        )
      }

      this.filteredProducts = filtered;
    }

    onInputChange($event: string) {
          this.searchSubject.next($event)
    }

    filterByCategory(category: string) {
      this.selectedCategory = category;
      
      if (category == 'all') {
        this.filteredProducts = this.products
      } else {
        this.filteredProducts = this.products.filter(product => product.category === category);
      }

  }

  wishListOutPutEvent($event: Product) {
      this.wishListService.addToWishlist($event);
  }


}
