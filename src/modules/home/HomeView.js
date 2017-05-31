import React, { PureComponent } from "react";
import Styled from "styled-components";
import Header from "../header/headerView";
import HomeContent from "./components/HomeContent";

const ContentWrapper = Styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #393d4c
`;

class Home extends PureComponent {
  componentDidMount() {
    const { actions: { load_data }, homeState } = this.props;
    if (homeState.data.length == 0) {
      load_data();
    }
  }

  render() {
    const { homeState: { data, loading_data } } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <HomeContent data={data} loading_data={loading_data} />
      </ContentWrapper>
    );
  }
}

export default Home;
