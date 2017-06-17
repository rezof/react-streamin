import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  flex: 1;
  display: ${props => (props.active === true ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoWrapper = Styled.div`
  margin: 10px 15px;
  box-shadow: 1px 0px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const Iframe = Styled.iframe`
  border: none;
  width: 350px;
  height: 197px;
`;

const VideoNameContainer = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: cenrer;
`;

const VideoNameText = Styled.span`
  font-size: 16px;
  color: lightgrey;
  padding: 10px;
`;

const MovieVideosTab = ({ videos, active }) => {
  return (
    <Wrapper active={active}>
      {videos &&
        videos.map(video => {
          const { key, name } = video;
          return <VideoItem key={key} id={key} name={name} />;
        })}
    </Wrapper>
  );
};

const VideoItem = ({ name, id }) =>
  <VideoWrapper>
    <Iframe type="text/html" src={`//www.youtube.com/embed/${id}`} />
    <VideoNameContainer>
      <VideoNameText>
        {name}
      </VideoNameText>
    </VideoNameContainer>
  </VideoWrapper>;

export default MovieVideosTab;
