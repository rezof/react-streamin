// @flow
import React from "react";
import Styled from "styled-components";

import icons from "../../../assets/icons";

const { right_arrow: RightArrowIcon } = icons;

const ListContainer = Styled.div`
  flex: 1;
  max-width: 40vw;
  max-height: 500px;
  overflow: scroll;
`;

type SeasonsListPropsType = {
  data: Array<string>,
  selectedSeason: number,
  seasonSelectionHandler: Function
};

const SeasonsListHeader = () =>
  <SeasonItemContainer>
    <SeasonNumberContainer>
      <Text>
        #
      </Text>
    </SeasonNumberContainer>
    <SeasonNameContainer>
      <Text>
        season #
      </Text>
    </SeasonNameContainer>
    <SeasonArrowContainer />
  </SeasonItemContainer>;

export const SeasonsList = (props: SeasonsListPropsType) => {
  const { data, seasonSelectionHandler, selectedSeason } = props;
  return (
    <ListContainer>
      {SeasonsListHeader()}
      {data.map(number => {
        return (
          <SeasonListItem
            clickHandler={seasonSelectionHandler}
            index={number}
            key={number}
            selectedSeason={selectedSeason}
          />
        );
      })}
    </ListContainer>
  );
};

const SeasonItemContainer = Styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

const SeasonNumberContainer = Styled.div`
  flex: 1;
`;

const Text = Styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.2);
`;

const SeasonNameContainer = Styled.div`
  flex: 3;
`;

const SeasonArrowContainer = Styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.2);
`;

type SeasonListItemPropsType = {
  index: string,
  clickHandler: Function,
  selectedSeason?: number
};

export const SeasonListItem = (props: SeasonListItemPropsType) => {
  const { index, clickHandler, selectedSeason } = props;
  let Container = SeasonItemContainer;

  if (selectedSeason === index) {
    // for some reason extend won't work
    Container = Styled(Container)`
      background-color: rgba(255, 255, 255, 0.05);
    `;
  }
  Container = Container.extend`
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  `;
  return (
    <Container
      className={`season-item-wrapper season-item-${index} ${selectedSeason ===
        index
        ? "active"
        : ""}`}
      onClick={() => clickHandler(index)}
    >
      <SeasonNumberContainer>
        <Text>
          {index}
        </Text>
      </SeasonNumberContainer>
      <SeasonNameContainer>
        <Text>
          season {index}
        </Text>
      </SeasonNameContainer>
      <SeasonArrowContainer>
        {parseInt(index) ? <RightArrowIcon size={24} /> : null}
      </SeasonArrowContainer>
    </Container>
  );
};

export default SeasonsList;
