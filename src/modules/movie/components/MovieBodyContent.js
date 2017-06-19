// @flow
import React from "react";
import Styled from "styled-components";

import MovieCastTab from "./MovieCastTab";
import MovieVideosTab from "./MovieVideosTab";

import type { movieDetailsType } from "../movieState";

const MovieBodyContentWrapper = Styled.div`
  flex: 1;
  display: flex;
`;

const MovieBodyTabContent = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type propsType = {
  movie: movieDetailsType,
  selectedTab: string
};

const MovieBodyContent = ({ movie, selectedTab }: propsType) => {
  const { cast, videos } = movie;
  return (
    <MovieBodyContentWrapper>
      <MovieBodyTabContent>
        <MovieCastTab active={selectedTab === "cast"} cast={cast} />
        <MovieVideosTab active={selectedTab === "videos"} videos={videos} />
      </MovieBodyTabContent>
    </MovieBodyContentWrapper>
  );
};

export default MovieBodyContent;
