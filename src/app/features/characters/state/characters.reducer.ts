import { createReducer, on } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { CharacterState, CharacterMoves } from '../model/characters.model';

const initialState: CharacterState = {
  characters: [],
  isCharacterLoaded: false,
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
    (state, { characterId, characterMoves, isThisCharacterMovesLoaded }) => ({
      ...state,
      characters: state.characters.map((character) =>
        character.id === characterId
          ? {
              ...character,
              characterMoves: [{ isThisCharacterMovesLoaded, Moves: characterMoves }],
            }
          : character,
      ),
    }),
  ),
);
