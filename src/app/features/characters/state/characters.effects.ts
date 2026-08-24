import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from '../../../services/characters/character.service';
import * as characterActionTypes from './characters.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class CharacterEffects {
  private readonly actions$ = inject(Actions);
  private readonly characterApi = inject(CharacterService);

  loadCharacters = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActionTypes.loadCharactersRequest),
      switchMap(() => {
        return from(this.characterApi.getCharacters()).pipe(
          map((data) => {
            console.log(data);
            return characterActionTypes.loadCharactersSuccess({
              characters: data,
            });
          }),
          catchError((error) =>
            of(characterActionTypes.loadCharactersFailure({ error: error.message })),
          ),
        );
      }),
    );
  });
}
