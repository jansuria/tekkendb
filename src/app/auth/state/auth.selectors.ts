import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../model/auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(selectAuthState, (state) => state.isLoggedIn);
