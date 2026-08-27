import { createAction, props } from '@ngrx/store';
import { CharacterModel } from '../model/characters.model';

export const loadCharactersRequest = createAction('[CHARACTER] Load Characters Request');

export const loadCharactersSuccess = createAction(
  '[CHARACTER] Load Characters Success',
  props<{ characters: CharacterModel[]; isLoaded: boolean }>(),
);

export const loadCharactersFailure = createAction(
  '[CHARACTER] Load Characters Failure',
  props<{ error: string }>(),
);

export const loadCharactersSkipped = createAction('[CHARACTER] Load Characters Skipped (cached)');
