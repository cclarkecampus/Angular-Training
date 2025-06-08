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
  products:Product[]=[
  {
    productName:"Vanila Cake",
    price:1000,
    stockCount: 6,
    imgUrl:'https://juliemarieeats.com/wp-content/uploads/2024/01/Classic-Vanilla-Birthday-Cake-3-scaled.jpg',
    discription:"A delisous vanila cake with rich and creamy"
},
 {
  productName:"Lava Cake",
  price:1300,
  stockCount: 4,
  imgUrl:'https://www.whitakerschocolates.com/cdn/shop/articles/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave_720x720.png?v=1742905295',
  discription:"A delisous Lava cake with Softn and smooth Melted Chocolat"
},
 {
  productName:"Chocolat Cake",
  price:900,
  stockCount: 2,
  imgUrl:'https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_4087-er-new1-720x910.jpg',
  discription:"A delisous Cocolat cake with Chocolat cream and melted Chocolat"
}]

productOutPutEvent(product: Product){
  console.log("clicked "+product.productName)
}

}