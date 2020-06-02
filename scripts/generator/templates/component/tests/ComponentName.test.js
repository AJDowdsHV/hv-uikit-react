/* eslint-env jest */

import React from "react";
import { mount } from "enzyme";
import { Main } from "../stories/ComponentName.stories";
import { HvProvider, HvComponentName } from "../..";

describe("ComponentName", () => {
  let wrapper;

  it("should be defined", () => {
    wrapper = mount(
      <HvProvider>
        <Main />
      </HvProvider>
    );
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
    expect(wrapper.find(HvComponentName)).toMatchSnapshot();
  });

  it("should render the ComponentName", () => {
    const component = wrapper.find(HvComponentName);
    expect(component.length).toBe(1);
  });
});
