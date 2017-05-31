import React, { PureComponent } from "react";
import Styled from "styled-components";

import ContentTemplate from "../../../components/ContentTemplate";

import SeasonsList from "./SeasonsList";
import EpisodesList from "./EpisodesList";
import ShowHeader from "./ShowHeader";

const ContentWrapper = Styled.div`
  min-height: calc(100vh - 50px);
`;

const Loading_Data = Styled.p`
  color: white;
  width: 100%;
  font-size: 14px;
`;

const ShowContentBody = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShowContentWrapper = Styled.div`
  width: 100%;
  max-height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ShowExpandContent = Styled.div`
  flex: 1;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9c9ea6;
  border-right: none;
  border-left: none;
`;

const ShowExpandContentText = Styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: #9c9ea6;
`;

class ShowContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.seasonSelectedHandler = this.seasonSelectedHandler.bind(this);
  }

  seasonSelectedHandler(season) {
    this.setState({ selectedSeason: season });
  }

  render() {
    const { showState: { load_show_data, show } } = this.props;
    let content = null;
    if (load_show_data) {
      content = <Loading_Data>loading...</Loading_Data>;
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
    return (
      <ContentTemplate>
        <ContentWrapper>
          <ShowHeader showInfo={show} />
          <ShowContentBody>
            <ShowContentWrapper>
              {content}
            </ShowContentWrapper>
            <ShowExpandContent>
              <ShowExpandContentText>
                Expand
              </ShowExpandContentText>
            </ShowExpandContent>
          </ShowContentBody>
        </ContentWrapper>
      </ContentTemplate>
    );
  }
}

export default ShowContent;
