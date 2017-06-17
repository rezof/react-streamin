import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  flex: 1;
  display: ${props => (props.active === true ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const CastItemWrapper = Styled.div`
  width: 160px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  box-shadow: 1px 0px 3px 3px rgba(0, 0, 0, 0.3);
`;

const ActorImage = Styled.img`
  flex: 1;
`;

const name = Styled.p`
  font-size: 12px;
  color: lightgrey;
  padding: 8px 5px;
  margin: 0;
  text-align: center;
`;

const ActorName = Styled(name)`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 3px;
`;

const CaracterName = name;

const MovieCastTab = ({ cast, active }) => {
  return (
    <Wrapper active={active}>
      {cast &&
        cast.map((c, index) => {
          return <MovieCastItem key={index} cast={c} />;
        })}
    </Wrapper>
  );
};

const MovieCastItem = ({ cast: { id, name, profile_path, character } }) => {
  return (
    <CastItemWrapper>
      <ActorImage
        src={`https://image.tmdb.org/t/p/w138_and_h175_bestv2${profile_path}`}
      />
      <ActorName>
        {name}
      </ActorName>
      <CaracterName>
        {character}
      </CaracterName>
    </CastItemWrapper>
  );
};

export default MovieCastTab;
