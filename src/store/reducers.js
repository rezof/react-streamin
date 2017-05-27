import { combineReducers } from "redux-loop-symbol-ponyfill";
import homeState from "../modules/home/HomeState";

const reducers = combineReducers({
  homeState
});

export default reducers;
