import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { globalReducer } from "./Global/globalReducer";

const rootReducer = combineReducers({
    global: globalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));