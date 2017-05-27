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

const LoadingData = Styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

const data = Array.apply(null, { length: 10 }).map((key, index) => index);

export default props => {
  const { data, loading_data } = props;
  let content = null;
  if (loading_data) {
    content = <LoadingData>loading...</LoadingData>;
  } else {
    content = data.map(item => <HomeContentItem key={item.id} item={item} />);
  }
  return (
    <Container>
      <LeftSideBar />
      <ContentWrapper>
        <HomeHeader />
        <ItemsList>
          {content}
        </ItemsList>
      </ContentWrapper>
    </Container>
  );
};
