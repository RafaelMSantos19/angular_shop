import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationInfo } from '../../../models/product-filters.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pagination">
      <button 
        [disabled]="pagination.currentPage === 1"
        (click)="onPageChange(pagination.currentPage - 1)"
        class="page-button"
      >
        Anterior
      </button>

      <div class="page-numbers">
        <button 
          *ngFor="let page of getPageNumbers()"
          [class.active]="page === pagination.currentPage"
          (click)="onPageChange(page)"
          class="page-number"
        >
          {{ page }}
        </button>
      </div>

      <button 
        [disabled]="pagination.currentPage >= getTotalPages()"
        (click)="onPageChange(pagination.currentPage + 1)"
        class="page-button"
      >
        Próxima
      </button>
    </div>
  `,
  styles: [`
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-numbers {
      display: flex;
      gap: 0.5rem;
    }

    .page-button,
    .page-number {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      background: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .page-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-number.active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }

    .page-button:hover:not(:disabled),
    .page-number:hover:not(.active) {
      background-color: #f8f9fa;
    }
  `]
})
export class PaginationComponent {
  @Input() pagination!: PaginationInfo;
  @Output() pageChanged = new EventEmitter<number>();

  getTotalPages(): number {
    return Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const current = this.pagination.currentPage;
    const pages: number[] = [];

    // Mostrar no máximo 5 páginas
    for (let i = Math.max(1, current - 2); i <= Math.min(totalPages, current + 2); i++) {
      pages.push(i);
    }

    return pages;
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.pageChanged.emit(page);
    }
  }
}