import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="brand">H-Toy Geek</a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/products" routerLinkActive="active">Produtos</a>
        <a routerLink="/cart" routerLinkActive="active">Carrinho</a>
        <a routerLink="/contact" routerLinkActive="active">Contato</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f8f9fa;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      color: #333;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
    }
    .nav-links a {
      text-decoration: none;
      color: #666;
      padding: 0.5rem 1rem;
    }
    .nav-links a:hover {
      color: #007bff;
    }
    .active {
      color: #007bff !important;
      font-weight: bold;
    }
  `]
})
export class NavComponent {}