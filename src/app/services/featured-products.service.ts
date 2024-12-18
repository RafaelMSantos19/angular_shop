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
      name: 'Pocket Pop Keychains (Chaveiro): Harley Quinn: Esquadrão Suicida Funko',
      price: 104.93,
      description: '',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/em_breve_pocket_pop_keychains_chaveiro_harley_quinn_esquadrao_suicida_funko_21913_1_20170720114349.jpg',
      category: "Chaveiro",
      rating: 5
    },
    {
      id: 2,
      name: 'Funko Boneco Era Venenosa (Poison Ivy): Dc Comics Super Heroes (5 Star) - Funko',
      price: 79.96,
      description: '',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/boneco_era_venenosa_poison_ivy_dc_comics_super_heroes_5_star_funko_68551_1_20201211172143.jpg',
      category: "Toy",
      rating: 5
    },
    {
      id: 3,
      name: 'Funko Pop! Geralt The Rivia: The Witcher Netflix #1192 - Funko',
      price: 119.96,
      description: '',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/pre_venda_funko_pop_geralt_the_rivia_the_witcher_netflix_1192_funko_99701_1_5198a0429eeb792c5817492abe781f7a.jpg',
      category: "Toy",
      rating: 5
    }
  ];

  private promotions: Product[] = [
    {
      id: 3,
      name: 'Pocket Pop Chaveiro Keychains Sonic: Sonic With Ring Funko',
      price: 104.93,
      description: '30% de desconto',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/pocket_pop_keychains_chaveiro_sonic_sonic_with_ring_funko_32119_1_20180410180711.jpg',
      category: "Chaveiro",
      rating: 5
    },
    {
      id: 4,
      name: 'Funko Pocket Pop Keychains (Chaveiro) Harry Potter: Harry Potter Funko',
      price: 89.99,
      description: '30% de desconto',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/funko_pocket_pop_keychains_chaveiro_harry_potter_harry_potter_funko_mkp_27925_1_1e6505b26daeaee3ceeadec2979c62a9.jpg',
      category: "Toy",
      rating: 5
    },
    {
      id: 5,
      name: 'Funko Pop! Roronoa Zoro (Enma): One Piece Anime Mangá Glow In The Dark (GITD) #1288',
      price: 209.93,
      description: 'Promoção por tempo limitado',
      image: 'https://images.tcdn.com.br/img/img_prod/460977/funko_pop_roronoa_zoro_enma_one_piece_anime_manga_glow_in_the_dark_gitd_1288_funko_mkp_75883_1_c061c6a170d5f9334192d59900649816.jpeg',
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