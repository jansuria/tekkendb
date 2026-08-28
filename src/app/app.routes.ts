import { Routes } from '@angular/router';
import { Character } from './features/characters/character/character';
import { CharacterHomePage } from './features/characters/character-home-page/character-home-page';

export const routes: Routes = [
  { path: '', component: Character },
  { path: 'characters/:id', component: CharacterHomePage },
];
