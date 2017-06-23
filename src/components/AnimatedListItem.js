// @flow
import React from "react";
import Styled, { keyframes } from "styled-components";
import * as animations from "react-animations";

const wrapper = Styled.div`

`;

class AnimatedListItem extends React.PureComponent {
  render() {
    const { children, duration, animation } = this.props;
    let Wrapper = wrapper;
    const Animation = animations[animation];
    const KeyFrameAnimation = keyframes`${Animation}`;
    Wrapper = Wrapper.extend`
          animation: ${duration}s ${KeyFrameAnimation};
    `;
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}

export default AnimatedListItem;
