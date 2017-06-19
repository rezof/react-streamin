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
  movieState: stateType,
  actions: {
    load_movie_details_action: Function,
    reset_state_action: Function
  },
  match: { params: { id: number } },
  location: { pathname: string }
};

class MovieView extends PureComponent {
  props: propsType;

  componentDidMount() {
    const {
      actions: { load_movie_details_action },
      match: { params: { id } }
    } = this.props;
    load_movie_details_action(id);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { actions: { reset_state_action } } = this.props;
    reset_state_action();
  }

  render() {
    const { movieState: { movie }, location } = this.props;
    const movie_name = movie && movie.title;
    return (
      <MovieContainer>
        <Header />
        <ContentTemplate location={location} name={movie_name}>
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
