// @flow

import React from "react";
import Styled from "styled-components";

import type { showEpisodeType } from "../ShowState";

import icons from "../../../assets/icons";

const { right_arrow: RightArrowIcon } = icons;

const ListContainer = Styled.div`
  flex: 1;
  max-width: 40vw;
  max-height: 500px;
  overflow: scroll;
`;

type propsType = {
  data: Array<showEpisodeType>,
  selected?: number
};

const EpisodeListHeader = () =>
  <EpisodeItemContainer>
    <EpisodeNumberContainer>
      <Text>
        #
      </Text>
    </EpisodeNumberContainer>
    <EpisodeNameContainer>
      <Text>
        Episode #
      </Text>
    </EpisodeNameContainer>
    <EpisodeArrowContainer />
  </EpisodeItemContainer>;

export const EpisodesList = (props: propsType) => {
  const { data } = props;
  return (
    <ListContainer>
      {EpisodeListHeader()}
      {data.map((episode, index) =>
        <EpisodeListItem key={index} data={episode} />
      )}
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

export const EpisodeListItem = props => {
  const { data: { name, number } } = props;
  let Container = EpisodeItemContainer.extend`
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  `;
  return (
    <Container>
      <EpisodeNumberContainer>
        <Text className="episode-num">
          {number}
        </Text>
      </EpisodeNumberContainer>
      <EpisodeNameContainer>
        <Text className="episode-name">
          {name}
        </Text>
      </EpisodeNameContainer>
      <EpisodeArrowContainer>
        <RightArrowIcon className="right-arrow-icon" size={24} />
      </EpisodeArrowContainer>
    </Container>
  );
};

export default EpisodesList;
