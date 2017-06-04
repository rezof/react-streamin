// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "../../../components/ContentTemplate";
import HomeHeader from "./HomeHeader";
import HomeContentItem from "./HomeContentItem";
import { Loading } from "../../../components/LoadingStatus";

import type { showType, stateType } from "../HomeState";

const ItemsList = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

type propsType = stateType;

class HomeContent extends PureComponent {
  props: propsType;

  constructor(props: propsType) {
    super(props);
  }

  render() {
    const { data, loading_data } = this.props;
    let content = null;
    if (loading_data) {
      content = <Loading />;
    } else {
      content = data.map(item => <HomeContentItem key={item.id} item={item} />);
    }
    return (
      <ContentTemplate>
        <HomeHeader />
        <ItemsList>
          {content}
        </ItemsList>
      </ContentTemplate>
    );
  }
}

export default HomeContent;
