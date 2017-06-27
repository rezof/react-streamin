// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";
import Header from "../header/headerView";
import HomeContent from "./components/HomeContent";

import ContentTemplate from "../../components/ContentTemplate";

import type { stateType } from "./HomeState";

const ContentWrapper = Styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #393d4c
`;

type propType = {
  actions: {
    load_data: Function
  },
  homeState: stateType,
  location: Object
};

class Home extends PureComponent {
  props: propType;

  componentDidMount() {
    const { actions: { load_data }, homeState } = this.props;
    if (homeState.data.length === 0) {
      load_data();
    }
  }

  render() {
    const { homeState: { data, loading_data }, location } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <ContentTemplate location={location}>
          <HomeContent data={data} loading_data={loading_data} />
        </ContentTemplate>
      </ContentWrapper>
    );
  }
}

export default Home;
