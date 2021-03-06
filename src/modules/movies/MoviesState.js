// @flow
import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_LATEST_MOVIES = "LOAD_LATEST_MOVIES";
const LATEST_MOVIES_LOADED = "LATEST_MOVIES_LOADED";
const LOADING_LATEST_MOVIES_FAILED = "LOADING_LATEST_MOVIES_FAILED";

const LOAD_UPCOMING_MOVIES = "LOAD_UPCOMING_MOVIES";
const UPCOMING_MOVIES_LOADED = "UPCOMING_MOVIES_LOADED";
const LOADING_UPCOMING_MOVIES_FAILED = "LOADING_UPCOMING_MOVIES_FAILED";

const LOAD_TOP_RATED_MOVIES = "LOAD_TOP_RATED_MOVIES";

const CHANGE_SELECTED_TAB = "CHANGE_SELECTED_TAB";

const load_latest_movies = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=571f89e8e2fdb653f0b2bb281fa8f241&language=en-US&page=1"
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movies_loaded_action.bind(null, LATEST_MOVIES_LOADED))
    .catch(loading_latest_movies_failed_action);
};

const load_upcoming_movies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=571f89e8e2fdb653f0b2bb281fa8f241&language=en-US&page=1`
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movies_loaded_action.bind(null, UPCOMING_MOVIES_LOADED))
    .catch(loading_upcoming_movies_failed_action);
};

type ActionType = {
  type: string,
  payload?: Object | number | string | Array<movieDetailsType>
};

export const load_latest_movies_action = (): ActionType => ({
  type: LOAD_LATEST_MOVIES
});

export const load_upcoming_movies_action = (): ActionType => ({
  type: LOAD_UPCOMING_MOVIES
});

export const loading_latest_movies_failed_action = (): ActionType => ({
  type: LOADING_LATEST_MOVIES_FAILED
});

export const loading_upcoming_movies_failed_action = (): ActionType => ({
  type: LOADING_UPCOMING_MOVIES_FAILED
});

export const loading = (): ActionType => ({
  type: LOADING_LATEST_MOVIES_FAILED
});

export type movieDetailsType = {
  id: number,
  adult: boolean,
  backdrop_path: string,
  budget: number,
  genres: Array<{ id: number, name: string }>,
  title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  runtime: number
};

export const movies_loaded_action = (
  type: string,
  payload: movieDetailsType
): ActionType => ({
  type,
  payload
});

export const change_selected_tab_action = (payload: string) => ({
  type: CHANGE_SELECTED_TAB,
  payload
});

export type StateType = {
  selectedTab: string,
  loading_latest_movies: boolean,
  loading_upcoming_movies: boolean,
  loading_latest_movies_failed: boolean,
  loading_upcoming_movies_failed: boolean,
  movies?: {
    latest?: Array<movieDetailsType>,
    upcoming?: Array<movieDetailsType>
  }
};

const initialState = {
  selectedTab: "latest",
  loading_latest_movies: false,
  loading_upcoming_movies: false,
  loading_latest_movies_failed: false,
  loading_upcoming_movies_failed: false,
  movies: {
    latest: [],
    upcoming: []
  }
};

const MoviesReducer = (
  state: StateType = initialState,
  { type, payload }
): StateType => {
  switch (type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: String(payload)
      };
    case LOAD_LATEST_MOVIES:
      return loop(
        {
          ...state,
          loading_latest_movies: true,
          loading_latest_movies_failed: false
        },
        Effects.promise(load_latest_movies)
      );
    case LOAD_UPCOMING_MOVIES:
      return loop(
        {
          ...state,
          loading_upcoming_movies: true,
          loading_upcoming_movies_failed: false
        },
        Effects.promise(load_upcoming_movies)
      );
    case LATEST_MOVIES_LOADED:
      const movies = Object.assign({}, state.movies, { latest: payload });
      return {
        ...state,
        loading_latest_movies: false,
        loading_latest_movies_failed: false,
        movies
      };
    case LOADING_LATEST_MOVIES_FAILED:
      return {
        ...state,
        loading_latest_movies_failed: true,
        loading_latest_movies: false
      };
    case UPCOMING_MOVIES_LOADED:
      const _movies = Object.assign({}, state.movies, { upcoming: payload });
      return {
        ...state,
        loading_upcoming_movies: false,
        loading_latest_movies_failed: false,
        movies: _movies
      };
    case LOADING_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        loading_upcoming_movies_failed: true,
        loading_upcoming_movies: false
      };
    default:
      return state;
  }
};

export default MoviesReducer;
