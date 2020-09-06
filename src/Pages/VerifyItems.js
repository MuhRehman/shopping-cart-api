import React, { Component, useEffect, useState } from "react";
import ItemList from "../Components/ItemList";
import Item from "../Components/Item";

// import { AppContext } from "./AppContext";
const axios = require("axios");

const VerifyItems = () => {
  // static contextType = AppContext;

  const [apiContent, setApiContent] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  // useEffect(
  //   axios
  //     .get("https://mangakure.com/dummies")

  //     .then((response) => {
  //       // handle success
  //       let data = response.data;
  //       // console.log(data);

  //       // this.setState({apiContent: response.data});
  //       setApiContent(response.data);

  //       let selectedItems = data.filter(
  //         (item) => (item.isVerified === false) & (item.isRejected === false)
  //       );

  //       setApiContent(selectedItems);
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     }),
  //   []
  // );

  const onAction = (action, product) => {
    if (action === "verify") {
      axios({
        method: "put",
        url: `https://mangakure.com/dummies/${product.id}`,
        data: { isVerified: true }, //formData, ////// data is the attribute for Axios for whatever object to be posted.
      })
        .then((success) => {
          let newData = apiContent.filter((item) => item.id != success.data.id);

          setApiContent(newData);
        })

        .catch((err) => {
          console.log(err);
          ////  display the error msg
        });
    }

    if (action === "reject") {
      console.log(product.id);
      axios({
        method: "put",
        url: `https://mangakure.com/dummies/${product.id}`,
        data: { isRejected: true }, //formData, ////// data is the attribute for Axios for whatever object to be posted.
      }).then((success) => {
        let newData = apiContent.filter((item) => item.id != success.data.id);

        setApiContent(newData);
      });
    }
  };

  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
      {apiContent.map((item) => (
        <Item
          product={item}
          onAction={this.onAction}
          onSelect={(item) => {
            console.log(item);
          }}
          verify
        />
      ))}
    </div>
  );
};

export default VerifyItems;
