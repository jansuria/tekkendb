import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authReducer } from './auth/state/auth.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { CharacterEffects } from './features/characters/state/characters.effects';
import { characterReducer } from './features/characters/state/characters.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ auth: authReducer, character: characterReducer }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    provideEffects([AuthEffects, CharacterEffects]),
    provideOptimus({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
