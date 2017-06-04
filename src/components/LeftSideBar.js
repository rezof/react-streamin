import React, { PureComponent } from "react";
import Styled from "styled-components";

import LeftSideBarSection from "./LeftSideBarSection";

const SideBarWrapper = Styled.div`
  flex: 1;
  background-color: #363949;
  border-right: 1px solid #2f3241;
`;

class LeftSideBar extends PureComponent {
  render() {
    const { location: { pathname } } = this.props;
    return (
      <SideBarWrapper>
        <LeftSideBarSection
          location={pathname}
          title="Main"
          items={[
            { title: "Movies", to: "/" },
            { title: "tv Shows", to: "/tv" },
            { title: "Tv Schedule", to: "schedule" }
          ]}
          selected="movies"
        />
      </SideBarWrapper>
    );
  }
}

export default LeftSideBar;
