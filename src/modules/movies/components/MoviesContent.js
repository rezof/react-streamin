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
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    const { moviesState: { loading_data, movies } } = this.props;
    let content = null;
    if (loading_data) {
      content = <Loading />;
    } else if (typeof movies === "object" && typeof movies.map === "function") {
      content = movies.map(movie =>
        <MoviesContentItem key={movie.id} item={movie} />
      );
    }
    return content;
  }

  render() {
    const { moviesState: { loading_data, movies } } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <ItemWrapper>
          {this.renderContent()}
        </ItemWrapper>
      </ContentWrapper>
    );
  }
}

export default MoviesContent;
