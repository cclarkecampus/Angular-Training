import {  Component, inject, Input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

   @Input() title: string = "Home Component";
   
   constructor(public cartService: CartService) {}

   loggerService = inject(LoggerService);

    numbers: number[] = [];

    ngOnInit() {
      console.log("Home Component Initialized");
    }

    ngOnDestroy() {
      console.log("Home Component Destroyed");
    }

    ngDoCheck() {
      //console.log("Home Component Change Detection Triggered");
    }

    ngOnChanges() {
      console.log("Home Component Changes Detected");
    }
  
   myObservable = new Observable<number>((observer) => {
    setTimeout(()=> {observer.next(1)},1000)
    setTimeout(()=> {observer.next(2)},2000)
    setTimeout(()=> {observer.next(3)},5000)
    setTimeout(()=> {observer.next(4)},6000)
    setTimeout(()=> {observer.next(5)},10000)
   })

   testEventloop() {
    
    console.log("First line")

    setTimeout(()=> {
      console.log("second line")
    }, 0)

    console.log("third")

    setTimeout(()=> {
      console.log("fourth")
    },2000)

    console.log("last")

   }

   getData() {
    this.myObservable.subscribe({
      next: (data) => {
        this.numbers.push(data)
      },
      error : (err) => {
        alert('data fetch')
      },
      complete : () => {
        console.log('observable completed')
      }
    }
    )
   }

  increment() {
    this.loggerService.log("Increment Clicked");
    
    console.log(this.cartService.count());

    let count = this.cartService.count() + 1;

    this.cartService.count.set(count);
  }


}
