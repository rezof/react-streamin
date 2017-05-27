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
    return (
      <SideBarWrapper>
        <LeftSideBarSection
          title="Main"
          items={[
            { title: "Movies" },
            { title: "tv Shows" },
            { title: "Tv Schedule" }
          ]}
          selected="movies"
        />
      </SideBarWrapper>
    );
  }
}

export default LeftSideBar;
