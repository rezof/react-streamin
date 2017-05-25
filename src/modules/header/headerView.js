import React, { PureComponent } from "react";
import Styled from "styled-components";

const HeaderWrapper = Styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-bottom: 1px solid #343746;
`;

const SearchInput = Styled.input`
  width: 180px;
  height: 20px;
  padding: 5px 15px;
  border-radius: 15px;
  border-color: transparent;
  text-align: center;
  color: #48515e;
  font-size: 16px;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <SearchInput placeholder="Search" />
      </HeaderWrapper>
    );
  }
}

export default Header;
