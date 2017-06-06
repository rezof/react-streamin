// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import LeftSideBarSection from "./LeftSideBarSection";

const SideBarWrapper = Styled.div`
  flex: 1;
  background-color: #363949;
  border-right: 1px solid #2f3241;
`;

type propsType = {
  location: {
    pathname: string
  }
};

const defaultProps = {
  location: {
    pathname: ""
  }
};

class LeftSideBar extends PureComponent {
  props: propsType;
  static defaultProps = defaultProps;

  render() {
    const { location } = this.props;
    return (
      <SideBarWrapper>
        <LeftSideBarSection
          location={location.pathname}
          title="Main"
          items={[
            { title: "tv Shows", to: "/" },
            { title: "Movies", to: "/movies" },
            { title: "Tv Schedule", to: "schedule" }
          ]}
          selected="movies"
        />
      </SideBarWrapper>
    );
  }
}

export default LeftSideBar;
