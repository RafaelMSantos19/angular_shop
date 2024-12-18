import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, CartSummaryComponent],
  template: `
    <div class="cart-container">
      <div class="cart-content">
        <div class="cart-items">
          <h1>Carrinho de Compras</h1>
          
          <div *ngIf="cartItems.length === 0" class="empty-cart">
            <p>Seu carrinho está vazio</p>
            <button (click)="continueShopping()" class="continue-btn">
              Continuar Comprando
            </button>
          </div>

          <app-cart-item
            *ngFor="let item of cartItems"
            [item]="item"
            (quantityChange)="updateQuantity(item.product.id, $event)"
            (remove)="removeItem($event)"
          ></app-cart-item>
        </div>

        <app-cart-summary
          [total]="cartTotal"
          [shipping]="shipping"
          (checkout)="checkout()"
        ></app-cart-summary>
      </div>
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .cart-content {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .cart-content {
        grid-template-columns: 1fr;
      }
    }

    .cart-items {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1.5rem;
    }

    h1 {
      margin: 0 0 1.5rem 0;
      font-size: 1.5rem;
    }

    .empty-cart {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    .continue-btn {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .continue-btn:hover {
      background-color: #0056b3;
    }
  `]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;
  shipping: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(
      items => this.cartItems = items
    );

    this.cartService.getCartTotal().subscribe(total => {
      this.cartTotal = total;
      this.shipping = total > 0 ? 15 : 0;
    });
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  continueShopping() {
    this.router.navigate(['/products']);
  }

  checkout() {
    // Aqui você implementaria a lógica de checkout
    console.log('Iniciando checkout...');
    alert('Compra finalizada com sucesso!');
    this.cartService.clearCart();
  }
}