/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import PropTypes from "prop-types";

import HvTypography from "@hv/uikit-react-core/dist/Typography";
import DropLeftIcon from "@hv/uikit-react-icons/dist/DropLeft.XS";
import DropRightIcon from "@hv/uikit-react-icons/dist/DropRight.XS";

const Navigation = ({
  classes,
  onNavigatePrevious,
  onNavigateNext,
  onTextClick,
  navigationText
}) => (
  <div className={classes.root}>
    <DropLeftIcon className={classes.icon} onClick={onNavigatePrevious} fill="red" />

    <div
      className={`${
        typeof onTextClick === "function"
          ? classes.text
          : classes.textWithoutHover
      }`}
      role="presentation"
      onClick={onTextClick}
    >
      <HvTypography variant="normalText">{navigationText}</HvTypography>
    </div>

    <DropRightIcon className={classes.icon} onClick={onNavigateNext} />
  </div>
);

Navigation.propTypes = {
  /**
   * A Jss Object used to override or extend the component styles.
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * A function to be executed whenever the navigate previous action is triggered.
   */
  onNavigatePrevious: PropTypes.func,
  /**
   * A function to be executed whenever the navigate next action is triggered.
   */
  onNavigateNext: PropTypes.func,
  /**
   * A function to be executed whenever the text is clicked.
   */
  onTextClick: PropTypes.func,
  /**
   * The text that will be shown between the navigation buttons.
   */
  navigationText: PropTypes.string
};

Navigation.defaultProps = {
  onNavigatePrevious: undefined,
  onNavigateNext: undefined,
  onTextClick: undefined,
  navigationText: "n/a"
};

export default Navigation;