// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import HomeHeader from "./HomeHeader";
import HomeContentItem from "./HomeContentItem";
import ContentStatus from "../../../components/ContentStatus";
import AnimatedListItem from "../../../components/AnimatedListItem";

import type { showType, stateType as propsType } from "../HomeState";

const ItemsList = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

const ContentWrapper = Styled.div`
  flex: 1;
`;

type stateType = {
  animate: boolean,
  animation: string,
  duration: number
};
class HomeContent extends PureComponent {
  props: propsType;
  state: stateType = {
    animate: true,
    animation: "fadeIn",
    duration: 0.5
  };

  componentWillRecieveProps(nextProps: stateType) {
    if (nextProps.data !== this.props.data) {
      this.setState({ animate: true, animation: "fadeOut" }, () =>
        this.setState({ animate: false })
      );
    }
  }

  render() {
    const { data, loading_data } = this.props;
    const { animate, animation, duration } = this.state;
    let content = null;
    if (loading_data) {
      content = <ContentStatus>Loading...</ContentStatus>;
    } else {
      content = data.map(item =>
        <AnimatedListItem
          duration={duration}
          key={item.id}
          animate={animate}
          animation={animation}
        >
          <HomeContentItem item={item} />
          {" "}
        </AnimatedListItem>
      );
    }
    return (
      <ContentWrapper>
        <HomeHeader />
        <ItemsList>
          {content}
        </ItemsList>
      </ContentWrapper>
    );
  }
}

export default HomeContent;
