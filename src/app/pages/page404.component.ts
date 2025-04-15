import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="text-center mt-5">
      <h1 class="display-1">404</h1>
      <p class="lead">Oups ! Cette page n'existe pas.</p>
      <a routerLink="/" class="btn btn-primary mt-3">Retour à l'accueil</a>
    </div>
  `
})
export class Page404Component {}
