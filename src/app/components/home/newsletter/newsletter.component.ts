import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="newsletter">
      <div class="newsletter-content">
        <h2>Fique por dentro das novidades!</h2>
        <p>Cadastre-se para receber ofertas exclusivas e novidades.</p>
        <form (ngSubmit)="onSubmit()" class="newsletter-form">
          <input 
            type="email" 
            [(ngModel)]="email" 
            name="email"
            placeholder="Seu melhor e-mail"
            required
          >
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .newsletter {
      background-color: #f8f9fa;
      padding: 4rem 1rem;
      margin: 2rem 0;
    }

    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .newsletter-content h2 {
      margin-bottom: 1rem;
      color: #333;
    }

    .newsletter-content p {
      color: #666;
      margin-bottom: 2rem;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      max-width: 500px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      .newsletter-form {
        flex-direction: column;
      }
    }

    input {
      flex: 1;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    button {
      padding: 0.8rem 2rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #218838;
    }
  `]
})
export class NewsletterComponent {
  email: string = '';

  onSubmit() {
    console.log('Email cadastrado:', this.email);
    // Aqui você implementaria a lógica de cadastro do email
    this.email = '';
  }
}