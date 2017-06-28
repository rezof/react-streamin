// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  border-bottom: 1px solid rgba(211, 211, 211, 0.17);
  padding: 0 10%;
  margin-bottom: -2px;
`;

const MovieBodyTab = Styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -0.5px;
  cursor: pointer;
  color: ${props => (props.active ? "lightgrey" : "rgba(211, 211, 211, 0.32)")};
  border-bottom: ${props =>
    props.active ? "2px solid #199782" : "transparent"};
  &:hover {
    color: ${props => (props.active ? "lightgrey" : "rgba(211, 211, 211, 0.5)")}
  }
`;

const MovieBodyTabText = Styled.span`
  font-size: 16px;
  text-transform: lowercase;
  letter-spacing: 0.5px;
`;

type propsType = {
  selectedTab: string,
  tabs: Array<string>,
  tabClickHandler: Function
};

class MovieBodyTabs extends PureComponent {
  props: propsType;
  render() {
    const { selectedTab, tabs, tabClickHandler } = this.props;
    return (
      <Wrapper>
        {tabs.map((key: string) =>
          <MovieBodyTab
            onClick={() => tabClickHandler(key)}
            active={selectedTab === key ? true : false}
          >
            <MovieBodyTabText>
              {key}
            </MovieBodyTabText>
          </MovieBodyTab>
        )}
      </Wrapper>
    );
  }
}

export default MovieBodyTabs;
