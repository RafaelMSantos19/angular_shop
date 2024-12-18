import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ProductsComponent } from './app/components/products/products.component';
import { CartComponent } from './app/components/cart/cart.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { NavComponent } from './app/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});