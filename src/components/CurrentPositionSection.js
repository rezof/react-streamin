// @flow
import React from "react";
import Styled from "styled-components";

import { Link } from "react-router-dom";

import Icons from "../assets/icons";

const SectionWrapper = Styled.div`
  padding: 10px 0;
`;

const SectionTitle = Styled.p`
  text-transform: uppercase;
  font-size: 14px
  font-weight: 400;
  color: #feffff;
  padding-left: 15px;
  border-left: 3px solid transparent;
`;

const SectionItems = Styled.div`

`;

const SectionItem = Styled.div`
  padding: 0 15px;
  margin: 15px 0;
  color: #818493;
  border-left: 3px solid ${props => {
    return props.active ? "#189c84" : "transparent";
  }};
  color: ${props => {
    return props.active ? "#feffff" : "#818493";
  }};
`;

const SectionItemTitle = Styled(Link)`
  text-transform: capitalize;
  font-size: 14px;
  padding-left: 10px;
  text-decoration: none;
  color: inherit;
`;

const SubSectionWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  padding-top: 5px;
`;

const FakeIcon = Styled.div`
  height: 0;
  width: 0;
  padding: 8px;
  margin-bottom: 8px;
  border-left: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const CurrentItemTitle = Styled.span`
  padding: 8px 10px;
  font-size: 13px;
  color: lightgrey;
`;

type propsType = {
  title: string,
  items: Array<{
    title: string,
    to: string,
    sub?: { pattern: string }
  }>,
  location: string,
  name: string
};

const CurrentPositionSection = (props: propsType) => {
  const { title, items, location, name } = props;
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionItems>
        {items &&
          items.map((item, index) => {
            const { title: itemTitle, to, sub } = item;
            const active = to.toLowerCase() === location.toLowerCase();
            const properIconTitle = itemTitle.replace(" ", "_").toLowerCase();
            const Icon = Icons[properIconTitle];
            return (
              <SectionItem key={index} active={active}>
                <Icon size={20} />
                <SectionItemTitle to={to}>{itemTitle}</SectionItemTitle>
                {sub &&
                  sub.hasOwnProperty("pattern") &&
                  location.match(new RegExp(sub.pattern, "g")) &&
                  name &&
                  renderSubItem(name)}
              </SectionItem>
            );
          })}
      </SectionItems>
    </SectionWrapper>
  );
};

const renderSubItem = name =>
  <SubSectionWrapper>
    <FakeIcon />
    <CurrentItemTitle>{name}</CurrentItemTitle>
  </SubSectionWrapper>;

export default CurrentPositionSection;
