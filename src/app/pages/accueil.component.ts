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
    <section class="mb-5">
  <h2 class="mb-4 text-center">Comment trouver mon artisan ?</h2>

  <div class="row g-4">
    <div class="col-md-3 col-sm-6" *ngFor="let etape of etapes; let i = index">
      <div class="p-4 text-center border rounded shadow-sm h-100">
        <div class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto mb-3" style="width: 50px; height: 50px; font-size: 1.25rem;">
          {{ i + 1 }}
        </div>
        <p class="mb-0">{{ etape }}</p>
      </div>
    </div>
  </div>
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

  etapes: string[] = [
    'Choisir la catégorie d’artisanat dans le menu',
    'Choisir un artisan',
    'Le contacter via le formulaire de contact',
    'Une réponse sera apportée sous 48h'
  ];

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
