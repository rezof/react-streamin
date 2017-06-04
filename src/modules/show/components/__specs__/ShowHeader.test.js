import React from "react";
import { shallow, render } from "enzyme";
import { expect } from "chai";

import ShowHeader from "../ShowHeader";

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
  }
};

describe("ShowHeader tests", () => {
  it("show name", () => {
    const headerWrapper = render(<ShowHeader showInfo={show} />);
    expect(headerWrapper.find(".show-name").text()).to.equal(show.name);
  });

  it("ended show status", () => {
    const headerWrapper = render(<ShowHeader showInfo={show} />);
    expect(headerWrapper.find(".show-status").text()).to.equal(show.status);
  });

  it("running show status", () => {
    const headerWrapper = render(
      <ShowHeader showInfo={{ ...show, status: "running" }} />
    );
    const premiered = show.premiered.substring(0, 4) + " - ";
    expect(headerWrapper.find(".show-status").text()).to.equal(premiered);
  });
});
