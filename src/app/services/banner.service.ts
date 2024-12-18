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
      imageUrl: 'https://lilmac4.wordpress.com/wp-content/uploads/2018/09/funko-pop-banner.jpg',
      title: 'Ofertas Especiais',
      description: 'Até 50% de desconto em produtos selecionados',
      buttonText: 'Ver Ofertas',
      buttonLink: '/products'
    },
    {
      id: 2,
      imageUrl: 'https://toymagic.com.mt/cdn/shop/collections/Funkopop-banner_720x.jpg?v=1667808756',
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