// @flow
import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_MOVIE_DETAILS = "LOAD_MOVIE_DETAILS";
const MOVIE_DETAILS_LOADED = "MOVIE_DETAILS_LOADED";
const MOVIE_CAST_LOADED = "MOVIE_CAST_LOADED";

type actionType = {
  type: string,
  payload: {
    id?: number,
    data?: Object
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

const filter_cast_from_credits = data => {
  if (
    data &&
    data.hasOwnProperty("cast") &&
    typeof data.cast === "object" &&
    "slice" in data.cast
  ) {
    return data.cast.slice(0, 20);
  } else {
    return [];
  }
};

const load_movie_credits = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=571f89e8e2fdb653f0b2bb281fa8f241`
  )
    .then(res => res.json())
    .then(filter_cast_from_credits)
    .then(data => {
      return data;
    })
    .then(movie_cast_loaded_action)
    .catch();
};

export const movie_cast_loaded_action = (payload): actionType => ({
  type: MOVIE_CAST_LOADED,
  payload
});

export const load_movie_details_action = (id: number): actionType => ({
  type: LOAD_MOVIE_DETAILS,
  payload: { id }
});

export const movie_details_loaded = (data: movieDetailsType): actionType => ({
  type: MOVIE_DETAILS_LOADED,
  payload: { data }
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

export type stateType = {
  loading_movie_details: boolean,
  movie?: movieDetailsType
};

const InitialState = {
  loading_movie_details: false,
  movie: {
    adult: false,
    backdrop_path: "/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg",
    belongs_to_collection: null,
    budget: 120000000,
    genres: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 878,
        name: "Science Fiction"
      }
    ],
    homepage: "http://www.warnerbros.com/wonder-woman",
    id: 297762,
    imdb_id: "tt0451279",
    original_language: "en",
    original_title: "Wonder Woman",
    overview:
      "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
    popularity: 114.700275,
    poster_path: "/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    production_companies: [
      {
        name: "Dune Entertainment",
        id: 444
      },
      {
        name: "Atlas Entertainment",
        id: 507
      },
      {
        name: "Warner Bros.",
        id: 6194
      },
      {
        name: "DC Entertainment",
        id: 9993
      },
      {
        name: "Cruel & Unusual Films",
        id: 9995
      },
      {
        name: "TENCENT PICTURES",
        id: 81620
      },
      {
        name: "Wanda Pictures",
        id: 83838
      }
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "2017-05-30",
    revenue: 0,
    runtime: 141,
    spoken_languages: [
      {
        iso_639_1: "de",
        name: "Deutsch"
      },
      {
        iso_639_1: "en",
        name: "English"
      }
    ],
    status: "Released",
    tagline: "Power. Grace. Wisdom. Wonder.",
    title: "Wonder Woman",
    video: false,
    vote_average: 7.1,
    vote_count: 615
  }
};

const MovieStateReducer = (
  state: stateType = InitialState,
  { type, payload }: actionType
): stateType => {
  switch (type) {
    case LOAD_MOVIE_DETAILS:
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
      const { data: movie } = payload;
      return loop(
        {
          ...state,
          loading_movie_details: false,
          movie
        },
        Effects.promise(load_movie_credits.bind(null, movie.id))
      );
    case MOVIE_CAST_LOADED:
      const { movie: _movie } = state;
      const new_movie = Object.assign({}, _movie, { cast: payload });
      return {
        ...state,
        loading_movie_cast: false,
        movie: new_movie
      };
    default:
      return state;
  }
};

export default MovieStateReducer;
