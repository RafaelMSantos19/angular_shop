import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getCartTotal(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce(
        (total, item) => total + (item.product.price * item.quantity), 
        0
      ))
    );
  }

  getItemCount(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce(
        (count, item) => count + item.quantity, 
        0
      ))
    );
  }

  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { product, quantity: 1 }]);
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.product.id === productId);
    
    if (item) {
      item.quantity = Math.max(0, quantity);
      this.cartItems.next(
        currentItems.filter(item => item.quantity > 0)
      );
    }
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value;
    this.cartItems.next(
      currentItems.filter(item => item.product.id !== productId)
    );
  }

  clearCart() {
    this.cartItems.next([]);
  }
}