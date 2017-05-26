import React from "react";
import Styled from "styled-components";

const ItemWrapper = Styled.div`
  width: 250px;
  height: 250px;
  background-color: #7c7e89;
  border-radius: 20px;
  margin: 10px 15px;
`;

const HomeContentItem = props => {
  return <ItemWrapper />;
};

export default HomeContentItem;
