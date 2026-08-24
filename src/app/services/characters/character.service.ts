import { Injectable } from '@angular/core';
import { CharacterModel } from '../../features/characters/model/characters.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  async getCharacters() {
    const response = await fetch(' http://localhost:3000/characters', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: CharacterModel[] = await response.json();
    return data;
  }
}
