import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { selectAllCharacters } from './characters.selectors';

@Injectable({ providedIn: 'root' })
export class CharacterFacade {
  private readonly store = inject(Store);
  public characters = this.store.selectSignal(selectAllCharacters);

  public loadCharacters() {
    this.store.dispatch(characterActionTypes.loadCharactersRequest());
  }

  public loadCharacterMovesById(characterId: number) {
    this.store.dispatch(characterActionTypes.loadCharacterMovesByIdRequest({ characterId }));
  }
}
