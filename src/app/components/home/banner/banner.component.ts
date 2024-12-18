import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerService } from '../../../services/banner.service';
import { Banner } from '../../../models/banner.model';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="banner-container">
      <div class="banner" *ngFor="let banner of banners; let i = index" 
           [class.active]="i === currentBannerIndex">
        <img [src]="banner.imageUrl" [alt]="banner.title">
        <div class="banner-content">
          <h2>{{ banner.title }}</h2>
          <p>{{ banner.description }}</p>
          <a [routerLink]="banner.buttonLink" class="banner-button">
            {{ banner.buttonText }}
          </a>
        </div>
      </div>
      <div class="banner-controls">
        <button *ngFor="let banner of banners; let i = index" 
                (click)="setCurrentBanner(i)"
                [class.active]="i === currentBannerIndex">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .banner-container {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }

    .banner {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    .banner.active {
      opacity: 1;
    }

    .banner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .banner-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .banner-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .banner-button {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 1rem;
      transition: background-color 0.3s;
    }

    .banner-button:hover {
      background-color: #0056b3;
    }

    .banner-controls {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
    }

    .banner-controls button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background-color: rgba(255,255,255,0.5);
      cursor: pointer;
    }

    .banner-controls button.active {
      background-color: white;
    }
  `]
})
export class BannerComponent implements OnInit {
  banners: Banner[] = [];
  currentBannerIndex = 0;
  private intervalId: any;

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.getBanners().subscribe(banners => {
      this.banners = banners;
      this.startBannerRotation();
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startBannerRotation() {
    this.intervalId = setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 5000);
  }

  setCurrentBanner(index: number) {
    this.currentBannerIndex = index;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startBannerRotation();
    }
  }
}