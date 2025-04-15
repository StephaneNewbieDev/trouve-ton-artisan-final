import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Artisan, ArtisanService } from '../services/artisan.service';
import { HeaderComponent } from '../shared/header.component';
import { FooterComponent } from '../shared/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="container my-5">
      <h2 class="mb-4 text-capitalize">{{ currentCategory }}</h2>

      <input type="text" class="form-control mb-4" placeholder="Rechercher (nom, spécialité, ville)" [(ngModel)]="searchText" />

      <div class="row">
        <div class="col-md-4 mb-4" *ngFor="let artisan of filteredArtisans()">
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
    </main>

    <app-footer></app-footer>
  `
})
export class CategorieComponent implements OnInit {
  currentCategory: string = '';
  artisans: Artisan[] = [];
  searchText: string = '';

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentCategory = url[0]?.path || '';
  
      if (this.currentCategory === 'artisans') {
        this.artisanService.getArtisans().subscribe(data => {
          this.artisans = data;
        });
      } else {
        this.artisanService.getByCategory(this.currentCategory).subscribe(data => {
          this.artisans = data;
        });
      }
    });
  }
  

  filteredArtisans(): Artisan[] {
    const search = this.searchText.toLowerCase();
    return this.artisans.filter(a =>
      a.name.toLowerCase().includes(search) ||
      a.specialty.toLowerCase().includes(search) ||
      a.location.toLowerCase().includes(search)
    );
  }

  getStarsArray(note: string): number[] {
    return Array(Math.round(Number(note))).fill(0);
  }
}
