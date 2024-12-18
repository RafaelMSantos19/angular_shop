import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatPrice } from '../../../utils/price.utils';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-summary">
      <h2>Resumo do Pedido</h2>
      
      <div class="summary-row">
        <span>Subtotal</span>
        <span>{{ formatPrice(total) }}</span>
      </div>
      
      <div class="summary-row">
        <span>Frete</span>
        <span>{{ formatPrice(shipping) }}</span>
      </div>
      
      <div class="summary-row total">
        <span>Total</span>
        <span>{{ formatPrice(total + shipping) }}</span>
      </div>

      <button 
        (click)="checkout.emit()"
        class="checkout-btn"
        [disabled]="total === 0"
      >
        Finalizar Compra
      </button>
    </div>
  `,
  styles: [`
    .cart-summary {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
      margin: 0 0 1.5rem 0;
      font-size: 1.25rem;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }

    .total {
      font-weight: bold;
      font-size: 1.1rem;
      border-bottom: none;
    }

    .checkout-btn {
      width: 100%;
      padding: 1rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .checkout-btn:hover:not(:disabled) {
      background-color: #218838;
    }

    .checkout-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class CartSummaryComponent {
  @Input() total: number = 0;
  @Input() shipping: number = 0;
  @Output() checkout = new EventEmitter<void>();

  formatPrice = formatPrice;
}