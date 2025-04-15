import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-light mt-5 p-4">
      <div class="container">
        <p class="mb-1"><strong>Mentions légales</strong> | Données personnelles | Accessibilité | Cookies</p>
        <address class="mb-0">
          101 cours Charlemagne<br>
          CS 20033<br>
          69269 LYON CEDEX 02<br>
          France<br>
          +33 (0)4 26 73 40 00
        </address>
      </div>
    </footer>
  `
})
export class FooterComponent {}
