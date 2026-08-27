import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { CharacterFacade } from '../../characters/state/characters.facade';

@Component({
  imports: [],
  selector: 'app-character-details',
  styleUrl: './character-details.css',
  templateUrl: './character-details.html',
})
export class CharacterDetails {
  private characterFacade = inject(CharacterFacade);

  id = input.required({ transform: numberAttribute });

  character = computed(() => this.characterFacade.characters().find((c) => c.id === this.id()));
}
