import { Component, computed, effect, inject, input, numberAttribute } from '@angular/core';
import { CharacterFacade } from '../state/characters.facade';

@Component({
  imports: [],
  selector: 'app-character-frame-data',
  styleUrl: './character-frame-data.css',
  templateUrl: './character-frame-data.html',
})
export class CharacterFrameData {
  private readonly characterFacade = inject(CharacterFacade);
  id = input.required({ transform: numberAttribute });
  character = computed(() => this.characterFacade.characters().find((c) => c.id === this.id()));

  constructor() {
    effect(() => this.characterFacade.loadCharacterMovesById(this.id(), this.character()!.name));
  }
}
