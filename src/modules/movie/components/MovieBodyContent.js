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
  let Content = null;
  if (selectedTab === "cast" && typeof movie.cast === "object") {
    const { cast } = movie;
    Content = <MovieCastTab cast={cast} />;
  } else if (selectedTab === "videos" && typeof movie.videos === "object") {
    const { videos } = movie;
    Content = <MovieVideosTab videos={videos} />;
  }
  return (
    <MovieBodyContentWrapper>
      <MovieBodyTabContent>
        {Content}
      </MovieBodyTabContent>
    </MovieBodyContentWrapper>
  );
};

export default MovieBodyContent;
