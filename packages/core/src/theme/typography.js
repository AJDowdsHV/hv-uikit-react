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

import createTypography from "@material-ui/core/styles/createTypography";

const typography = (palette, theme) =>
  createTypography(palette, {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: theme.typography.fontFamily,
    h1: {
      ...theme.typography.xlTitle
    },
    h2: {
      ...theme.typography.lTitle
    },
    h3: {
      ...theme.typography.mTitle
    },
    h4: {
      ...theme.typography.sTitle
    },
    body1: {
      ...theme.typography.normalText
    },
    body2: {
      ...theme.typography.infoText
    },
    subtitle1: {
      ...theme.typography.highlightText
    },
    subtitle2: {
      ...theme.typography.labelText
    },
    button: {
      ...theme.typography.highlightText
    }
  });

export default typography;
