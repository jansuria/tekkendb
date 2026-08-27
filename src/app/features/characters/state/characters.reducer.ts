import { createReducer, on } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { CharacterState } from '../model/characters.model';

const initialState: CharacterState = {
  characters: [],
  isLoaded: false,
};

export const characterReducer = createReducer(
  initialState,
  on(characterActionTypes.loadCharactersSuccess, (state, { characters, isLoaded }) => ({
    ...state,
    characters,
    isLoaded,
  })),
);
