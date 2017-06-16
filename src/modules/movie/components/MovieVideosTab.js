import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoWrapper = Styled.div`
  width: 350px;
  height: 197px;
  margin: 10px 15px;
  box-shadow: 1px 0px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const VideoNameContainer = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: cenrer;
`;

const Iframe = Styled.iframe`
  border: none;
`;

const VideoNameText = Styled.span`
  font-size: 16px;
  color: lightgrey;
  padding-top: 12px;
`;

const MovieVideosTab = ({ videos }) => {
  return (
    <Wrapper>
      {videos.map(video => {
        const { key, name } = video;
        return (
          <VideoWrapper>
            <Iframe type="text/html" src={`//www.youtube.com/embed/${key}`} />
            <VideoNameContainer>
              <VideoNameText>
                {name}
              </VideoNameText>
            </VideoNameContainer>
          </VideoWrapper>
        );
      })}
    </Wrapper>
  );
};

export default MovieVideosTab;
