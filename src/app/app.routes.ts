import { Routes } from '@angular/router';
import { Character } from './features/characters/character/character';
import { CharacterHomePage } from './features/characters/character-home-page/character-home-page';
import { CharacterFrameData } from './features/characters/character-frame-data/character-frame-data';

export const routes: Routes = [
  { path: '', component: Character },
  { path: 'characters/:id', component: CharacterHomePage },
  { path: 'characters/:id/framedata', component: CharacterFrameData },
];
