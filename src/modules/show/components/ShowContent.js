// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentStatus from "../../../components/ContentStatus";

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

type propsType = {
  show: showDetailsType,
  isLoading: boolean,
  location: Object
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
    const { show, isLoading } = this.props;
    let content = null;
    if (isLoading) {
      content = <ContentStatus>Loading...</ContentStatus>;
    } else if (
      show &&
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
    const { show, location } = this.props;
    return (
      <ContentWrapper>
        <ShowHeader showInfo={show} />
        <ShowContentBody>
          <ShowContentWrapper>
            {this.renderShowContent()}
          </ShowContentWrapper>
        </ShowContentBody>
      </ContentWrapper>
    );
  }
}

export default ShowContent;
