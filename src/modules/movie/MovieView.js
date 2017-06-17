// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "./../../components/ContentTemplate";
import Header from "../header/headerView";

import type { stateType } from "./MovieState";

import MovieHeader from "./components/MovieHeader";
import MovieBody from "./components/MovieBody";

const MovieContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MovieContent = Styled.div`
  flex: 1;
  min-height: 55vh;
`;

type propsType = {
  movieState: stateType
};

class MovieView extends PureComponent {
  props: propsType;

  componentDidMount() {
    const {
      actions: { load_movie_details_action },
      match: { params: { id } }
    } = this.props;
    load_movie_details_action(id);
  }

  componentWillUnmount() {
    const { actions: { reset_state_action } } = this.props;
    reset_state_action();
  }

  render() {
    const { movieState: { movie } } = this.props;
    return (
      <MovieContainer>
        <Header />
        <ContentTemplate>
          <MovieHeader movie={movie} />
          <MovieContent>
            <MovieBody movie={movie} />
          </MovieContent>
        </ContentTemplate>
      </MovieContainer>
    );
  }
}

export default MovieView;
