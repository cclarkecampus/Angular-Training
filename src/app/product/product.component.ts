import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedHighlightDirective } from '../directives/red-highlight.directive';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

  loggerService = new LoggerService();

  @Input() product!: Product;

  @Output() productOutput = new EventEmitter<Product>();

  ngOnChanges() {
    
  }

  addToCart() {
    
   this.productOutput.emit(this.product);
  }

}
