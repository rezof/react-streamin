// @flow
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

type SeasonsListPropsType = {
  data: Array<string>,
  selectedSeason: number,
  seasonSelectionHandler: Function
};

const SeasonsList = (props: SeasonsListPropsType) => {
  const { data, seasonSelectionHandler, selectedSeason } = props;
  return (
    <ListContainer>
      <SeasonListItem clickHandler={() => {}} index={"0"} key={0} />
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

const SeasonListItem = (props: SeasonListItemPropsType) => {
  const { index, clickHandler, selectedSeason } = props;
  let Container = SeasonItemContainer;

  if (index !== 0) {
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
  }

  return (
    <Container onClick={() => clickHandler(index)}>
      <SeasonNumberContainer>
        <Text>
          {index}
        </Text>
      </SeasonNumberContainer>
      <SeasonNameContainer>
        <Text>
          {`season ${index == 0 ? "#" : index}`}
        </Text>
      </SeasonNameContainer>
      <SeasonArrowContainer>
        {parseInt(index) ? <RightArrowIcon size={24} /> : null}
      </SeasonArrowContainer>
    </Container>
  );
};

export default SeasonsList;
