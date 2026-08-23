import { createReducer, on } from '@ngrx/store';
import * as authActionTypes from './auth.actions';

interface AuthState {
    isLoading: boolean;
    isLoggedIn: boolean;
    email: string | null;
    userId: number | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    isLoading: false,
    isLoggedIn: false,
    email: null,
    userId: null,
    accessToken: null,

}

export const authReducer = createReducer(
    initialState,
    on(authActionTypes.signUpSuccess, (state, { userId, email, accessToken})=>({
        ...state,
        accessToken,
        userId,
        email,
        isLoggedIn: true,
        isLoading: false,
    }))
) 