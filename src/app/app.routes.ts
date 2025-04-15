import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil.component';
import { CategorieComponent } from './pages/categorie.component';
import { ArtisanComponent } from './pages/artisan.component';
import { Page404Component } from './pages/page404.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'batiment', component: CategorieComponent },
    { path: 'services', component: CategorieComponent },
    { path: 'fabrication', component: CategorieComponent },
    { path: 'alimentation', component: CategorieComponent },
    { path: 'artisan/:id', component: ArtisanComponent },
    { path: '**', component: Page404Component } // toujours en dernier
];
