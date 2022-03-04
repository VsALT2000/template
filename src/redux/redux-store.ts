import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AppReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    app: AppReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));