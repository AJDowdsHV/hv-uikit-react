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
import HvButton from "@hv/uikit-react-core/dist/Button";

const Actions = ({ classes, onCancel, onApply, labels }) => (
  <div className={classes.root}>
    <HvButton className={classes.button} onClick={onCancel} colorType="link">
      {labels.cancelLabel}
    </HvButton>
    <HvButton className={classes.button} onClick={onApply} colorType="link">
      {labels.applyLabel}
    </HvButton>
  </div>
);

Actions.propTypes = {
  /**
   * A Jss Object used to override or extend the component styles.
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * A function to be executed whenever cancel action is triggered.
   */
  onCancel: PropTypes.func,
  /**
   * A function to be executed whenever apply action is triggered.
   */
  onApply: PropTypes.func,
  /**
   * An Object containing the various text associated with the input.
   *
   * - applyLabel: Label for apply button.
   * - cancelLabel: Label for cancel button.
   */
  labels: PropTypes.shape({
    applyLabel: PropTypes.string,
    cancelLabel: PropTypes.string
  })
};

Actions.defaultProps = {
  onCancel() {},
  onApply() {},
  labels: {
    applyLabel: "Apply",
    cancelLabel: "Cancel"
  },
};

export default Actions;