import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_DATA = "LOAD_DATA";
const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";
const DATA_LOADED = "DATA_LOADED";

export const load_data = () => {
  return { type: LOAD_DATA };
};

export const data_loaded = data => {
  return { type: DATA_LOADED, payload: data };
};

function fetch_data(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = require("../../assets/data.json");
      resolve(data);
    }, 3000);
  })
    .then(data_loaded)
    .catch(() => ({
      type: DATA_FETCH_ERROR
    }));
  // return fetch(`http://api.tvmaze.com/shows`)
  //   .then(r => r.json())
  //   .then(data_loaded)
  //   .catch(() => ({
  //     type: DATA_FETCH_ERROR
  //   }));
}

const initialState = {
  loading_data: false,
  data: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return loop(
        {
          ...state,
          loading_data: true
        },
        Effects.promise(fetch_data)
      );
    case DATA_LOADED:
      const loaded_data = payload.slice(0, 15);
      return {
        ...state,
        loading_data: false,
        data: loaded_data
      };
    case DATA_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
