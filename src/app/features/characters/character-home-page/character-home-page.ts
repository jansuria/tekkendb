import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { CharacterFacade } from '../state/characters.facade';

@Component({
  imports: [],
  selector: 'app-character-home-page',
  styleUrl: './character-home-page.css',
  templateUrl: './character-home-page.html',
})
export class CharacterHomePage {
  private readonly characterFacade = inject(CharacterFacade);

  id = input.required({ transform: numberAttribute });

  character = computed(() => this.characterFacade.characters().find((c) => c.id === this.id()));
}
