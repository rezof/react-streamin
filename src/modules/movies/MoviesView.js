// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import Header from "../header/headerView";
import ContentTemplate from "../../components/ContentTemplate";

import MoviesContent from "./components/MoviesContent";

const ContentWrapper = Styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #393d4c
`;

class MoviesView extends PureComponent {
  componentDidMount() {
    const { actions: { load_movies_action } } = this.props;
    // load_movies_action();
  }
  render() {
    const { location, moviesState } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <ContentTemplate location={location}>
          <MoviesContent moviesState={moviesState} />
        </ContentTemplate>
      </ContentWrapper>
    );
  }
}

export default MoviesView;
