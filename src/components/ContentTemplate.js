import React from "react";
import Styled from "styled-components";

import LeftSideBar from "./LeftSideBar";

const Container = Styled.div`
  display: flex;
  background-color: #393d4c;
`;

const LeftSideBarWrapper = Styled.div`
  flex: 2;
  background-color: #363949;
  border-right: 1px solid #2f3241;
  display: flex;
`;

const ContentWrapper = Styled.div`
  flex: 12;
`;

export default props => {
  const { children, location, name } = props;
  return (
    <Container>
      <LeftSideBarWrapper>
        <LeftSideBar location={location} name={name} />
      </LeftSideBarWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};
