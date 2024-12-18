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
      name: 'Pocket Pop Keychains (Chaveiro): Harley Quinn: Esquadrão Suicida Funko',
      price: 104.93,
      description: '	História: Harleen Quinzel era uma psiquiatra do Asilo Arkham que se apaixonou perdidamente pelo Coringa. Esse amor "maluco" a levou a uma vida criminosa sob o nome de Arlequina. Cúmplice incondicional e namorada do Coringa, ela faz loucuras para agradar o Palhaço.',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/em_breve_pocket_pop_keychains_chaveiro_harley_quinn_esquadrao_suicida_funko_21913_1_20170720114349.jpg',
      category: "Chaveiro",
      rating: 5
    },
    {
      id: 2,
      name: 'Funko Boneco Era Venenosa (Poison Ivy): Dc Comics Super Heroes (5 Star) - Funko',
      price: 79.96,
      description: 'Boneco Era Venenosa (Poison Ivy): Dc Comics Super Heroes (5 Star) - FunkoBoneco Era Venenosa (Poison Ivy): Dc Comics Super Heroes (5 Star) - Funko',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/boneco_era_venenosa_poison_ivy_dc_comics_super_heroes_5_star_funko_68551_1_20201211172143.jpg',
      category: "Toy",
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