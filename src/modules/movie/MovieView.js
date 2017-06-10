import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "./../../components/ContentTemplate";
import Header from "../header/headerView";

import MovieHeader from "./components/MovieHeader";

const MovieContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MovieContent = Styled.div`
  flex: 1;
  min-height: 100vh;
`;

class MovieView extends PureComponent {
  render() {
    const { movieState: { movie } } = this.props;
    return (
      <MovieContainer>
        <Header />
        <ContentTemplate>
          <MovieHeader movie={movie} />
          <MovieContent />
        </ContentTemplate>
      </MovieContainer>
    );
  }
}

export default MovieView;
