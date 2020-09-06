//// will draw the user profile page .. user details that were provided during signup   ----- Page

//use smart Table .. to draw dummy tabular Data

import React, { Component } from "react";
import SmartTable from "../Components/SmartTable";
const UserInfo = () => {
  let rows = [
    {
      Name: "Riaz",
      LastNmae: "Iltaf",
      gender: "male",
      Age: "37",
      Address: "Lahore",
    },
    {
      Name: "Mophsin",
      LastName: "Park",
      gender: "male",
      Age: "70",
      Address: "Lahore",
      PhoneNumber: "0333",
      maritalStatus: "married",
    },
    {
      Name: "zaman",
      LastName: "tahir",
      gender: "male",
      Age: "69",
      Address: "Islamabad",
      PhoneNumber: "0333",
    },
  ];
  return (
    <div>
      <SmartTable content={rows}></SmartTable>
    </div>
  );
};

export default UserInfo;
