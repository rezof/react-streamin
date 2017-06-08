// @flow
import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_LATEST_MOVIES = "LOAD_LATEST_MOVIES";
const LOAD_UPCOMING_MOVIES = "LOAD_UPCOMING_MOVIES";
const LOAD_TOP_RATED_MOVIES = "LOAD_TOP_RATED_MOVIES";
const LATEST_MOVIES_LOADED = "LATEST_MOVIES_LOADED";
const UPCOMING_MOVIES_LOADED = "UPCOMING_MOVIES_LOADED";
const MOVIES_LOADING_FAILED = "MOVIES_LOADING_FAILED";

const load_latest_movies = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=571f89e8e2fdb653f0b2bb281fa8f241&language=en-US&page=1"
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movies_loaded_action.bind(null, LATEST_MOVIES_LOADED))
    .catch(movies_loading_failed_action);
};

const load_upcoming_movies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=571f89e8e2fdb653f0b2bb281fa8f241&language=en-US&page=1`
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movies_loaded_action.bind(null, UPCOMING_MOVIES_LOADED))
    .catch(movies_loading_failed_action);
};

type ActionType = {
  type: string,
  payload: Object | number
};

export const load_latest_movies_action = (): ActionType => ({
  type: LOAD_LATEST_MOVIES
});

export const load_upcoming_movies_action = (): ActionType => ({
  type: LOAD_UPCOMING_MOVIES
});

export const movies_loading_failed_action = (): ActionType => ({
  type: MOVIES_LOADING_FAILED
});

export const movies_loaded_action = (type, payload): ActionType => ({
  type,
  payload
});

type StateType = {
  loading_data: boolean,
  loading_failed: boolean,
  movies: Array
};

const initialState = {
  loading_latest_movies: false,
  loading_upcoming_movies: false,
  loading_latest_movies_failed: false,
  loading_upcoming_movies_failed: false,
  movies: []
};

const MoviesReducer = (
  state: stateType = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case LOAD_LATEST_MOVIES:
      return loop(
        {
          ...state,
          loading_latest_movies: true
        },
        Effects.promise(load_latest_movies)
      );
    case LOAD_UPCOMING_MOVIES:
      return loop(
        {
          ...state,
          loading_upcoming_movies: false,
          loading_upcoming_movies_failed: false
        },
        Effects.promise(load_upcoming_movies)
      );
    case LATEST_MOVIES_LOADED:
      return {
        ...state,
        loading_latest_movies: false,
        loading_latest_movies_failed: false,
        movies: {
          ...state.movies,
          latest: payload
        }
      };
    case UPCOMING_MOVIES_LOADED:
      return {
        ...state,
        loading_upcoming_movies: false,
        loading_latest_movies_failed: false,
        movies: {
          ...state.movies,
          upcoming: payload
        }
      };
    case MOVIES_LOADING_FAILED:
      return {
        ...state,
        loading_data: false,
        loading_failed: false
      };
    default:
      return state;
  }
};

export default MoviesReducer;
