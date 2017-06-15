// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";
import MovieBodyTabs from "./MovieBodyTabs";
import MovieBodyContent from "./MovieBodyContent";

const MovieBodyWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class MovieBody extends PureComponent {
  constructor(props) {
    super(props);
    const tabs = ["cast", "videos", "reviews"];
    this.state = {
      tabs,
      selectedTab: tabs[0]
    };
  }

  tabClickHandler(key: string) {
    this.setState({ selectedTab: key });
  }

  render() {
    const { tabs, selectedTab } = this.state;
    const { movie } = this.props;
    return (
      <MovieBodyWrapper>
        <MovieBodyTabs
          tabClickHandler={this.tabClickHandler.bind(this)}
          tabs={tabs}
          selectedTab={selectedTab}
        />
        <MovieBodyContent movie={movie} selectedTab={selectedTab} />
      </MovieBodyWrapper>
    );
  }
}

export default MovieBody;
