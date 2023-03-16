import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <app-pokemon></app-pokemon>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
