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

const parseDescription = description => {
  return description.split("-")[0];
};

const parseType = type => {
  let typeValue;
  switch (type.name) {
    case "instanceOf":
      typeValue = type.value;
      break;
    default:
      typeValue = type.name;
  }

  return typeValue;
};

const PropsTable = ({ classes, propsMetaData }) => (
  <table className={classes.table}>
    <thead>
      <tr>
        <th>Property</th>
        <th>PropType</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(propsMetaData).map(key => {
        const prop = propsMetaData[key];
        console.log(prop);
        return (
          <tr key={key}>
            <td>{key}</td>
            <td>{prop.type ? parseType(prop.type) : ""}</td>
            {prop.required ? <td>true</td> : <td>-</td>}
            {prop.defaultValue ? (
              <td>{prop.defaultValue.value}</td>
            ) : (
              <td>none</td>
            )}
            {prop.description ? (
              <td>{parseDescription(prop.description)}</td>
            ) : (
              <td />
            )}
          </tr>
        );
      })}
    </tbody>
  </table>
);
export default PropsTable;