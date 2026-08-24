import { createAction, props } from '@ngrx/store';

export const signUpRequest = createAction(
  '[AUTH] Sign Up Request',
  props<{ email: string; password: string }>(),
);

export const signUpSuccess = createAction(
  '[AUTH] Sign Up Success',
  props<{ userId: number; email: string; accessToken: string }>(),
);

export const signUpFailure = createAction('[AUTH] Sign Up Failed', props<{ error: string }>());

export const logInRequest = createAction(
  '[AUTH] Log In Request',
  props<{ email: string; password: string }>(),
);

export const logInSuccess = createAction(
  '[AUTH] Log In Success',
  props<{ userId: number; email: string; accessToken: string }>(),
);

export const logInFailure = createAction('[AUTH] Log In Failure', props<{ error: string }>());
