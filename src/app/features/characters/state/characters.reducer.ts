import { createReducer, on } from '@ngrx/store';
import * as characterActionTypes from './characters.actions';
import { CharacterState, CharacterMoves } from '../model/characters.model';

const initialCharacterState: CharacterState = {
  characters: [],
  areCharacterLoaded: false,
};

const initialCharacterMovesState: CharacterMoves = {
  characterMoves: [],
};

export const characterMovesReducer = createReducer(
  initialCharacterMovesState,
  on(
    characterActionTypes.loadCharacterMovesByIdSuccess,
    (state, { characterId, characterMoves }) => ({
      ...state,
      characterMoves: [
        ...state.characterMoves.filter((set) => set.characterId !== characterId),
        { characterId, Moves: characterMoves },
      ],
    }),
  ),
);

export const characterReducer = createReducer(
  initialCharacterState,
  on(characterActionTypes.loadCharactersSuccess, (state, { characters, areCharacterLoaded }) => ({
    ...state,
    characters,
    areCharacterLoaded,
  })),
);
