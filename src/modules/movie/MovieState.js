// @flow
import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_MOVIE_DETAILS = "LOAD_MOVIE_DETAILS";
const MOVIE_DETAILS_LOADED = "MOVIE_DETAILS_LOADED";
const MOVIE_CAST_LOADED = "MOVIE_CAST_LOADED";
const MOVIE_VIDEOS_LOADED = "MOVIE_VIDEOS_LOADED";
const RESET_STATE = "RESET_STATE";

type actionType = {
  type: string,
  payload?: {
    id?: number,
    movie?: Object,
    cast?: Array<movieCastType>,
    videos?: Array<movieVideosType>
  }
};

const load_movie_details = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=571f89e8e2fdb653f0b2bb281fa8f241`
  )
    .then(r => r.json())
    .then(movie_details_loaded)
    .catch(err => {
      console.log("thrown", err);
    });
};

const load_movie_credits = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=571f89e8e2fdb653f0b2bb281fa8f241`
  )
    .then(res => res.json())
    .then(filter_cast_from_credits)
    .then(movie_cast_loaded_action)
    .catch();
};

const load_movie_videos = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=571f89e8e2fdb653f0b2bb281fa8f241`
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movie_videos_loaded_action)
    .catch(err => {
      console.log("thrown", err);
    });
};

const filter_cast_from_credits = data => {
  if (
    data &&
    data.hasOwnProperty("cast") &&
    typeof data.cast === "object" &&
    "slice" in data.cast
  ) {
    return data.cast.filter(c => !!c.profile_path).slice(0, 20);
  } else {
    return [];
  }
};

type movieCastType = {
  cast_id: number,
  character: string,
  id: number,
  name: string,
  profile_path: string
};

export const movie_cast_loaded_action = (
  cast: Array<movieCastType>
): actionType => ({
  type: MOVIE_CAST_LOADED,
  payload: {
    cast
  }
});

type movieVideosType = {
  id: string,
  key: string,
  name: string,
  site: string
};

export const movie_videos_loaded_action = (
  videos: Array<movieVideosType>
): actionType => ({
  type: MOVIE_VIDEOS_LOADED,
  payload: { videos }
});

export const reset_state_action = (): actionType => ({
  type: RESET_STATE
});

export const load_movie_details_action = (id: number): actionType => ({
  type: LOAD_MOVIE_DETAILS,
  payload: { id }
});

export const movie_details_loaded = (movie: movieDetailsType): actionType => ({
  type: MOVIE_DETAILS_LOADED,
  payload: { movie }
});

export type movieDetailsType = {
  id?: number,
  adult?: boolean,
  backdrop_path?: string,
  budget?: number,
  genres?: Array<{ id: number, name: string }>,
  title?: string,
  overview?: string,
  poster_path?: string,
  release_date?: string,
  runtime?: number,
  cast?: Array<movieCastType>,
  videos?: Array<movieVideosType>
};

export type stateType = {
  loading_movie_details: boolean,
  loading_movie_details_failed: boolean,
  loading_movie_cast: boolean,
  loading_movie_cast_failed: boolean,
  loading_movie_videos: boolean,
  loading_movie_videos_failed: boolean,
  movie?: movieDetailsType
};

const InitialState = {
  loading_movie_details: false,
  loading_movie_details_failed: false,
  loading_movie_cast: false,
  loading_movie_cast_failed: false,
  loading_movie_videos: false,
  loading_movie_videos_failed: false
};

const movie_loaded_effects = id => {
  if (id === -1) {
    return [];
  }
  return [
    Effects.promise(load_movie_videos.bind(null, id)),
    Effects.promise(load_movie_credits.bind(null, id))
  ];
};

const MovieStateReducer = (
  state: stateType = InitialState,
  { type, payload }: actionType
): stateType => {
  switch (type) {
    case LOAD_MOVIE_DETAILS:
      if (!payload || !payload.hasOwnProperty("id")) {
        return {
          ...state,
          loading_movie_details_failed: true
        };
      }
      const { id } = payload;
      if (!id) {
        return {
          ...state
        };
      }
      return loop(
        {
          ...state,
          loading_movie_details: true
        },
        Effects.promise(load_movie_details.bind(null, id))
      );
    case MOVIE_DETAILS_LOADED:
      if (!(payload && payload.hasOwnProperty("movie") && payload.movie)) {
        return {
          ...state
        };
      }
      const { movie } = payload;
      const { id: movieId = -1 } = movie;
      return loop(
        {
          ...state,
          loading_movie_details: false,
          loading_movie_details_failed: false,
          movie
        },
        Effects.batch(movie_loaded_effects(movieId))
      );
    case MOVIE_CAST_LOADED:
      if (!payload || !payload.hasOwnProperty("cast")) {
        return {
          ...state,
          loading_movie_cast_failed: true
        };
      }
      return {
        ...state,
        loading_movie_cast: false,
        movie: {
          ...state.movie,
          cast: payload.cast
        }
      };
    case MOVIE_VIDEOS_LOADED:
      if (!payload || !payload.hasOwnProperty("videos")) {
        return {
          ...state,
          loading_movie_videos_failed: true
        };
      }
      return {
        ...state,
        loading_movie_videos: false,
        loading_movie_videos_failed: false,
        movie: {
          ...state.movie,
          videos: payload.videos
        }
      };
    case RESET_STATE:
      return {
        loading_movie_details: false,
        loading_movie_details_failed: false,
        loading_movie_cast: false,
        loading_movie_cast_failed: false,
        loading_movie_videos: false,
        loading_movie_videos_failed: false
      };
    default:
      return state;
  }
};

export default MovieStateReducer;
