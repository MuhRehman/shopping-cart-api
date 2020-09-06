import React, { useEffect, useState, useContext } from "react";
import Stars from "./Stars";
import { AppContext } from "./AppContext";

function ItemDetail({ product, onBuy }) {
  const context = useContext(AppContext);

  return (
    <div>
      <div className="col mt-3">
        <div className="card">
          <img
            className=""
            src={`https://mangakure.com/${product.image.url}`}
            style={{ objectFit: "contain" }} //// explaination  udhaar/////
            alt="..."
          />
          <div className="p-3 text-center">
            <h5>{product.title} </h5>
            <Stars likes={product.likes}></Stars>

            <p className="card-text ">
              Price: {product.price} {product.currency}
              {" per "}
              {product.unit}{" "}
            </p>
            <p>{product.description} </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                context.onBuy(product);
                onBuy(product);
              }}
              className="btn btn-sm btn-primary mt-3"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
