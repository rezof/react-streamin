import React from "react";
import Styled from "styled-components";

const HomeHeaderWrapper = Styled.div`
  padding-top: 20px;
`;

const BrowseTitle = Styled.h1`
  padding: 30px;
  margin: 0;
  text-transform: capitalize;
  color: white;
  font-weight: 200;
`;

const HomeTab = Styled.div`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 20px;
  padding: 15px 3px;
  display: inline-block;
  letter-spacing: 1px;
  border: 2px solid transparent;
  color: ${props => (props.active ? "white" : "#6f7687")};
  border-bottom-color: ${props => (props.active ? "#199782" : "transparent")};
`;

const HomeTabs = Styled.div`
  width: 100%;
  margin-bottom: -2px;
`;

const HomeHeaderSeparator = Styled.div`
  width: 100%;
  border-bottom: 2px solid #2f3241;
`;

export default props => (
  <HomeHeaderWrapper>
    <BrowseTitle>
      Movies
    </BrowseTitle>
    <HomeTabs>
      <HomeTab active>Latest</HomeTab>
      <HomeTab>Trending</HomeTab>
      <HomeTab>New</HomeTab>
    </HomeTabs>
    <HomeHeaderSeparator />
  </HomeHeaderWrapper>
);
