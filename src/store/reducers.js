import { combineReducers } from "redux-loop-symbol-ponyfill";

import homeState from "../modules/home/HomeState";
import showState from "../modules/show/ShowState";
import moviesState from "../modules/movies/MoviesState";

const reducers = combineReducers({
  homeState,
  showState,
  moviesState
});

export default reducers;
