import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Banner } from '../models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private banners: Banner[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/1200x400',
      title: 'Ofertas Especiais',
      description: 'Até 50% de desconto em produtos selecionados',
      buttonText: 'Ver Ofertas',
      buttonLink: '/products'
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/1200x400',
      title: 'Nova Coleção',
      description: 'Confira as últimas novidades',
      buttonText: 'Explorar',
      buttonLink: '/products'
    }
  ];

  getBanners(): Observable<Banner[]> {
    return of(this.banners);
  }
}