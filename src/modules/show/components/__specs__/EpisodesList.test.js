import React from "react";
import { shallow, render } from "enzyme";
import { expect } from "chai";

import { EpisodeListItem, EpisodesList } from "../EpisodesList";

describe("EpisodesList tests", () => {
  it("episode items count in list", () => {
    const episodesList = [
      {
        id: 234,
        number: 1,
        name: "episode 1"
      },
      {
        id: 341,
        number: 2,
        name: "episode 2"
      },
      {
        id: 232,
        number: 3,
        name: "episode 3"
      },
      {
        id: 213,
        number: 4,
        name: "episode 4"
      }
    ];
    const listWrapper = shallow(<EpisodesList data={episodesList} />);
    expect(listWrapper.find(EpisodeListItem)).to.have.length(
      episodesList.length
    );
  });

  it("fail - episode items count in list", () => {
    const episodesList = [
      {
        id: 234,
        number: 1,
        name: "episode 1"
      }
    ];
    const listWrapper = shallow(<EpisodesList data={episodesList} />);
    expect(listWrapper.find(EpisodeListItem)).to.not.have.length(0);
  });

  it("episode item number", () => {
    const episodeData = {
      id: 234,
      number: 1,
      name: "episode 1"
    };
    const episodeWrapper = render(<EpisodeListItem data={episodeData} />);

    expect(episodeWrapper.find(".episode-num").text()).to.equal(
      String(episodeData.number)
    );
  });

  it("episode item name", () => {
    const episodeData = {
      id: 234,
      number: 1,
      name: "episode 1"
    };
    const episodeWrapper = render(<EpisodeListItem data={episodeData} />);

    expect(episodeWrapper.find(".episode-name").text()).to.equal(
      episodeData.name
    );
  });

  it("episode item icon", () => {
    const episodeData = {
      id: 234,
      number: 1,
      name: "episode 1"
    };
    const episodeWrapper = render(<EpisodeListItem data={episodeData} />);

    expect(episodeWrapper.find(".right-arrow-icon")).to.have.length(1);
  });
});
