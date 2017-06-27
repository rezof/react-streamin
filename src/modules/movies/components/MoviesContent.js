// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import type { StateType } from "../MoviesState";

import ContentStatus from "../../../components/ContentStatus";
import MoviesContentList from "./MoviesContentList";

import Header from "./MoviesHeader";

const ContentWrapper = Styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
`;

type propsType = {
  moviesState: StateType,
  actions: {
    load_latest_movies_action: Function,
    load_upcoming_movies_action: Function,
    change_selected_tab_action: Function
  }
};

class MoviesContent extends PureComponent {
  props: propsType;

  constructor(props: propsType) {
    super(props);
    (this: any).renderContent = this.renderContent.bind(this);
    (this: any).headerTabs = this.headerTabs.bind(this);
  }

  componentWillReceiveProps(nextProps: propsType) {
    const {
      moviesState: {
        selectedTab,
        movies,
        loading_latest_movies,
        loading_upcoming_movies,
        loading_latest_movies_failed,
        loading_upcoming_movies_failed
      },
      actions: { load_latest_movies_action, load_upcoming_movies_action }
    } = nextProps;
    if (
      !movies[selectedTab] ||
      (typeof movies[selectedTab] === "object" &&
        movies[selectedTab].length === 0)
    ) {
      if (
        selectedTab === "latest" &&
        !loading_latest_movies &&
        !loading_latest_movies_failed
      ) {
        load_latest_movies_action();
      } else if (
        selectedTab === "upcoming" &&
        !loading_upcoming_movies &&
        !loading_upcoming_movies_failed
      ) {
        load_upcoming_movies_action();
      }
    }
  }

  renderContent() {
    const {
      moviesState: {
        selectedTab,
        loading_latest_movies,
        loading_latest_movies_failed,
        loading_upcoming_movies,
        loading_upcoming_movies_failed,
        loading_top_rated_movies,
        loading_top_rated_movies_failed,
        movies
      }
    } = this.props;
    let content = null;
    const currentTab = selectedTab.replace(" ", "_");
    if (
      (selectedTab.toLowerCase() === "latest" && loading_latest_movies) ||
      (selectedTab.toLowerCase() === "upcoming" && loading_upcoming_movies)
    ) {
      content = <ContentStatus>Loading...</ContentStatus>;
    } else if (eval(`loading_${currentTab}_movies_failed`) === true) {
      content = <ContentStatus>failed to load movies</ContentStatus>;
    } else if (
      typeof movies === "object" &&
      movies.hasOwnProperty(selectedTab)
    ) {
      content = <MoviesContentList movies={movies[selectedTab]} />;
    }
    return content;
  }

  displayMoviesChanged(key: string) {
    const {
      actions: { change_selected_tab_action },
      moviesState: { selectedTab }
    } = this.props;
    if (selectedTab !== key.toLowerCase())
      change_selected_tab_action(key.toLowerCase());
  }

  headerTabs() {
    const tabs = {
      Latest: this.displayMoviesChanged.bind(this, "Latest"),
      Upcoming: this.displayMoviesChanged.bind(this, "Upcoming"),
      "Top Rated": this.displayMoviesChanged.bind(this, "Top Rated")
    };
    const { moviesState: { movies, selectedTab } } = this.props;
    return <Header tabs={tabs} active={selectedTab} />;
  }

  render() {
    const { moviesState: { movies } } = this.props;
    return (
      <ContentWrapper>
        {this.headerTabs()}
        {this.renderContent()}
      </ContentWrapper>
    );
  }
}

export default MoviesContent;
