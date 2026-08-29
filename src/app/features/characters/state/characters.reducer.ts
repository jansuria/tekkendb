import { createReducer, on } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { CharacterState } from '../model/characters.model';

const initialState: CharacterState = {
  characters: [],
  isCharacterLoaded: false,
  characterMoves: [],
  isCharacterMovesLoaded: false,
};

export const characterReducer = createReducer(
  initialState,
  on(characterActionTypes.loadCharactersSuccess, (state, { characters, isCharacterLoaded }) => ({
    ...state,
    characters,
    isCharacterLoaded,
  })),
  on(
    characterActionTypes.loadCharacterMovesByIdSuccess,
    (state, { characterMoves, isCharacterMovesLoaded }) => ({
      ...state,
      characterMoves,
      isCharacterMovesLoaded,
    }),
  ),
);
