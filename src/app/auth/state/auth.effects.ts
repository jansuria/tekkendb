import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActionTypes from './auth.actions';
import { catchError, concatMap, exhaustMap, from, map, of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { SupabaseService } from '../../services/auth/supabase.service';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly supabaseAuthApi = inject(SupabaseService);

  signUpEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActionTypes.signUpRequest),
      concatMap(({ email, password }) => {
        return from(this.supabaseAuthApi.signUp({ email, password })).pipe(
          map((data) => {
            return authActionTypes.signUpSuccess({
              email: data.user?.email ?? '',
              userId: data.user?.id ?? '',
            });
          }),
          catchError((error) => of(authActionTypes.signUpFailure({ error: error.message }))),
        );
      }),
    );
  });

  logInEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActionTypes.logInRequest),
      concatMap(({ email, password }) => {
        return from(this.supabaseAuthApi.signIn({ email, password })).pipe(
          map((data) => {
            return authActionTypes.logInSuccess({
              email: data.user?.email ?? '',
              userId: data.user?.id ?? '',
            });
          }),
          catchError((error) => of(authActionTypes.logInFailure({ error: error.message }))),
        );
      }),
    );
  });

  signOutEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActionTypes.signOutRequest),
      concatMap(() => {
        return from(this.supabaseAuthApi.signOut()).pipe(
          map(() => authActionTypes.signOutSuccess()),
          catchError((error) => of(authActionTypes.signOutFailure({ error: error.message }))),
        );
      }),
    );
  });
}
