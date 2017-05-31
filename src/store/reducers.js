import { combineReducers } from "redux-loop-symbol-ponyfill";

import homeState from "../modules/home/HomeState";
import showState from "../modules/show/ShowState";

const reducers = combineReducers({
  homeState,
  showState
});

export default reducers;
