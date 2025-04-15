import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Artisan, ArtisanService } from '../services/artisan.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header.component';
import { FooterComponent } from '../shared/footer.component';

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="container my-5" *ngIf="artisan">
      <h2 class="mb-4">{{ artisan.name }}</h2>

      <p><strong>Spécialité :</strong> {{ artisan.specialty }}</p>
      <p><strong>Localisation :</strong> {{ artisan.location }}</p>
      <p>
        <strong>Note :</strong>
        <ng-container *ngFor="let star of getStarsArray(artisan.note)">⭐</ng-container>
      </p>
      <p><strong>À propos :</strong> {{ artisan.about }}</p>

      <p *ngIf="artisan.website">
        <strong>Site web :</strong>
        <a [href]="artisan.website" target="_blank">{{ artisan.website }}</a>
      </p>

      <hr>

      <section>
        <h3>Contacter {{ artisan.name }}</h3>
        <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="mt-3">
          <div class="mb-3">
            <label class="form-label">Votre nom</label>
            <input class="form-control" type="text" required [(ngModel)]="formData.name" name="name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Objet</label>
            <input class="form-control" type="text" required [(ngModel)]="formData.subject" name="subject" />
          </div>
          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="5" required [(ngModel)]="formData.message" name="message"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Envoyer</button>
        </form>
        <div *ngIf="emailSent" class="alert alert-success mt-3">
          Message envoyé à {{ artisan.email }} !
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  `
})
export class ArtisanComponent implements OnInit {
  artisan!: Artisan;
  formData = {
    name: '',
    subject: '',
    message: ''
  };
  emailSent = false;

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.artisanService.getArtisanById(id).subscribe(data => {
      if (data) this.artisan = data;
    });
  }

  onSubmit(): void {
    console.log(`Email envoyé à ${this.artisan.email}`);
    this.emailSent = true;
    this.formData = { name: '', subject: '', message: '' };
  }

  getStarsArray(note: string): number[] {
    return Array(Math.round(Number(note))).fill(0);
  }
}
