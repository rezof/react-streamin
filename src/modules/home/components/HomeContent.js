import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "../../../components/ContentTemplate";
import HomeHeader from "./HomeHeader";
import HomeContentItem from "./HomeContentItem";

const ItemsList = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    min-width: 80%;
`;

const LoadingData = Styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

class HomeContent extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, loading_data } = this.props;
    let content = null;
    if (loading_data) {
      content = <LoadingData>loading...</LoadingData>;
    } else {
      content = data.map(item => <HomeContentItem key={item.id} item={item} />);
    }
    return (
      <ContentTemplate>
        <HomeHeader />
        <ItemsList>
          {content}
        </ItemsList>
      </ContentTemplate>
    );
  }
}

export default HomeContent;
