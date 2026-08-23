import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActionTypes from './auth.actions';
import { catchError, concatMap, exhaustMap, from, map, of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthEffects {
    private readonly actions$ = inject(Actions)
    private readonly authApi = inject(AuthService)

    signUpEffect = createEffect(()=> {
        return this.actions$.pipe(
            ofType(authActionTypes.signUpRequest),
            concatMap(({email, password})=> {
                return from(this.authApi.signUp({email, password})).pipe(
                    map((data)=>{
                        return authActionTypes.signUpSuccess({
                           accessToken: data.accessToken,
                           email: data.user.email,
                           userId: data.user.id,
                        })
                    }),
                    catchError((error) => of(authActionTypes.signUpFailure({ error: error.message }))),
                )
            })
        )
    })

    logInEffect = createEffect(()=> {
        return this.actions$.pipe(
            ofType(authActionTypes.logInRequest),
            concatMap(({email,password})=> {
                return from (this.authApi.logIn({email,password})).pipe(
                    map((data)=>{
                        return authActionTypes.logInSuccess({
                            accessToken: data.accessToken,
                            email: data.user.email,
                            userId: data.user.id,
                        })
                    }),
                    catchError((error) => of(authActionTypes.logInFailure({ error: error.message }))),
                )
            })
        )
    })

}