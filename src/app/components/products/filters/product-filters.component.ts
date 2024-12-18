import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category.model';
import { ProductFilters } from '../../../models/product-filters.model';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filters-container">
      <div class="search-box">
        <input
          type="text"
          [(ngModel)]="filters.search"
          (ngModelChange)="onFiltersChange()"
          placeholder="Buscar produtos..."
          class="search-input"
        >
      </div>

      <div class="filter-section">
        <h3>Categorias</h3>
        <select
          [(ngModel)]="filters.category"
          (ngModelChange)="onFiltersChange()"
          class="filter-select"
        >
          <option value="">Todas as categorias</option>
          <option *ngFor="let category of categories" [value]="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="filter-section">
        <h3>Preço</h3>
        <div class="price-inputs">
          <input
            type="number"
            [(ngModel)]="filters.minPrice"
            (ngModelChange)="onFiltersChange()"
            placeholder="Mín"
            class="price-input"
          >
          <span>até</span>
          <input
            type="number"
            [(ngModel)]="filters.maxPrice"
            (ngModelChange)="onFiltersChange()"
            placeholder="Máx"
            class="price-input"
          >
        </div>
      </div>

      <div class="filter-section">
        <h3>Avaliação Mínima</h3>
        <select
          [(ngModel)]="filters.rating"
          (ngModelChange)="onFiltersChange()"
          class="filter-select"
        >
          <option value="">Todas as avaliações</option>
          <option [value]="4">4+ estrelas</option>
          <option [value]="3">3+ estrelas</option>
          <option [value]="2">2+ estrelas</option>
          <option [value]="1">1+ estrela</option>
        </select>
      </div>

      <button (click)="clearFilters()" class="clear-filters">
        Limpar Filtros
      </button>
    </div>
  `,
  styles: [`
    .filters-container {
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .filter-section {
      margin-bottom: 1.5rem;
    }

    .filter-section h3 {
      margin-bottom: 0.5rem;
      color: #333;
      font-size: 1rem;
    }

    .search-input,
    .filter-select,
    .price-input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }

    .price-inputs {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .price-input {
      width: 100px;
    }

    .clear-filters {
      width: 100%;
      padding: 0.5rem;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .clear-filters:hover {
      background-color: #c82333;
    }
  `]
})
export class ProductFiltersComponent {
  @Input() categories: Category[] = [];
  @Output() filtersChanged = new EventEmitter<ProductFilters>();

  filters: ProductFilters = {};

  onFiltersChange() {
    this.filtersChanged.emit(this.filters);
  }

  clearFilters() {
    this.filters = {};
    this.onFiltersChange();
  }
}