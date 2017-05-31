import React from "react";
import Styled from "styled-components";

import icons from "../../../assets/icons";

const { right_arrow: RightArrowIcon } = icons;

const ListContainer = Styled.div`
  flex: 1;
  max-width: 40vw;
  max-height: 60vh;
  overflow: scroll;
`;

const EpisodesList = props => {
  const { data } = props;
  return (
    <ListContainer>
      <EpisodeListItem number="#" data={{ name: "Episode Title" }} />
      {data.map((episode, index) => (
        <EpisodeListItem
          hoverable
          number={episode.number}
          key={index}
          data={episode}
        />
      ))}
    </ListContainer>
  );
};

const EpisodeItemContainer = Styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

const EpisodeNumberContainer = Styled.div`
  flex: 1;
`;

const Text = Styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.2);
`;

const EpisodeNameContainer = Styled.div`
  flex: 3;
`;

const EpisodeArrowContainer = Styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.2);
`;

const EpisodeListItem = props => {
  const { data: { name }, number } = props;
  let Container = EpisodeItemContainer;
  if (props.hasOwnProperty("hoverable")) {
    Container = Container.extend`
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    `;
  }

  return (
    <Container>
      <EpisodeNumberContainer>
        <Text>
          {number}
        </Text>
      </EpisodeNumberContainer>
      <EpisodeNameContainer>
        <Text>
          {name}
        </Text>
      </EpisodeNameContainer>
      <EpisodeArrowContainer>
        {parseInt(number) ? <RightArrowIcon size={24} /> : null}
      </EpisodeArrowContainer>
    </Container>
  );
};

export default EpisodesList;