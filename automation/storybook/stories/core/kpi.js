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
import Grid from "@hv/uikit-react-core/dist/Grid";
import KpiAverage from "../../../../packages/doc/samples/components/kpi/kpiAverage";
import KpiIOPS from "../../../../packages/doc/samples/components/kpi/kpiIOPS";
import KpiNodes from "../../../../packages/doc/samples/components/kpi/kpiNodes";
import KpiSimple from "../../../../packages/doc/samples/components/kpi/kpiSimple";
import KpiStorageArray from "../../../../packages/doc/samples/components/kpi/kpiStorageArray";
import KpiThroughput from "../../../../packages/doc/samples/components/kpi/kpiThroughput";

// sample scenarios
const samples = {};
samples.KpiAverage = KpiAverage,
samples.KpiIOPS = KpiIOPS,
samples.KpiNodes = KpiNodes,
samples.KpiSimple = KpiSimple,
samples.KpiStorageArray = KpiStorageArray,
samples.KpiThroughput = KpiThroughput,

// create CoreTextArea for each sample
Object.keys(samples).forEach(key =>
  storiesOf("CoreKpi", module).add(key, () => (
    <Grid container>
      <Grid item xl>
        {samples[key]}
      </Grid>
    </Grid>
  ))
);