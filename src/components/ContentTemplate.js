import React from "react";
import Styled from "styled-components";

import LeftSideBar from "./LeftSideBar";

const Container = Styled.div`
  display: flex;
`;

const ContentWrapper = Styled.div`
  flex: 8;
`;

export default props => {
  const { children } = props;
  return (
    <Container>
      <LeftSideBar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};
