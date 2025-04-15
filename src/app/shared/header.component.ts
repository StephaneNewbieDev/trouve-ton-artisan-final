import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="header shadow-sm py-3 mb-4">
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <a routerLink="/" class="logo text-decoration-none h4 m-0">Trouve Ton Artisan</a>

        <nav class="nav gap-3">
          <a routerLink="/batiment" class="nav-link">Bâtiment</a>
          <a routerLink="/services" class="nav-link">Services</a>
          <a routerLink="/fabrication" class="nav-link">Fabrication</a>
          <a routerLink="/alimentation" class="nav-link">Alimentation</a>
        </nav>
      </div>

      <div class="container mt-3">
        <input type="text" class="form-control" placeholder="Rechercher un artisan... (nom, spécialité, ville)">
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: var(--color-primary);
      color: white;
    }

    .logo {
      color: white;
      font-weight: bold;
    }

    .nav-link {
      color: white;
      font-weight: 500;
    }

    .nav-link:hover {
      text-decoration: underline;
      color: var(--color-gray-dark);
    }

    input.form-control {
      border-radius: 0.5rem;
      border: none;
    }
  `]
})
export class HeaderComponent {}
