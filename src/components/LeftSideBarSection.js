import React from "react";
import Styled from "styled-components";

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
  color: "#818493";
  border-left: 3px solid ${props => {
                           return props.active ? "#189c84" : "transparent";
                         }};
  color: ${props => {
           return props.active ? "#feffff" : "#818493";
         }};
`;

const SectionItemTitle = Styled.span`
  text-transform: capitalize;
  font-size: 14px;
  padding-left: 10px;
`;

const LeftSideBarSection = props => {
  const { title, items, selected } = props;
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionItems>
        {items.map((item, index) => {
          const { iconPath, title: itemTitle } = item;
          const active =
            itemTitle.toLowerCase() === props.selected.toLowerCase();
          const properIconTitle = itemTitle.replace(" ", "_").toLowerCase();
          const Icon = Icons[properIconTitle];
          return (
            <SectionItem key={index} active={active}>
              <Icon size={20} />
              <SectionItemTitle>{itemTitle}</SectionItemTitle>
            </SectionItem>
          );
        })}
      </SectionItems>
    </SectionWrapper>
  );
};

export default LeftSideBarSection;
