import { createReducer, on } from '@ngrx/store';
import * as authActionTypes from './auth.actions';
import { AuthState } from '../model/auth.model';

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  email: null,
  userId: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActionTypes.signUpSuccess, (state, { userId, email }) => ({
    ...state,
    userId,
    email,
    isLoggedIn: true,
    isLoading: false,
  })),
  on(authActionTypes.logInSuccess, (state, { userId, email }) => ({
    ...state,
    userId,
    email,
    isLoggedIn: true,
    isLoading: false,
  })),
  on(authActionTypes.signOutSuccess, (state) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
  })),
);
