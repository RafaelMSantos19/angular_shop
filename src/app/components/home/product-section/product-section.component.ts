import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSection } from '../../../models/product-section.model';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="product-section">
      <div class="section-header">
        <h2>{{ section.title }}</h2>
        <p>{{ section.description }}</p>
      </div>
      <div class="products-grid">
        <div *ngFor="let product of section.products" class="product-card">
          <img [src]="product.image" [alt]="product.name">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">R$ {{ product.price.toFixed(2) }}</p>
            <button [routerLink]="['/products', product.id]" class="view-button">
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .product-section {
      padding: 2rem 0;
    }

    .section-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .section-header h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .section-header p {
      color: #666;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 0 1rem;
    }

    .product-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .product-card:hover {
      transform: translateY(-5px);
    }

    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .product-info {
      padding: 1rem;
    }

    .product-info h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }

    .price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #007bff;
      margin: 0.5rem 0;
    }

    .view-button {
      width: 100%;
      padding: 0.8rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .view-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class ProductSectionComponent {
  @Input() section!: ProductSection;
}