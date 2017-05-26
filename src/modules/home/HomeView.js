import React, { PureComponent } from "react";
import Styled from "styled-components";
import Header from "../header/headerView";
import HomeContent from "../../components/HomeContent";

const ContentWrapper = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #393d4c
`;

class Home extends PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Header />
        <HomeContent />
      </ContentWrapper>
    );
  }
}

export default Home;
