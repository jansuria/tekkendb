import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterMoves, CharacterState } from '../model/characters.model';

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectCharacterMovesState = createFeatureSelector<CharacterMoves>('characterMoves');

export const selectAllCharacters = createSelector(
  selectCharacterState,
  (state) => state.characters,
);

export const selectCharacterIsLoaded = createSelector(
  selectCharacterState,
  (state) => state.areCharacterLoaded,
);

export const selectCharacterMoves = createSelector(
  selectCharacterMovesState,
  (state) => state.characterMoves,
);

export const selectCharacterMovesIsLoaded = (characterId: number) =>
  createSelector(selectCharacterMoves, (sets) =>
    sets.some((set) => set.characterId === characterId),
  );
