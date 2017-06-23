// @flow
import React, { PureComponent } from "react";

import Styled from "styled-components";

import AnimatedListItem from "../../../components/AnimatedListItem";
import MoviesContentItem from "./MoviesContentItem";

const Wrapper = Styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

class MoviesContentList extends PureComponent {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      animation: "fadeIn",
      movies: movies,
      animationDuration: 0.5
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.movies !== nextProps.movies) {
      console.log("nextProps", nextProps);
      this.setState({ animation: "fadeOut" }, () => {
        setTimeout(() => {
          this.setState({ movies: nextProps.movies, animation: "fadeIn" });
        }, this.state.animationDuration * 1000);
      });
    }
  }

  render() {
    const { movies, animation, animationDuration } = this.state;
    return (
      <Wrapper>
        {movies &&
          movies.map(movie =>
            <AnimatedListItem
              key={movie.id}
              animation={animation}
              duration={animationDuration}
            >
              <MoviesContentItem item={movie} />
            </AnimatedListItem>
          )}
      </Wrapper>
    );
  }
}

export default MoviesContentList;
