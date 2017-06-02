import React from "react";
import Styled from "styled-components";

const _ShowHeader = Styled.div`
  height: 40vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(47, 50, 65);
  border-bottom: 1px solid rgba(47, 50, 65, 0.8);
`;

const ShowHeaderInfo = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const ShowHeaderGradient = Styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(rgba(57, 61, 76, 0), rgba(57, 61, 76, 0.8) ,rgba(57, 61, 76, 1));
`;

const ShowHeaderTitleContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ShowHeaderTitle = Styled.p`
  font-size: 24px;
  color: white;
  margin: 0;
  padding: 10px 50px;
`;

const ShowHeaderOpsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 50px;
`;

const HeaderOpContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 50px;
  border: 2px solid #189c84;
  border-radius: 15px;
`;

const HeaderOpText = Styled.p`
  padding: 0;
  margin: 0;
  padding: 10px 20px;
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const RecommendationsContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RecommendationContainer = Styled.div`
  width: 40%;
  height: 40%;
  background-color: #e74c3c;
  border-radius: 20px;
  margin: 10px;
`;

const ShowStatusContainer = Styled.span`
  font-size: 12px;
  color: white;
  font-weight: 200;
`;

const ShowHeader = props => {
  let ShowHeader = _ShowHeader, showName = "", showStatus = "";
  const { showInfo: show } = props;
  if (show && show.hasOwnProperty("image")) {
    const { image: { medium }, status, premiered, name } = show;
    showStatus = status;
    showName = name;
    ShowHeader = _ShowHeader.extend`
      background-image: url(https://darksupernaturalangel.files.wordpress.com/2016/07/4567832-arrow-banner.jpg);
      border-bottom: none;
    `;
    if (status.toLowerCase() == "running") {
      showStatus = premiered.substring(0, 4) + " - ";
    }
  }
  return (
    <ShowHeader>
      <ShowHeaderGradient>
        <ShowHeaderInfo>
          <ShowHeaderTitleContainer>
            {show.hasOwnProperty("image") &&
              <ShowHeaderTitle>
                {showName}
                <ShowStatusContainer> ({showStatus})</ShowStatusContainer>
              </ShowHeaderTitle>}
          </ShowHeaderTitleContainer>
          <ShowHeaderOpsContainer>
            <HeaderOpContainer>
              <HeaderOpText>
                follow
              </HeaderOpText>
            </HeaderOpContainer>
          </ShowHeaderOpsContainer>
        </ShowHeaderInfo>
      </ShowHeaderGradient>
    </ShowHeader>
  );
};

export default ShowHeader;
