import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 'electronics', name: 'Eletrônicos' },
    { id: 'books', name: 'Livros' },
    { id: 'clothing', name: 'Roupas' },
    { id: 'home', name: 'Casa e Decoração' }
  ];

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}