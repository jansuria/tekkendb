import { createReducer, on } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { CharacterState } from '../model/characters.model';

const initialState: CharacterState = {
  characters: [],
};

export const characterReducer = createReducer(
  initialState,
  on(characterActionTypes.loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
  })),
);
