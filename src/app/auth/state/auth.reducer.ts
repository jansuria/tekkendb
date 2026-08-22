import { createReducer, on } from '@ngrx/store';

interface AuthState {
    isLoading: boolean;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoading: false,
    isLoggedIn: false,
}

export const authReducer = createReducer(
    initialState,
) 