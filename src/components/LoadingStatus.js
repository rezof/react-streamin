import React from "react";
import Styled from "styled-components";

const LoadingWrapper = Styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

export const Loading = () => <LoadingWrapper>loading...</LoadingWrapper>;
