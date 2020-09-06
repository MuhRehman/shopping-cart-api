import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Stars from "./Stars";
import { useDispatch } from "react-redux";

import { itemAdded, itemUpdated } from "../Store/cart";

function Item(props) {
  const dispatch = useDispatch();

  const normal = {
    boxShadow:
      "rgba(135, 133, 137, 0.45) 0px 0px 0px 0px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px",
  };
  const hyper = {
    boxShadow:
      "rgba(135, 133, 137, 0.45) 10px 12px 12px 8px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px",
  };

  const [mode, setMode] = useState(normal);

  return (
    <div
      className="col mt-3"
      onClick={(e) => {
        e.stopPropagation();
        props.onSelect(props.product);
      }}
    >
      <div
        className="card"
        style={mode}
        onMouseEnter={() => {
          setMode(hyper);
        }}
        onMouseLeave={() => {
          setMode(normal);
        }}
      >
        <img
          src={`https://mangakure.com/${props.product.image.url}`}
          style={{ height: "190px", margin: "auto", objectFit: "cover" }} //// explanation  udhaar/////
          className="card-img-top"
          alt="..."
        />
        <div className="p-3">
          <h5>{props.product.title} </h5>
          <Stars likes={props.product.likes}></Stars>

          <p className="card-text ">
            Price: {props.product.price} {props.product.currency}
            {" per "}
            {props.product.unit}{" "}
          </p>
          <p>{props.product.description} </p>

          {props.verify ? (
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.onAction("verify", props.product);
                }}
                className="btn btn-small btn-primary mr-2"
              >
                {" "}
                Verify{" "}
              </button>
              <button
                className="btn btn-small btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  props.onAction("reject", props.product);
                }}
              >
                {" "}
                Reject{" "}
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                // console.log(
                //   itemAdded({
                //     Rock: "pappuy",                  /////  type: "itemAdded" , payload:
                //     Rock1: "111pappuy",
                //     Rock3s: "22pappuy",
                //   })
                // );
                dispatch(itemAdded({ item: props.product }));
              }}
              className="btn btn-sm btn-primary mt-3"
            >
              Buy Now
            </button>
          )}

          <div className="row">{props.buttons}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
