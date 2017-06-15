// @flow
import React from "react";
import Styled from "styled-components";

import MovieCastTab from "./MovieCastTab";

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
