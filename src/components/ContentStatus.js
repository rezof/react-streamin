import React from "react";
import Styled from "styled-components";

const StatusWrapper = Styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

const ContentStatus = props => <StatusWrapper>{props.children}</StatusWrapper>;

export default ContentStatus;
