import React from "react";
import Styled from "styled-components";

import HomeHeader from "./HomeHeader";
import HomeContentItem from "./HomeContentItem";
import LeftSideBar from "./LeftSideBar";

const Container = Styled.div`
    display: flex;
`;

const ContentWrapper = Styled.div`
  flex: 8;
`;

const ItemsList = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

const data = Array.apply(null, { length: 10 }).map((key, index) => index);

export default props => {
  return (
    <Container>
      <LeftSideBar />
      <ContentWrapper>
        <HomeHeader />
        <ItemsList>
          {data.map(item => <HomeContentItem key={item} />)}
        </ItemsList>
      </ContentWrapper>
    </Container>
  );
};
