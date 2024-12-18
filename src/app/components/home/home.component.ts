import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FeaturedProductsService } from '../../services/featured-products.service';
import { ProductSection } from '../../models/product-section.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ProductSectionComponent,
    NewsletterComponent
  ],
  template: `
    <main>
      <app-banner></app-banner>
      
      <div class="container">
        <app-product-section 
          *ngFor="let section of productSections"
          [section]="section">
        </app-product-section>
      </div>

      <app-newsletter></app-newsletter>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
  `]
})
export class HomeComponent implements OnInit {
  productSections: ProductSection[] = [];

  constructor(private featuredProductsService: FeaturedProductsService) {}

  ngOnInit() {
    this.featuredProductsService.getSections().subscribe(
      sections => this.productSections = sections
    );
  }
}