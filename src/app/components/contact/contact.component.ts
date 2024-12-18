import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Entre em Contato</h2>
      <form (ngSubmit)="onSubmit()" class="contact-form">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" [(ngModel)]="formData.name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" [(ngModel)]="formData.email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensagem:</label>
          <textarea id="message" [(ngModel)]="formData.message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input, textarea {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    textarea {
      min-height: 150px;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulário enviado:', this.formData);
    // Aqui você implementaria a lógica de envio do formulário
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}