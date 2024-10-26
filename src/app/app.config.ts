import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { isDevMode } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideRouter } from "@angular/router";
import { provideRouterStore, routerReducer } from "@ngrx/router-store";

import { routes } from "./app.routes";

// import * as authEffects from './app/auth/store/effects';
// import * as feedEffects from './app/shared/components/feed/store/effects';
// import * as popularTagsEffects from './app/shared/components/popularTags/store/effects';
// import * as addToFavoritesEffects from './app/shared/components/addToFavorites/store/effects';
// import { authInterceptor } from './app/shared/services/authInterceptor';
// import { authFeatureKey, authReducer } from './app/auth/store/reducers';
// import {
//   feedFeatureKey,
//   feedReducer,
// } from './app/shared/components/feed/store/reducers';
// import {
//   popularTagsFeatureKey,
//   popularTagsReducer,
// } from './app/shared/components/popularTags/store/reducers';
// import { AddToFavoritesService } from './app/shared/components/addToFavorites/services/addToFavorites.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // withInterceptors([authInterceptor])
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...routes]),
    provideStore({
      // router: routerReducer,
    }),
    provideRouterStore(),
    // provideState(
    // popularTagsFeatureKey, popularTagsReducer
    // provideState(authFeatureKey, authReducer),
    // provideState(feedFeatureKey, feedReducer),
    // ),
    provideEffects(),
    // authEffects,
    // feedEffects,
    // popularTagsEffects,
    // addToFavoritesEffects
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    // AddToFavoritesService,
  ],
};
