import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public count = signal<number>(0);

  constructor() { }
}
