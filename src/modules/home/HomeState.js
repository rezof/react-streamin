// @flow

import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_DATA = "LOAD_DATA";
const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";
const DATA_LOADED = "DATA_LOADED";

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

type loadDataActionType = {
  type: string
};

export const load_data = (): loadDataActionType => {
  return { type: LOAD_DATA };
};

type showType = {
  id: number,
  name: string,
  premiered: string,
  image: {
    medium: string,
    original: string
  },
  summary: string,
  status: string
};

type dataLoadedActionType = {
  type: string,
  payload: Array<showType>
};

export const data_loaded = (data: Array<showType>): dataLoadedActionType => {
  return { type: DATA_LOADED, payload: data };
};

const initialState = {
  loading_data: false,
  data: []
};

type actionType = {
  type: string,
  payload?: Object
};

type stateType = {
  loading_data: boolean,
  data: Array<showType>
};

const reducer = (
  state: stateType = initialState,
  { type, payload }: actionType
) => {
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
      let loaded_data = [];
      if (typeof payload == "object" && payload.hasOwnProperty("slice"))
        loaded_data = payload.slice(0, 15);
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
