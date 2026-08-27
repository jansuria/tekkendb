import { Routes } from '@angular/router';
import { Character } from './features/characters/character/character';
import { CharacterDetails } from './features/character-details/character-details/character-details';

export const routes: Routes = [
  { path: '', component: Character },
  { path: 'characters/:id', component: CharacterDetails },
];
