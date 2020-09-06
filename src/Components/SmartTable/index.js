//// draw a table ////    item list

import React, { Component } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

const SmartTable = (props) => {
  let headerContent = [
    "first",
    "second",
    "gender",
    "Age",
    "Address",
    "Phone Number",
  ];

  {
    /* <TableHead header= {headerContent} />  */
  }

  return (
    <div>
      <table className="table">
        {props.content.length != 0 ? (
          <TableHead rowHeader={props.content[0]}></TableHead>
        ) : (
          ""
        )}

        <tbody>
          {props.content.map((rowContent) => {
            return (
              <TableRow
                onModify={(id) => {
                  props.onModify(id);
                }}
               
                rowData={rowContent}
              ></TableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SmartTable;
