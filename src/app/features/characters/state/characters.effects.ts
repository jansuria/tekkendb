import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from '../../../services/characters/character.service';
import * as characterActionTypes from './characters.actions';
import { catchError, filter, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCharacterIsLoaded } from './characters.selectors';

@Injectable()
export class CharacterEffects {
  private readonly actions$ = inject(Actions);
  private readonly characterApi = inject(CharacterService);
  private readonly store = inject(Store);

  loadCharacters = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActionTypes.loadCharactersRequest),
      withLatestFrom(this.store.select(selectCharacterIsLoaded)),
      switchMap(([ourAction, loaded]) => {
        if (loaded) {
          return of(characterActionTypes.loadCharactersSkipped());
        }
        return from(this.characterApi.getCharacters()).pipe(
          map((data) => {
            console.log(data);
            return characterActionTypes.loadCharactersSuccess({
              characters: data,
              isLoaded: true,
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
