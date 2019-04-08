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
import { storiesOf } from "@storybook/react";
import HvInput from "@hv/uikit-react-core/dist/Input";

storiesOf("Core", module).add("Input", () => <HvInput />, {
  title: "Input box",
  description:
    "A input box that offers clear buttons, info messages, default validations, and custom validations",
  designSystemLink: "https://10.76.48.133/hv-design-system/hv-design-system-specs/tree/master",
  usage: "import HvInput from '@hv/uikit-react-core/dist/Input'",
  examples: [
    {
      title: "1. Simple",
      description: "Simple input with basic labels",
      src: "core/input/inputSimple"
    },
    {
      title: "2. Disabled",
      description:
        "Simple input with basic labels but disable not allowing interactions",
      src: "core/input/inputSimpleDisable"
    },
    {
      title: "3. No validation",
      description:
        "Input that disables every type of validations not showing validation icons",
      src: "core/input/inputNoValidation"
    },
    {
      title: "4. Limited",
      description:
        "input that includes validation of the max length of the string accepting up to 40 characters",
      src: "core/input/inputMax"
    },
    {
      title: "5. Limited numeric",
      description:
        "input that only accepts number, includes validation of the max length of the string accepting up to 40 characters",
      src: "core/input/inputMaxNumeric"
    },
    {
      title: "6. Required limited numeric",
      description:
        "Required input, that only accepts number, includes validation of the max length of the string accepting up to 40 characters",
      src: "core/input/inputRequiredMaxNumeric"
    },
    {
      title: "7. Email",
      description:
        "Email required input, that only accepts valid email addresses",
      src: "core/input/inputEmail"
    },
    {
      title: "8. Password",
      description:
        "Password required input that only accepts the value ´password´, the value must be between 6 and 12 characters in length",
      src: "core/input/inputPassword"
    },
    {
      title: "9. Custom validation",
      description:
        "Input with a custom validation function, it validates if the input contains the value `hello`",
      src: "core/input/inputCustomValidation"
    },
    {
      title: "10. Default value",
      description: "Input with an default value already in place",
      src: "core/input/inputDefaultValue"
    },
    {
      title: "11. Left icon",
      description: "Input with icons aligned to the left",
      src: "core/input/inputLeftIcon"
    },
    {
      title: "12. Event demonstration",
      description: "Input with all event functions enabled",
      src: "core/input/inputEvents"
    },
    {
      title: "13. Custom input props",
      description:
        "Using the input props to inject input custom props, this input will block values when exceeding 250 characters",
      src: "core/input/inputCustomProps"
    }
  ]
});