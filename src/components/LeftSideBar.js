// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import CurrentPositionSection from "./CurrentPositionSection";

const SideBarWrapper = Styled.div`
  flex: 1;  
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
    const { location, name } = this.props;
    return (
      <SideBarWrapper>
        <CurrentPositionSection
          name={name}
          location={location.pathname}
          title="Main"
          items={[
            { title: "tv Shows", to: "/", sub: { pattern: "/show/[0-9]*$" } },
            {
              title: "Movies",
              to: "/movies",
              sub: { pattern: "/movie/[0-9]*$" }
            },
            { title: "Tv Schedule", to: "/schedule" }
          ]}
        />
      </SideBarWrapper>
    );
  }
}

export default LeftSideBar;
