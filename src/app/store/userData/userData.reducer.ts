import {createReducer, on} from "@ngrx/store";
import {UserDataActions} from "./userData.actions";

export namespace UserDataStore {

  export interface IState {
    playerCharacters: null;
    customMonsters: null;
    encounters: null;
  }

  export const initialState: IState = {
    playerCharacters: null,
    customMonsters: null,
    encounters: null,
  };

  export const reducer = createReducer(
    initialState,

    on(UserDataActions.importData, (state) => ({
      ...state
    })),
  );
}
