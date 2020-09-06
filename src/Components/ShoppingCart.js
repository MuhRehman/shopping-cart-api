import React, { Component, useState, useContext } from "react";

import SmartTable from "./SmartTable";
import DemoModal from "../Components/DemoModal";
import mystyles from "../Components/mycss.css";
import ShoppingCartItem from "../Components/ShoppingCartItem";

import { useSelector } from "react-redux";

const ShoppingCart = (props) => {
  const [display, setDisplay] = useState(false);

  let cart = useSelector((state) => state.cart);
  /////2 kaam kar diye  ///aik kaam data select kar k laya   ///  hme updated rakka
  /// jab jab chnage howa
  let count = cart.length;

  return (
    <div>
      <DemoModal
        show={display}
        onClose={() => {
          setDisplay(false);
        }}
        title={"Shopping Cart"}
        content={
          count < 1
            ? "Shopping Cart Is Empty.."
            : cart.map((product) => {
                return <ShoppingCartItem key={product.id} product={product} />;
              })
        }
        footer={
          <button
            onClick={() => {
              setDisplay(false);
            }}
            className="btn bg-primary text-white "
          >
            Close
          </button>
        }
      />

      <a>
        <button
          onClick={() => {
            setDisplay(true);
          }}
          className="btn btn-sm btn-primary p-1"
        >
          <svg
            className="bi bi-cart-plus mb-1 mr-1"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 16 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"
            />
            <path
              fillRule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
          <span className="">
            <sup className="badge badge-light  mr-1">{count}</sup> Shopping Cart{" "}
          </span>
        </button>
      </a>
    </div>
  );
};

export default ShoppingCart;
