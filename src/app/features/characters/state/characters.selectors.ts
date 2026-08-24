import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../model/characters.model';

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectAllCharacters = createSelector(
  selectCharacterState,
  (state) => state.characters,
);
