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

import React, { useState } from "react";
import HvSearchBox from "@hv/uikit-react-lab/dist/SearchBox";
import HvButton from "@hv/uikit-react-core/dist/Button";

const list = ["Adam", "Andy", "Carol"];

const WrapperWithList = () => {
  const [value, setValue] = useState("");

  const filter = () =>
    value !== ""
      ? list.filter(word => word.toLowerCase().includes(value))
      : list;

  return (
    <>
      <HvButton onClick={() => setValue("")} style={{ marginBottom: "20px" }}>
        Reset
      </HvButton>

      <HvSearchBox
        onChange={val => setValue(val.toLowerCase())}
        searchInput={value}
      />
      {filter().map(item => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default <WrapperWithList />;