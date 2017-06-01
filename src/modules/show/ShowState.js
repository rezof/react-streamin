// @flow

import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_SHOW_DATA = "LOAD_SHOW_DATA";
const SHOW_DATA_LOADED = "SHOW_DATA_LOADED";
const SHOW_LOAD_DATA_FAILED = "SHOW_LOAD_DATA_FAILED";
const SHOW_DETAILS_LOADED = "SHOW_DETAILS_LOADED";

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

const fetch_show_data = ({ id }: { id: number }) => {
  return fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then(r => r.json())
    .then(formatShowEpisode)
    .then(show_data_loaded)
    .catch(show_data_load_failed);
};

const fetch_show_details = (id: number) => {
  return fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(r => r.json())
    .then(show_details_loaded)
    .catch(show_data_load_failed);
};

type loadShowDataActionType = {
  type: string,
  payload: number
};

export const load_show_data = (id: number): loadShowDataActionType => ({
  type: LOAD_SHOW_DATA,
  payload: id
});

type showDetailsType = {
  name?: string,
  image?: {
    medium: string,
    original: string
  },
  status?: string,
  premiered?: string,
  episodes?: Array<showEpisodeType>
};

type showDetailsLoadedActionType = {
  type: string,
  payload: showDetailsType
};

export const show_details_loaded = (
  data: showDetailsType
): showDetailsLoadedActionType => {
  return {
    type: SHOW_DETAILS_LOADED,
    payload: { ...data }
  };
};

export type showEpisodeType = {
  id: number,
  name: string,
  season: number,
  number: number,
  summary: string
};

type showDataLoadedActionType = {
  type: string,
  payload: Array<showEpisodeType>
};

export const show_data_loaded = (
  data: Array<showEpisodeType>
): showDataLoadedActionType => {
  return {
    type: SHOW_DATA_LOADED,
    payload: data
  };
};

type showDataLoadFailedActionType = {
  type: string
};

export const show_data_load_failed = (): showDataLoadFailedActionType => {
  return {
    type: SHOW_DATA_LOADED //SHOW_LOAD_DATA_FAILED,
  };
};

export type stateType = {
  loading_data: boolean,
  loading_data_failed: boolean,
  show: showDetailsType
};

const initialState = {
  loading_data: true,
  loading_data_failed: false,
  show: {}
};

type ActionType = {
  type: string,
  payload?: Object
};

const ShowStateReducer = (
  state: stateType = initialState,
  { type, payload }: ActionType
) => {
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
          show: payload
        },
        Effects.promise(fetch_show_data, payload)
      );
    case SHOW_DATA_LOADED:
      return {
        ...state,
        loading_data: false,
        show: {
          ...state.show,
          episodes: payload
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
