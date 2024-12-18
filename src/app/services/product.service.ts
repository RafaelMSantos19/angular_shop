import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Produto 1',
      price: 99.99,
      description: 'Descrição do produto 1',
      image: 'https://via.placeholder.com/150',
      category: "categoria",
      rating: 5
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 149.99,
      description: 'Descrição do produto 2',
      image: 'https://via.placeholder.com/150',
      category: "categoria",
      rating: 5
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}