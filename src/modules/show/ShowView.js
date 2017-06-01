// @flow

import React, { PureComponent } from "react";
import Styled from "styled-components";

import Header from "../header/headerView";
import ShowContent from "./components/ShowContent";

import type { stateType } from "./showState";

const showContainer = Styled.div`

`;

const ContentWrapper = Styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #393d4c
`;

type propsType = {
  match: {
    params: {
      id: number
    }
  },
  actions: {
    load_show_data: Function
  },
  showState: stateType
};

class Show extends PureComponent {
  constructor(props: propsType) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params: { id: showId } },
      actions: { load_show_data }
    } = this.props;
    load_show_data(showId);
  }

  render() {
    const { showState } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <ShowContent showState={showState} />
      </ContentWrapper>
    );
  }
}

export default Show;
