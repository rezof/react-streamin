// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "../../../components/ContentTemplate";
import { Loading } from "../../../components/LoadingStatus";

import SeasonsList from "./SeasonsList";
import EpisodesList from "./EpisodesList";
import ShowHeader from "./ShowHeader";

import type { stateType as showStateType, showDetailsType } from "../ShowState";

const ContentWrapper = Styled.div`
  min-height: calc(100vh - 50px);
`;

const ShowContentBody = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShowContentWrapper = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// const ShowExpandContent = Styled.div`
//   flex: 1;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid #9c9ea6;
//   border-right: none;
//   border-left: none;
// `;
//
// const ShowExpandContentText = Styled.p`
//   margin: 0;
//   padding: 0;
//   font-weight: 600;
//   font-size: 14px;
//   color: #9c9ea6;
// `;

type propsType = {
  showState: showStateType
};

type stateType = {
  selectedSeason: number
};

class ShowContent extends PureComponent {
  props: propsType;
  state: stateType;

  constructor(props: propsType) {
    super(props);
    this.state = {
      selectedSeason: 0
    };
    (this: any).seasonSelectedHandler = this.seasonSelectedHandler.bind(this);
    (this: any).renderShowContent = this.renderShowContent.bind(this);
  }

  seasonSelectedHandler(season: number) {
    this.setState({ selectedSeason: season });
  }

  renderShowContent() {
    const { showState: { loading_data, show } } = this.props;
    let content = null;
    if (loading_data) {
      content = <Loading />;
    } else if (
      show.hasOwnProperty("episodes") &&
      typeof show.episodes == "object" &&
      Object.keys(show.episodes).length
    ) {
      const { episodes } = show;
      const seasons = Object.keys(episodes);
      let episodesList = [];
      if (this.state.selectedSeason) {
        episodesList = episodes[this.state.selectedSeason];
      }
      content = [
        <SeasonsList
          seasonSelectionHandler={this.seasonSelectedHandler}
          key={1}
          data={seasons}
          selectedSeason={this.state.selectedSeason}
        />,
        <EpisodesList key={2} data={episodesList} />
      ];
    }

    return content;
  }

  render() {
    const { showState: { show } } = this.props;
    return (
      <ContentTemplate>
        <ContentWrapper>
          <ShowHeader showInfo={show} />
          <ShowContentBody>
            <ShowContentWrapper>
              {this.renderShowContent()}
            </ShowContentWrapper>
            {/*
            <ShowExpandContent>
                <ShowExpandContentText>
                  Expand
                </ShowExpandContentText>

            </ShowExpandContent>
            */}
          </ShowContentBody>
        </ContentWrapper>
      </ContentTemplate>
    );
  }
}

export default ShowContent;
