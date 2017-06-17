// @flow
import React from "react";
import Styled from "styled-components";

import MovieCastTab from "./MovieCastTab";
import MovieVideosTab from "./MovieVideosTab";

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

const MovieBodyContent = ({ movie, selectedTab }) => {
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
