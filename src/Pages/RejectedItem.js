import React, { Component, useState, useEffect } from "react";
import ItemList from "../Components/ItemList";
import Item from "../Components/Item";

// import { AppContext } from "./AppContext";
const axios = require("axios");

const RejectedItem = () => {
  // static contextType = AppContext;

  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://mangakure.com/dummies")
      // axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
      .then((response) => {
        // handle success
        let data = response.data;

        let selectedItems = data.filter((item) => item.isRejected === true);

        setApiContent(selectedItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
      {apiContent.map((item) => (
        <Item
          product={item}
          onAction={this.onAction}
          onSelect={(item) => {
            console.log(item);
          }}
        />
      ))}
    </div>
  );
};

export default RejectedItem;
