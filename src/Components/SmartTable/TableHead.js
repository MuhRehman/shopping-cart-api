//// Draw a single table row   ///////// Item  /////
import React, { Component } from "react";

const TableHead = (props) => {
  return (
    <thead>
      <tr>
        <th scope="col"> Update </th>
        
        {Object.keys(props.rowHeader).map((item) => {
          if (typeof props.rowHeader[item] == "object");
          else return <th scope="col">{item.toLocaleUpperCase()}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
