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

/*  TODO: Review accessibility */

/*  eslint-disable  jsx-a11y/click-events-have-key-events */
/*  eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import partial from "lodash/partial";
import isNil from "lodash/isNil";
import { KeyboardCodes, isKeypress } from "@hv/uikit-common-utils/dist";
import SearchIcon from "@hv/uikit-react-icons/dist/DawnTheme/Search.S";
import HvInput from "../Input";

/**
 *  Checks whether the user pressed Enter and executes on submit, otherwise it executes onKeyDown.
 *
 *  @param handlers - array with the callbacks to use
 *  @param event - contains the onKeyDown event
 *  @param value - the value inside the input
 */
const onKeyDownHandler = (handlers, event, value) => {
  const [onKeyDown, onSubmit] = handlers;
  if (isKeypress(event, KeyboardCodes.Enter)) {
    onSubmit(value);
  }
  onKeyDown(event, value);
};

/**
 *  Checks whether the user pressed Enter and executes on submit, otherwise it executes onKeyDown.
 *
 *  @param theme - array with the callbacks to use
 *  @param disabled - contains the onKeyDown event
 */
const changeIconColor = (theme, disabled) =>
  disabled ? (
    <SearchIcon color={["none", theme.hv.palette.atmosphere.atmo7]} />
  ) : (
    <SearchIcon />
  );

const iconStateHandler = (value, theme, disabled, setIcon) => {
  if (isNil(value) || value === "") {
    setIcon(changeIconColor(theme, disabled));
  } else {
    setIcon(undefined);
  }
};

/**
 *  Checks whether the user pressed Enter and executes on submit, otherwise it executes onKeyDown.
 *
 *  @param contextValues - array with the callback to use the theme and the disabled flag.
 *  @param value - the value inside the input.
 */
const onChangeHandler = (contextValues, value) => {
  const [onChange, theme, disabled, setIcon] = contextValues;
  let newValue = value;
  newValue = onChange(newValue);
  iconStateHandler(value, theme, disabled, setIcon);
  return newValue;
};

/**
 *  Clears the lens icon.
 *
 *  @param contextValues - array with the callback to use the theme and the disabled flag.
 *  @param value - the value inside the input.
 */
const onFocusHandler = (contextValues, value) => {
  const [onFocus, theme, disabled, setIcon] = contextValues;
  iconStateHandler(value, theme, disabled, setIcon);
  onFocus(value);
}

/**
 *  Puts the lens icon back in place.
 *
 *  @param contextValues - array with the callback to use the theme and the disabled flag.
 *  @param value - the value inside the input.
 */
const onBlurHandler = (contextValues, value) => {
  const [onBlur, theme, disabled, setIcon] = contextValues;
  setIcon(changeIconColor(theme, disabled));
  onBlur(value);
}

const HvSearchBox = props => {
  const {
    classes,
    id,
    theme,
    className,
    labels,
    initialValue,
    value,
    onChange,
    disabled,
    suggestionListCallback,
    suggestionSelectedCallback,
    onBlur,
    onFocus,
    onKeyDown,
    onSubmit,
    autoFocus
  } = props;

  const [lensIcon, setIcon] = useState(changeIconColor(theme, disabled));

  return (
    <>
      <HvInput
        className={classNames(className, classes.root)}
        labels={labels}
        id={id}
        initialValue={initialValue}
        inputValue={value}
        suggestionListCallback={suggestionListCallback}
        suggestionSelectedCallback={suggestionSelectedCallback}
        customFixedIcon={lensIcon}
        onChange={partial(onChangeHandler, [
          onChange,
          theme,
          disabled,
          setIcon
        ])}
        onBlur={partial(onBlurHandler, [
          onBlur,
          theme,
          disabled,
          setIcon
        ])}
        onFocus={partial(onFocusHandler, [
          onFocus,
          theme,
          disabled,
          setIcon
        ])}
        onKeyDown={partial(onKeyDownHandler, [onKeyDown, onSubmit])}
        autoFocus={autoFocus}
        disabled={disabled}
        showInfo={false}
        validationIconVisible={false}
      />
    </>
  );
};

HvSearchBox.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * The theme passed by the provider.
   */
  theme: PropTypes.instanceOf(Object),
  /**
   * A Jss Object used to override or extend the styles applied to the search box.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to searchbox root.
     */
    root: PropTypes.string
  }).isRequired,
  /**
   * Id to be applied to the root node.
   */
  id: PropTypes.string,
  /**
   * An Object containing the various text associated with the searchbox.
   *
   * - inputLabel: the label on top of the searchbox.
   * - placeholder: the placeholder value of the searchbox.
   */
  labels: PropTypes.shape({
    inputLabel: PropTypes.string,
    placeholder: PropTypes.string
  }),
  /**
   * The initial value of the searchbox
   */
  value: PropTypes.string,
  /**
   * The function that will be executed when the searchbox changes,
   * it receives the searchbox value
   */
  onChange: PropTypes.func,
  /**
   * The function that will be executed to received an array of objects that has a label and id to create list of suggestion
   */
  suggestionListCallback: PropTypes.func,
  /**
   * The function that will be executed after selecting a value in the suggestion list
   */
  suggestionSelectedCallback: PropTypes.func,
  /**
   * The function that will be executed onBlur, allows checking the validation state,
   * it receives the value and the validation state (´empty´, ´filled´, ´invalid´, ´valid´).
   */
  onBlur: PropTypes.func,
  /**
   * The function that will be executed onFocus, allows checking the value state,
   * it receives the value.
   */
  onFocus: PropTypes.func,
  /**
   * The function that will be executed onKeyDown, allows checking the value state,
   * it receives the value.
   */
  onKeyDown: PropTypes.func,
  /**
   * The function that will be executed on Enter, allows checking the value state,
   * it receives the value.
   */
  onSubmit: PropTypes.func,
  /**
   * If `true` it should autofocus.
   */
  autoFocus: PropTypes.bool,
  /**
   * If ´true´ the searchBox is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The initial value of the searchBox.
   */
  initialValue: PropTypes.string
};

HvSearchBox.defaultProps = {
  value: undefined,
  initialValue: "",
  className: "",
  theme: null,
  id: "",
  labels: {
    inputLabel: "",
    placeholder: "Search"
  },
  onChange: value => value,
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onSubmit: () => {},
  suggestionListCallback: () => {},
  suggestionSelectedCallback: () => {},
  autoFocus: false,
  disabled: false
};

export default HvSearchBox;