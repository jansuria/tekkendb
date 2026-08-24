import { createAction, props } from '@ngrx/store';
import { CharacterModel } from '../model/characters.model';

export const loadCharactersRequest = createAction('[CHARACTER] Load Characters Request');

export const loadCharactersSuccess = createAction(
  '[CHARACTER] Load Characters Success',
  props<{ characters: CharacterModel[] }>(),
);

export const loadCharactersFailure = createAction(
  '[CHARACTER] Load Characters Failure',
  props<{ error: string }>(),
);
