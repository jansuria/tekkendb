import { createAction, props } from '@ngrx/store';
import { CharacterModel, Move } from '../model/characters.model';

export const loadCharactersRequest = createAction('[CHARACTER] Load Characters Request');

export const loadCharactersSuccess = createAction(
  '[CHARACTER] Load Characters Success',
  props<{ characters: CharacterModel[]; areCharacterLoaded: boolean }>(),
);

export const loadCharactersFailure = createAction(
  '[CHARACTER] Load Characters Failure',
  props<{ error: string }>(),
);

export const loadCharactersSkipped = createAction('[CHARACTER] Load Characters Skipped (cached)');

export const loadCharacterMovesByIdRequest = createAction(
  '[MOVES] Character Moves Request',
  props<{ characterId: number }>(),
);

export const loadCharacterMovesByIdSuccess = createAction(
  '[MOVES] Character Moves Success',
  props<{
    characterId: number;
    characterMoves: Move[];
  }>(),
);

export const loadCharacterMovesSkipped = createAction(
  '[MOVES] Load Character Moves Skipped (cached)',
);

export const loadCharacterMovesByIdFailure = createAction(
  '[MOVES] Character Moves Failure',
  props<{ error: string }>(),
);
