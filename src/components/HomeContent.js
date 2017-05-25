import React from "react";
import Styled from "styled-components";

import HomeHeader from "./HomeHeader";

const ContentWrapper = Styled.div`
`;

export default props => {
  return (
    <ContentWrapper>
      <HomeHeader />
    </ContentWrapper>
  );
};
