/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import HvCardHeader from "@hv-ui/react/core/Card/Header";

storiesOf("Core/card", module).add("Header", () => <HvCardHeader />, {
  title: "Header",
  description:
    "Component of the card, responsible for presenting header content.",
  designSystemLink: "https://10.76.48.133/hv-design-system/hv-design-system-specs/tree/master",
  usage: "import {HvCardHeader} from '@hv-ui/react/core/Card'"
});