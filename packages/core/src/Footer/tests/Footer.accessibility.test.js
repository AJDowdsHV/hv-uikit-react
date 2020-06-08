/* eslint-env jest */

import React from "react";
import { mount } from "enzyme";

import { toHaveNoViolations } from "jest-axe";
import axe from "../../../config/axe-config";
import { Main, CustomLabels } from "../stories/Footer.stories";
import { HvProvider } from "../..";

expect.extend(toHaveNoViolations);

describe("Footer A11Y", () => {
  it("main state", async () => {
    const wrapper = mount(
      <HvProvider>
        <Main />
      </HvProvider>
    );

    const results = await axe(wrapper.html());
    expect(results).toHaveNoViolations();
  });

  it("custom sample", async () => {
    const wrapper = mount(
      <HvProvider>
        <CustomLabels />
      </HvProvider>
    );

    const results = await axe(wrapper.html());
    expect(results).toHaveNoViolations();
  });
});