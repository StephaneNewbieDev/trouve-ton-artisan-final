import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="bg-primary text-white py-3">
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <a routerLink="/" class="text-white text-decoration-none h4">Trouve Ton Artisan</a>

        <nav class="nav nav-pills">
          <a routerLink="/batiment" class="nav-link text-white">Bâtiment</a>
          <a routerLink="/services" class="nav-link text-white">Services</a>
          <a routerLink="/fabrication" class="nav-link text-white">Fabrication</a>
          <a routerLink="/alimentation" class="nav-link text-white">Alimentation</a>
        </nav>
      </div>

      <div class="container mt-3">
        <input type="text" class="form-control" placeholder="Rechercher un artisan... (nom, spécialité, ville)">
      </div>
    </header>
  `
})
export class HeaderComponent {}
