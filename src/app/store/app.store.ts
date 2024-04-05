import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {UserDataStore} from "./userData/userData.reducer";


export interface State {
  router: RouterReducerState;
  userData: UserDataStore.IState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  userData: UserDataStore.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
