import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductSection } from '../models/product-section.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {
  private featuredProducts: Product[]  = [
    {
      id: 1,
      name: 'Produto Destaque 1',
      price: 99.99,
      description: 'Produto mais vendido da categoria',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    },
    {
      id: 2,
      name: 'Produto Destaque 2',
      price: 199.99,
      description: 'Produto mais vendido da categoria',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    },
    {
      id: 3,
      name: 'Produto Destaque 3',
      price: 299.99,
      description: 'Lançamento exclusivo',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    }
  ];

  private promotions: Product[] = [
    {
      id: 3,
      name: 'Oferta Especial 1',
      price: 89.99,
      description: '30% de desconto',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    },
    {
      id: 4,
      name: 'Oferta Especial 2',
      price: 89.99,
      description: '30% de desconto',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    },
    {
      id: 5,
      name: 'Oferta Especial 3',
      price: 149.99,
      description: 'Promoção por tempo limitado',
      image: 'https://via.placeholder.com/300',
      category: "Toy",
      rating: 5
    }
  ];

  getSections(): Observable<ProductSection[]> {
    return of([
      {
        title: 'Mais Vendidos',
        description: 'Os produtos mais populares da nossa loja',
        products: this.featuredProducts
      },
      {
        title: 'Promoções',
        description: 'Aproveite nossos melhores preços',
        products: this.promotions
      }
    ]);
  }
}