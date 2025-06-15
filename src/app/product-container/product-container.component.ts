import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  
  products: Product[] = [
    {
      productName: 'Vanilla Cake',
      price: 100,
      stockCount: 0,
      description: 'A delicious vanilla cake with a rich and creamy frosting. Perfect for any occasion.',
      imgUrl: 'https://recipesblob.oetker.ca/assets/1936ef0980bf466189b285b65ee574e9/360x400/vanilla-cake-one-slice-missing-11.webp'
    }
    ,
    {
      productName: 'Cheese Cake',
      price: 1000,
      stockCount: 10,
      description: 'A delicious Cheese cake',
      imgUrl: 'https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24.jpg'
    },

    {
      productName: 'lava Cake',
      price: 400,
      stockCount: 12,
      description: 'A delicious Lava cake',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUsVwms-rKj51euHVj_Pp_JFtKMiZmkCatg&s'
    }
    
  ];

  productOutPutEvent(product: Product) {
    console.log('Clicked ' + product.productName);
  }

}
