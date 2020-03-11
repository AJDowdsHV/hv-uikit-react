import React, { useState } from "react";
import HvTable from "@hv/uikit-react-core/dist/Table";

const Table = ({ data, columns, title }) => {
  const [pageSize, setPageSize] = useState(10);

  const onPageSizeChange = newPageSize => setPageSize(newPageSize);

  return (
    <HvTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      pageSize={pageSize}
      resizable={false}
      labels={{
        titleText: title
      }}
      idForCheckbox="id"
      onPageSizeChange={onPageSizeChange}
    />
  );
};

export default Table;
