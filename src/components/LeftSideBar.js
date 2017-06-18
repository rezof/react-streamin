// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import CurrentPositionSection from "./CurrentPositionSection";

const SideBarWrapper = Styled.div`
  flex: 1;
`;

type propsType = {
  name: string,
  location: {
    pathname: string
  }
};

const defaultProps = {
  name: "",
  location: {
    pathname: ""
  }
};

const LeftSideBar = (props: propsType = defaultProps) => {
  const { location, name } = props;
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
};

export default LeftSideBar;
