// @flow
import React from "react";
import Styled, { keyframes } from "styled-components";
import * as animations from "react-animations";

const wrapper = Styled.div`

`;

class AnimatedListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }

  componentWillMount() {
    const { mountAnimation } = this.props;
    this.setState({ animationName: mountAnimation });
  }

  render() {
    const { children, duration, animate, unMountAnimation } = this.props;
    let Wrapper = wrapper;
    if (animate) {
      const Animation = animations[unMountAnimation];
      const KeyFrameAnimation = keyframes`${Animation}`;
      Wrapper = Wrapper.extend`
            animation: ${duration}s ${KeyFrameAnimation};
      `;
    } else {
      const { animationName } = this.state;
      const Animation = animations[animationName];
      const KeyFrameAnimation = keyframes`${Animation}`;
      Wrapper = Wrapper.extend`
            animation: ${duration}s ${KeyFrameAnimation};
      `;
    }
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}

export default AnimatedListItem;
