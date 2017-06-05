// @flow

import React, { PureComponent } from "react";
import Styled from "styled-components";

import Header from "../header/headerView";
import ShowContent from "./components/ShowContent";

import ContentTemplate from "../../components/ContentTemplate";

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
  props: propsType;

  componentDidMount() {
    const {
      match: { params: { id: showId } },
      actions: { load_show_data },
      location,
      showState: { show: { id } }
    } = this.props;
    // TODO check of show in shows object
    if (showId != id) load_show_data(showId);
  }

  render() {
    const { showState, location } = this.props;
    return (
      <ContentWrapper>
        <Header />
        <ContentTemplate>
          <ShowContent location={location} showState={showState} />
        </ContentTemplate>
      </ContentWrapper>
    );
  }
}

export default Show;
