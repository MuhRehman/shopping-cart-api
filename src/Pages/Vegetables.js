import React, { Component, useState, useEffect, useContext } from "react";
import ItemList from "../Components/ItemList";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const axios = require("axios");

function Vegetables(props) {
  const apiContent = useSelector((state) => state.products);

  if (apiContent.isLoading == true)
    return (
      <center className="mt-4">
        {" "}
        <Spinner animation="grow" size={"lg"} variant="primary"></Spinner>
      </center>
    );
  return (
    <div>
      <ItemList apiData={apiContent.list}></ItemList>
    </div>
  );
}

export default Vegetables;
