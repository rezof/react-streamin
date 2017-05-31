import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_SHOW_DATA = "LOAD_SHOW_DATA";
const SHOW_DATA_LOADED = "SHOW_DATA_LOADED";
const SHOW_LOAD_DATA_FAILED = "SHOW_LOAD_DATA_FAILED";
const SHOW_DETAILS_LOADED = "SHOW_DETAILS_LOADED";

export const load_show_data = id => ({
  type: LOAD_SHOW_DATA,
  payload: id
});

const formatShowEpisode = data => {
  return data.reduce(function(acc, curr) {
    if (acc.hasOwnProperty(curr.season)) {
      acc[curr.season].push(curr);
    } else {
      acc[curr.season] = [curr];
    }
    return acc;
  }, {});
};

const fetch_show_data = id => {
  return fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then(r => r.json())
    .then(formatShowEpisode)
    .then(show_data_loaded)
    .catch(show_data_load_failed);
};

export const show_details_loaded = data => {
  return {
    type: SHOW_DETAILS_LOADED,
    payload: { ...data }
  };
};

const fetch_show_details = id => {
  return fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(r => r.json())
    .then(show_details_loaded)
    .catch(show_data_load_failed);
};

export const show_data_loaded = data => {
  return {
    type: SHOW_DATA_LOADED,
    payload: data
  };
};

export const show_data_load_failed = error => {
  return {
    type: SHOW_DATA_LOADED //SHOW_LOAD_DATA_FAILED,
  };
};

const initialState = {
  loading_data: true,
  loading_data_failed: false,
  show: {}
};

const ShowStateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_SHOW_DATA:
      return loop(
        {
          ...state,
          loading_data: true,
          loading_data_failed: false
        },
        Effects.promise(fetch_show_details, payload)
      );
    case SHOW_DETAILS_LOADED:
      return loop(
        {
          ...state,
          show: { ...payload }
        },
        Effects.promise(fetch_show_data, payload.id)
      );
    case SHOW_DATA_LOADED:
      return {
        ...state,
        loading_data: false,
        show: {
          ...state.show,
          episodes: { ...payload }
        }
      };
    case SHOW_LOAD_DATA_FAILED:
      return {
        ...state,
        loading_data: false,
        loading_data_failed: true
      };
    default:
      return state;
  }
};

export default ShowStateReducer;
