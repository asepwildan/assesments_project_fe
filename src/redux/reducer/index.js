import { combineReducers } from "redux";
import getListGameReducer from "./getListGame";
import getFilterGameReducer from "./getFiltergame";
const rootReducer = combineReducers({ getListGameReducer, getFilterGameReducer });

export default rootReducer;
