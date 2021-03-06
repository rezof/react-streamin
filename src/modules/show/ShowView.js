// @flow

import React, { PureComponent } from "react";
import Styled from "styled-components";

import Header from "../header/headerView";
import ShowContent from "./components/ShowContent";

import ContentTemplate from "../../components/ContentTemplate";

import type { stateType } from "./showState";

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
  showState: stateType,
  location: Object
};

class Show extends PureComponent {
  props: propsType;

  componentDidMount() {
    const {
      match: { params: { id: showId } },
      actions: { load_show_data },
      location,
      showState: { shows }
    } = this.props;
    if (!shows.hasOwnProperty(showId)) load_show_data(showId);
  }

  render() {
    const {
      showState: { loading_data, shows },
      location,
      match: { params: { id: showId } }
    } = this.props;
    let show = {};
    if (shows.hasOwnProperty(showId)) show = shows[showId];
    return (
      <ContentWrapper>
        <Header />
        <ContentTemplate location={location} name={show.name}>
          <ShowContent
            location={location}
            show={show}
            isLoading={loading_data}
          />
        </ContentTemplate>
      </ContentWrapper>
    );
  }
}

export default Show;
