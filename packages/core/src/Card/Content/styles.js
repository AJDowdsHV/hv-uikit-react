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

const styles = theme => ({
  content: {
    borderLeft: `1px solid ${theme.hv.palette.atmosphere.atmo6}`,
    borderRight: `1px solid ${theme.hv.palette.atmosphere.atmo6}`,
    padding: `0 ${theme.hv.spacing.sm}px ${theme.hv.spacing.sm}px ${theme.hv.spacing.sm}px`
  },
  bottomBorder: {
    borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo6}`
  },
  item: {
    padding: `0 0 ${theme.hv.spacing.sm}px 0`
  }
});

export default styles;