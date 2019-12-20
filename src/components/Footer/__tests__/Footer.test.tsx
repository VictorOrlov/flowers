import React from "react";
import Footer from "../Footer";
import { shallow } from "enzyme";

it("render correctly Footer component", () => {
  const FooterComponent = shallow(<Footer />);
  expect(FooterComponent).toMatchSnapshot();
});
