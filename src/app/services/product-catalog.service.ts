import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductFilters, PaginationInfo } from '../models/product-filters.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone XYZ',
      price: 1999.99,
      description: 'Smartphone última geração',
      image: 'https://via.placeholder.com/300',
      category: 'electronics',
      rating: 4.5
    },
    // Adicione mais produtos aqui
  ];

  getProducts(filters: ProductFilters, page: number, pageSize: number): Observable<{
    products: Product[],
    pagination: PaginationInfo
  }> {
    let filteredProducts = this.products;

    // Aplicar filtros
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
    }
    if (filters.rating !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.rating!);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower)
      );
    }

    // Calcular paginação
    const totalItems = filteredProducts.length;
    const startIndex = (page - 1) * pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

    return of({
      products: paginatedProducts,
      pagination: {
        currentPage: page,
        pageSize: pageSize,
        totalItems: totalItems
      }
    });
  }
}