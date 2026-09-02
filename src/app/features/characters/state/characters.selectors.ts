import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../model/characters.model';

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectAllCharacters = createSelector(
  selectCharacterState,
  (state) => state.characters,
);

export const selectCharacterIsLoaded = createSelector(
  selectCharacterState,
  (state) => state.isCharacterLoaded,
);

export const selectCharacterMovesIsLoaded = (characterId: number) =>
  createSelector(
    selectAllCharacters,
    (character) =>
      character.find((character) => character.id === characterId)?.characterMoves?.[0]
        ?.isThisCharacterMovesLoaded ?? false,
  );
