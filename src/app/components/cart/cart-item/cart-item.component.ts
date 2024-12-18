import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../models/cart-item.model';
import { formatPrice, calculateSubtotal } from '../../../utils/price.utils';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="cart-item">
      <div class="item-image">
        <img [src]="item.product.image" [alt]="item.product.name">
      </div>
      
      <div class="item-details">
        <h3>{{ item.product.name }}</h3>
        <p class="item-price">{{ formatPrice(item.product.price) }}</p>
      </div>

      <div class="item-quantity">
        <button 
          (click)="updateQuantity(item.quantity - 1)"
          class="quantity-btn"
          [disabled]="item.quantity <= 1"
        >-</button>
        
        <input 
          type="number" 
          [value]="item.quantity"
          (change)="updateQuantity($any($event.target).value)"
          min="1"
          class="quantity-input"
        >
        
        <button 
          (click)="updateQuantity(item.quantity + 1)"
          class="quantity-btn"
        >+</button>
      </div>

      <div class="item-subtotal">
        {{ formatPrice(calculateSubtotal(item.product.price, item.quantity)) }}
      </div>

      <button 
        (click)="remove.emit(item.product.id)"
        class="remove-btn"
        aria-label="Remover item"
      >
        ×
      </button>
    </div>
  `,
  styles: [`
    .cart-item {
      display: grid;
      grid-template-columns: auto 1fr auto auto auto;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #eee;
    }

    .item-image img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 4px;
    }

    .item-details h3 {
      margin: 0;
      font-size: 1rem;
    }

    .item-price {
      color: #666;
      margin: 0.5rem 0;
    }

    .item-quantity {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .quantity-btn {
      padding: 0.25rem 0.5rem;
      border: 1px solid #ddd;
      background: white;
      border-radius: 4px;
      cursor: pointer;
    }

    .quantity-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .quantity-input {
      width: 50px;
      padding: 0.25rem;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .item-subtotal {
      font-weight: bold;
      color: #007bff;
    }

    .remove-btn {
      padding: 0.25rem 0.5rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #dc3545;
      cursor: pointer;
      transition: color 0.3s;
    }

    .remove-btn:hover {
      color: #c82333;
    }
  `]
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  formatPrice = formatPrice;
  calculateSubtotal = calculateSubtotal;

  updateQuantity(quantity: number) {
    const newQuantity = Math.max(1, Number(quantity));
    this.quantityChange.emit(newQuantity);
  }
}