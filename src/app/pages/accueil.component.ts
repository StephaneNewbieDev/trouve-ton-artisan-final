import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../services/artisan.service';
import { HeaderComponent } from '../shared/header.component';
import { FooterComponent } from '../shared/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="container my-5">
      <section>
        <h2 class="mb-4">Comment trouver mon artisan ?</h2>
        <ol class="list-group list-group-numbered mb-5">
          <li class="list-group-item">Choisir la catégorie d’artisanat dans le menu</li>
          <li class="list-group-item">Choisir un artisan</li>
          <li class="list-group-item">Le contacter via le formulaire de contact</li>
          <li class="list-group-item">Une réponse sera apportée sous 48h</li>
        </ol>
      </section>

      <section>
        <h2 class="mb-4">Artisans du mois</h2>
        <div class="row">
          <div class="col-md-4 mb-4" *ngFor="let artisan of topArtisans">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ artisan.name }}</h5>
                <p class="card-text">{{ artisan.specialty }} - {{ artisan.location }}</p>
                <p class="card-text">
                  <ng-container *ngFor="let star of getStarsArray(artisan.note)">
                    ⭐
                  </ng-container>
                </p>
                <a [routerLink]="['/artisan', artisan.id]" class="btn btn-outline-primary">Voir la fiche</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center mt-5">
  <a routerLink="/artisans" class="btn btn-primary">Voir tous les artisans</a>
</div>

    </main>

    <app-footer></app-footer>
  `
})
export class AccueilComponent implements OnInit {
  topArtisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getTopArtisans().subscribe(data => {
      this.topArtisans = data;
    });
  }

  getStarsArray(note: string): number[] {
    return Array(Math.round(Number(note))).fill(0);
  }
}
