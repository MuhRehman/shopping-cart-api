import React, { useState, useEffect } from "react";
import ItemList from "../Components/ItemList";

const axios = require("axios");

export default function Fruits(props) {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://mangakure.com/dummies")

      .then((response) => {
        let data = response.data;

        setApiContent(
          data.filter(
            (item) => (item.category === "Fruits") & (item.isVerified === true)
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ItemList apiData={apiContent}></ItemList>
    </div>
  );
}
