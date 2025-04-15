import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Tu peux créer une interface pour les artisans (recommandé)
export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: string;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) { }

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.dataUrl);
  }

  getArtisanById(id: string): Observable<Artisan | undefined> {
    return this.getArtisans().pipe(
      map(artisans => artisans.find(a => a.id === id))
    );
  }

  getTopArtisans(): Observable<Artisan[]> {
    return this.getArtisans().pipe(
      map(artisans => artisans.filter(a => a.top))
    );
  }

  getByCategory(cat: string): Observable<Artisan[]> {
    return this.getArtisans().pipe(
      map(artisans => artisans.filter(a => a.category.toLowerCase() === cat.toLowerCase()))
    );
  }
}
