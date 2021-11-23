import { combineReducers } from "redux";
import getListGameReducer from "./getListGame";
import getFilterGameReducer from "./getFiltergame";
import genreConditionReducer from "./setGenrecondition.js";
const rootReducer = combineReducers({
    getListGameReducer,
    getFilterGameReducer,
    genreConditionReducer,
});

export default rootReducer;
