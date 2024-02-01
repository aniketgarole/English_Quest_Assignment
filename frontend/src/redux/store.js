import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  authReducer,
});

const myMiddleWare = store => dispatch => action => {

    if (typeof action === "function") {
      return action(dispatch)
    }

    return dispatch(action)
}

export const store = legacy_createStore(rootReducer, applyMiddleware(myMiddleWare));


