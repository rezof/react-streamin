import React, { PureComponent } from "react";
import Styled from "styled-components";

import icons from "../../assets/icons";
const { search: SearchIcon } = icons;

const HeaderWrapper = Styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #363949;
  border-bottom: 1px solid #343746;
`;

const SearchInput = Styled.input`
  width: 50%;
  height: 20px;
  padding: 5px 25px;
  background-color: transparent;
  border-color: transparent;
  color: #48515e;
  font-size: 16px;
`;

const SearchWrapper = Styled.div`
  flex: 2;
  position: relative;
`;

const UserSectionWrapper = Styled.div`
  flex: 1;
`;

const Offset = Styled.div`
  flex: 1;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Offset />
        <SearchWrapper>
          <SearchIcon
            size={25}
            style={{ position: "absolute", top: "5px", color: "#48515e" }}
          />
          <SearchInput placeholder="What are you looking for?" />
        </SearchWrapper>
        <UserSectionWrapper />
      </HeaderWrapper>
    );
  }
}

export default Header;
