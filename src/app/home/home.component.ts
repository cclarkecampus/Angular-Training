import { ChangeDetectorRef, Component, inject, Input, input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() title: string = "Home Component";
   constructor(public cartService: CartService) {}

   loggerService = inject(LoggerService);

    ngOnInit() {
      console.log("Home Component Initialized");
    }

    ngOnDestroy() {
      console.log("Home Component Destroyed");
    }

    ngDoCheck() {
      console.log("Home Component Change Detection Triggered");
    }

    ngOnChanges() {
      console.log("Home Component Changes Detected");
    }


  increment() {
    this.loggerService.log("Increment Clicked");
    
    console.log(this.cartService.count());

    let count = this.cartService.count() + 1;

    this.cartService.count.set(count);
  }
}
