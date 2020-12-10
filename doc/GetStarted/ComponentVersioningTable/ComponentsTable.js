import React from "react";

import { HvTable, HvProvider } from "../../../packages/core/";

const ComponentsTable = ({ tableData, tableColumnsConfig }) => {
  return (
    <HvProvider>
      <HvTable
        data={tableData}
        columns={tableColumnsConfig}
        resizable={false}
        sortable={false}
        showPagination={false}
      />
    </HvProvider>
  );
};

export default ComponentsTable;
