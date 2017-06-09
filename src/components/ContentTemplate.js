import React from "react";
import Styled from "styled-components";

import LeftSideBar from "./LeftSideBar";

const Container = Styled.div`
  display: flex;
  background-color: #393d4c;
`;

const ContentWrapper = Styled.div`
  flex: 8;
`;

export default props => {
  const { children, location } = props;
  return (
    <Container>
      <LeftSideBar location={location} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};
