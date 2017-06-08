import React, { PureComponent } from "react";
import Styled from "styled-components";

import { Loading } from "../../../components/LoadingStatus";

import MoviesContentItem from "./MoviesContentItem";
import Header from "./MoviesHeader";

const ContentWrapper = Styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ItemWrapper = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

class MoviesContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "latest"
    };
    this.renderContent = this.renderContent.bind(this);
    this.headerTabs = this.headerTabs.bind(this);
  }
  renderContent() {
    const {
      moviesState: { loading_upcoming_movies, loading_latest_movies, movies }
    } = this.props;
    const { selectedTab } = this.state;
    let content = null;
    if (
      (this.state.selectedTab.toLowerCase() === "latest" &&
        loading_latest_movies) ||
      (this.state.selectedTab.toLowerCase() === "upcoming" &&
        loading_upcoming_movies)
    ) {
      content = <Loading />;
    } else if (
      typeof movies === "object" &&
      movies[selectedTab] &&
      typeof movies[selectedTab].map === "function"
    ) {
      content = movies[selectedTab].map(movie =>
        <MoviesContentItem key={movie.id} item={movie} />
      );
    }
    return content;
  }

  displayMoviesChanged(key) {
    const {
      moviesState: { movies },
      actions: { load_latest_movies_action, load_upcoming_movies_action }
    } = this.props;
    this.setState({ selectedTab: key.toLowerCase() }, () => {
      const { selectedTab } = this.state;
      if (
        selectedTab === "latest" &&
        (!movies["latest"] || !movies["latest"].length)
      ) {
        load_latest_movies_action();
      } else if (
        selectedTab === "upcoming" &&
        (!movies["upcoming"] || !movies["upcoming"].length)
      ) {
        load_upcoming_movies_action();
      }
    });
  }

  headerTabs() {
    const tabs = {
      Latest: this.displayMoviesChanged.bind(this, "Latest"),
      Upcoming: this.displayMoviesChanged.bind(this, "Upcoming"),
      "Top Rated": this.displayMoviesChanged.bind(this, "Top Rated")
    };

    return <Header tabs={tabs} active={this.state.selectedTab} />;
  }

  render() {
    const { moviesState: { loading_data, movies } } = this.props;
    return (
      <ContentWrapper>
        {this.headerTabs()}
        <ItemWrapper>
          {this.renderContent()}
        </ItemWrapper>
      </ContentWrapper>
    );
  }
}

export default MoviesContent;
