// @flow

import React, { PureComponent } from "react";
import Styled from "styled-components";

import { Link } from "react-router-dom";

import type { showType } from "../HomeState";

import icons from "../../../assets/icons";

const { plus: PlusIcon, play: PlayIcon, more: MoreIcon } = icons;

const ItemWrapper = Styled.div`
  width: 175px;
  height: 310px;
  border-radius: 20px;
  margin: 10px 15px;
`;

const ItemBodyShell = Styled.div`
  height: 80%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ItemTitle = Styled.div`
  width: 100%;
  height: 20%;
`;

const ItemTitleText = Styled.p`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  text-align: center;
  color: #f4f5f7;
`;

const ItemBodyOps = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

type propsType = {
  item: showType
};

type stateType = {
  showBodyOps: boolean
};

class HomeContentItem extends PureComponent {
  state: stateType;

  constructor(props: propsType) {
    super(props);
    this.state = {
      showBodyOps: false
    };
    (this: any).mouseEnterBody = this.mouseEnterBody.bind(this);
    (this: any).renderBodyOps = this.renderBodyOps.bind(this);
    (this: any).mouseLeaveBody = this.mouseLeaveBody.bind(this);
  }

  mouseEnterBody() {
    this.setState({ showBodyOps: true });
  }

  mouseLeaveBody() {
    this.setState({ showBodyOps: false });
  }

  renderBodyOps(id: number) {
    if (!this.state.showBodyOps) {
      return null;
    }
    return (
      <ItemBodyOps>
        <PlusIcon size={25} style={{ color: "white", flex: 1 }} />
        <Link
          to={`/show/${id}`}
          style={{
            flex: 1,
            textAlign: "center",
            border: "2px solid #17a28a",
            borderRadius: "15px"
          }}
        >
          <PlayIcon
            size={30}
            style={{
              color: "white"
            }}
          />
        </Link>
        <MoreIcon size={25} style={{ color: "white", flex: 1 }} />
      </ItemBodyOps>
    );
  }

  render() {
    const { item: { id, name, image: { medium } } } = this.props;
    const ItemBody = ItemBodyShell.extend`
      background-image: url(${medium})
    `;
    return (
      <ItemWrapper>
        <ItemBody
          onMouseEnter={this.mouseEnterBody}
          onMouseLeave={this.mouseLeaveBody}
        >
          {this.renderBodyOps(id)}
        </ItemBody>
        <ItemTitle>
          <ItemTitleText>
            {name}
          </ItemTitleText>
        </ItemTitle>
      </ItemWrapper>
    );
  }
}

export default HomeContentItem;
