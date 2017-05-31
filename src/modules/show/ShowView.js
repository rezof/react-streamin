import React, { PureComponent } from "react";
import Styled from "styled-components";

import Header from "../header/headerView";
import ShowContent from "./components/ShowContent";

const showContainer = Styled.div`

`;

const ContentWrapper = Styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #393d4c
`;

class Show extends PureComponent {
  constructor(props) {
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
