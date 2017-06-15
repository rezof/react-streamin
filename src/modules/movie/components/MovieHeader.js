// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import type { movieDetailsType } from "../MovieState";

import icons from "../../../assets/icons";

const { heart, bookmark, star } = icons;

const Heart = Styled(heart)`
  padding: 8px;
  border: 1px solid #fefefe;
  border-radius: 22px;
  margin-right: 15px;
  color: #fefefe;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const Bookmark = Styled(bookmark)`
  padding: 8px;
  border: 1px solid white;
  border-radius: 22px;
  margin-right: 15px;
  color: #fefefe;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const Star = Styled(star)`
  padding: 8px;
  border: 1px solid white;
  border-radius: 22px;
  margin-right: 15px;
  color: #fefefe;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const HeaderWrapper = Styled.div`
    flex: 1;
    height: 45vh;
    background-color: rgba(255, 255, 255, 0.02);
    background-image: url(${props =>
      `https://image.tmdb.org/t/p/w1400_and_h450_bestv2/${props.background}`})
`;

const HeaderContent = Styled.div`
  flex: 1;
  display: flex;
  background-color: rgba(57, 61, 76, 0.95);
  height: 100%;
`;

const MoviePosterContainer = Styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MoviePoster = Styled.img`
  height: 90%;
  width: auto;
  margin: 5% 10%;
`;

const MovieInfoContainer = Styled.div`
  flex: 2;
  display: flex;
`;

const MovieTitleContainer = Styled.div`

`;

const MovieTitle = Styled.h1`
  font-weight: bold;
  color: lightgrey;
  display: inline-block;
`;

const MovieReleaseYear = Styled.h2`
  display: inline-block;
  color: rgba(211, 211, 211, 0.32);
  margin-left: 10px;
`;

const MovieOverview = Styled.div`
`;

const MovieLabel = Styled.h3`
  color: lightgrey;
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 0.05em;
`;

const MovieOverviewText = Styled.p`
  color: rgba(211, 211, 211, 0.32);
  font-size: 14px;
  letter-spacing: 0.3px;
`;

const MovieDetails = Styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieDetailsRow = Styled.div`
  display: flex;
`;

const MovieDetailsLabel = Styled.h4`
  color: lightgrey;
  flex: 1;
  text-align: left;
  margin-top: 0;
`;

const MovieDetailsText = Styled.span`
  flex: 1;
  font-size: 14px;
  color: rgba(211, 211, 211, 0.32);
`;

const MovieGenresWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const MovieDetailsGenre = Styled.span`
  font-size: 13px;
  background-color: #fefefe;
  color: black;
  padding: 5px 8px;
  margin: 5px;
  border-radius: 5px;
`;

const MovieOpsContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;

const MovieOpBtn = Styled.div`

`;

type propsType = {
  movie: movieDetailsType
};

class MovieHeader extends PureComponent {
  props: propsType;

  overviewFormatter(text) {
    return text.length > 300 ? text.substring(0, 300) + "..." : text;
  }

  renderMovieInfo(props: propsType) {
    const {
      movie: { title, release_date, overview, runtime, budget, genres }
    } = props;
    const runTimeHours = parseInt(runtime / 60);
    const runTimeMinutes = Math.floor(runtime % 60);
    const budgetArray = String(budget).split("");
    const _budget = budgetArray.map((key, index) => {
      let period = "";
      if (budgetArray.length !== index && index !== 0)
        period = index % 3 === 0 ? "," : "";
      return period + key;
    });
    return (
      <MovieInfoContainer>
        <MovieTitleContainer>
          <MovieTitle>
            {title}
          </MovieTitle>
          <MovieReleaseYear>
            ({release_date.substring(0, 4)})
          </MovieReleaseYear>
          <MovieOpsContainer>
            <Heart size={20} />
            <Bookmark size={20} />
            <Star size={20} />
          </MovieOpsContainer>
          <MovieOverview>
            <MovieLabel>Overview</MovieLabel>
            <MovieOverviewText>
              {this.overviewFormatter(overview)}
            </MovieOverviewText>
          </MovieOverview>
          <MovieDetails>
            <MovieDetailsRow>
              <MovieDetailsLabel>Runtime</MovieDetailsLabel>
              <MovieDetailsLabel>Budget</MovieDetailsLabel>
              <MovieDetailsLabel>Genres</MovieDetailsLabel>
            </MovieDetailsRow>
            <MovieDetailsRow>
              <MovieDetailsText>
                {runTimeHours}h {runTimeMinutes}min
              </MovieDetailsText>
              <MovieDetailsText>
                {_budget}
              </MovieDetailsText>
              <MovieGenresWrapper>
                {genres.map(({ name }) =>
                  <MovieDetailsGenre>{name}</MovieDetailsGenre>
                )}
              </MovieGenresWrapper>
            </MovieDetailsRow>
          </MovieDetails>
        </MovieTitleContainer>
      </MovieInfoContainer>
    );
  }

  render() {
    const { movie: { poster_path, backdrop_path } } = this.props;
    return (
      <HeaderWrapper background={backdrop_path}>
        <HeaderContent>
          <MoviePosterContainer>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
            />
          </MoviePosterContainer>
          {this.renderMovieInfo(this.props)}
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default MovieHeader;
