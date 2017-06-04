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

const LeftSideBarSection = props => {
  const { title, items, location } = props;
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionItems>
        {items.map((item, index) => {
          const { iconPath, title: itemTitle, to } = item;
          const active = to.toLowerCase() === location.toLowerCase();
          const properIconTitle = itemTitle.replace(" ", "_").toLowerCase();
          const Icon = Icons[properIconTitle];
          return (
            <SectionItem key={index} active={active}>
              <Icon size={20} />
              <SectionItemTitle to={to}>{itemTitle}</SectionItemTitle>
            </SectionItem>
          );
        })}
      </SectionItems>
    </SectionWrapper>
  );
};

export default LeftSideBarSection;
