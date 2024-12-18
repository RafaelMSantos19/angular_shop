import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Nossos Produtos</h2>
      <div class="products-grid">
        <div *ngFor="let product of products" class="product-card">
          <img [src]="product.image" [alt]="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">R$ {{ product.price.toFixed(2) }}</p>
          <button (click)="addToCart(product)">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }
    .price {
      font-weight: bold;
      color: #007bff;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}