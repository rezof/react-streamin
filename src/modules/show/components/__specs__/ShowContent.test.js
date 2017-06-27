import React from "react";
import { shallow, render, mount } from "enzyme";
import { expect } from "chai";

import ContentStatus from "../../../../components/ContentStatus";
import ShowContent from "../ShowContent";
import { SeasonListItem } from "../SeasonsList";

const show = {
  id: 1,
  name: "Under the Dome",
  status: "Ended",
  runtime: 60,
  premiered: "2013-06-24",
  image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
  },
  episodes: {
    1: [
      {
        id: 1,
        url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        name: "Pilot",
        season: 1,
        number: 1,
        airdate: "2013-06-24",
        airtime: "22:00",
        airstamp: "2013-06-24T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
        },
        summary:
          "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/1"
          }
        }
      },
      {
        id: 2,
        url: "http://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire",
        name: "The Fire",
        season: 1,
        number: 2,
        airdate: "2013-07-01",
        airtime: "22:00",
        airstamp: "2013-07-01T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg"
        },
        summary:
          "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/2"
          }
        }
      }
    ],
    2: [
      {
        id: 3,
        url: "http://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt",
        name: "Manhunt",
        season: 2,
        number: 3,
        airdate: "2013-07-08",
        airtime: "22:00",
        airstamp: "2013-07-08T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg"
        },
        summary:
          "<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/3"
          }
        }
      },
      {
        id: 4,
        url: "http://www.tvmaze.com/episodes/4/under-the-dome-1x04-outbreak",
        name: "Outbreak",
        season: 2,
        number: 4,
        airdate: "2013-07-15",
        airtime: "22:00",
        airstamp: "2013-07-15T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4391.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4391.jpg"
        },
        summary:
          "<p>The people of Chester's Mill fall into a state of panic as an outbreak of meningitis strikes their community, threatening their already depleted medical supplies. Meanwhile, Julia continues to search for answers into her husband's disappearance.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/4"
          }
        }
      },
      {
        id: 5,
        url:
          "http://www.tvmaze.com/episodes/5/under-the-dome-1x05-blue-on-blue",
        name: "Blue on Blue",
        season: 2,
        number: 5,
        airdate: "2013-07-22",
        airtime: "22:00",
        airstamp: "2013-07-22T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4392.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
        },
        summary:
          "<p>The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/5"
          }
        }
      }
    ],
    3: [
      {
        id: 6,
        url:
          "http://www.tvmaze.com/episodes/6/under-the-dome-1x06-the-endless-thirst",
        name: "The Endless Thirst",
        season: 3,
        number: 6,
        airdate: "2013-07-29",
        airtime: "22:00",
        airstamp: "2013-07-29T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4393.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4393.jpg"
        },
        summary:
          "<p>When the town begins to run low on water, the residents of Chester's Mill begin to fight for the remaining resources. Meanwhile, Julia discovers a strange connection that two of the town's residents have with the Dome.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/6"
          }
        }
      },
      {
        id: 7,
        url:
          "http://www.tvmaze.com/episodes/7/under-the-dome-1x07-imperfect-circles",
        name: "Imperfect Circles",
        season: 3,
        number: 7,
        airdate: "2013-08-05",
        airtime: "22:00",
        airstamp: "2013-08-05T22:00:00-04:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/1/4394.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/1/4394.jpg"
        },
        summary:
          "<p>Big Jim takes matters into his own hands when he feels his authority slipping away, and the dome displays its power when a life is taken just as a newborn arrives.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/7"
          }
        }
      }
    ]
  }
};

describe("ShowContent tests", () => {
  it("is loading", () => {
    const isLoading = true;
    const ShowContentWrapper = shallow(<ShowContent isLoading={isLoading} />);
    expect(ShowContentWrapper.find(ContentStatus).length).to.equal(1);
    expect(ShowContentWrapper.find(".season-item-wrapper").length).to.be.equal(
      0
    );
  });

  it("season list items count", () => {
    const ShowContentWrapper = render(<ShowContent show={show} />);
    expect(ShowContentWrapper.find(".season-item-wrapper").length).to.be.equal(
      Object.keys(show.episodes).length
    );
  });

  it("selected season change test", () => {
    const ShowContentWrapper = mount(<ShowContent show={show} />);
    const seasonId = 2;
    expect(ShowContentWrapper.find(".episode-item-wrapper").length).to.equal(0);
    ShowContentWrapper.find(`.season-item-${seasonId}`).simulate("click");
    expect(
      ShowContentWrapper.find(".season-item-wrapper.active").length
    ).to.equal(1);
    expect(ShowContentWrapper.find(".episode-item-wrapper").length).to.equal(
      show.episodes[seasonId].length
    );
  });
});
