import React from "react";
import { shallow, render } from "enzyme";
import { expect } from "chai";

import { SeasonsList, SeasonListItem } from "../SeasonsList";

describe("SeasonsList tests", () => {
  it("season items count is list", () => {
    const seasons = [1, 2, 3, 4, 5, 6];
    const seasonsWrapper = shallow(
      <SeasonsList
        data={seasons}
        seasonSelectionHandler={() => {}}
        selectedSeason={0}
      />
    );
    expect(seasonsWrapper.find(SeasonListItem)).to.be.length(seasons.length);
  });

  it("season item callback on click", () => {
    const seasonNumber = 3;
    function seasonClickHandler(num) {
      expect(num).to.equal(seasonNumber);
    }
    const seasonWrapper = shallow(
      <SeasonListItem
        clickHandler={seasonClickHandler}
        index={seasonNumber}
        selectedSeason={1}
      />
    );
    seasonWrapper.simulate("click");
  });
});
