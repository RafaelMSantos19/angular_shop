import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from './filters/product-filters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductCatalogService } from '../../services/product-catalog.service';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductFilters, PaginationInfo } from '../../models/product-filters.model';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, ProductFiltersComponent, PaginationComponent],
  template: `
    <div class="catalog-container">
      <aside class="filters-sidebar">
        <app-product-filters
          [categories]="categories"
          (filtersChanged)="onFiltersChange($event)"
        ></app-product-filters>
      </aside>

      <main class="products-main">
        <div class="products-header">
          <h1>Catálogo de Produtos</h1>
          <p *ngIf="pagination">
            Mostrando {{ getDisplayRange() }} de {{ pagination.totalItems }} produtos
          </p>
        </div>

        <div class="products-grid">
          <div *ngFor="let product of products" class="product-card">
            <img [src]="product.image" [alt]="product.name">
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="rating">
                <span *ngFor="let star of [1,2,3,4,5]" 
                      [class.filled]="star <= product.rating">★</span>
                <span class="rating-value">{{ product.rating }}</span>
              </div>
              <p class="price">R$ {{ product.price.toFixed(2) }}</p>
              <button (click)="addToCart(product)" class="add-to-cart">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        <app-pagination
          *ngIf="pagination"
          [pagination]="pagination"
          (pageChanged)="onPageChange($event)"
        ></app-pagination>
      </main>
    </div>
  `,
  styles: [`
    .catalog-container {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .catalog-container {
        grid-template-columns: 1fr;
      }
    }

    .products-header {
      margin-bottom: 2rem;
    }

    .products-header h1 {
      margin-bottom: 0.5rem;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
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

    .rating {
      color: #ffd700;
      margin: 0.5rem 0;
    }

    .rating span:not(.rating-value) {
      color: #ddd;
    }

    .rating span.filled {
      color: #ffd700;
    }

    .rating-value {
      color: #666;
      margin-left: 0.5rem;
    }

    .price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #007bff;
      margin: 0.5rem 0;
    }

    .add-to-cart {
      width: 100%;
      padding: 0.8rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .add-to-cart:hover {
      background-color: #218838;
    }
  `]
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  pagination?: PaginationInfo;
  currentFilters: ProductFilters = {};
  pageSize = 12;

  constructor(
    private productService: ProductCatalogService,
    private categoryService: CategoryService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    );
    this.loadProducts();
  }

  loadProducts(page: number = 1) {
    this.productService.getProducts(this.currentFilters, page, this.pageSize)
      .subscribe(response => {
        this.products = response.products;
        this.pagination = response.pagination;
      });
  }

  onFiltersChange(filters: ProductFilters) {
    this.currentFilters = filters;
    this.loadProducts(1);
  }

  onPageChange(page: number) {
    this.loadProducts(page);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getDisplayRange(): string {
    if (!this.pagination) return '';
    const start = (this.pagination.currentPage - 1) * this.pagination.pageSize + 1;
    const end = Math.min(start + this.pagination.pageSize - 1, this.pagination.totalItems);
    return `${start}-${end}`;
  }
}