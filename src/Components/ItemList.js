import React, { Component, useState, useContext } from "react";
// import QuoteItem from '../Components/QuoteItem'
import Item from "../Components/Item";
import DemoModal from "../Components/DemoModal";
import ItemDetail from "../Components/ItemDetail";
import { useDispatch } from "react-redux";
import { itemAdded } from "../Store/cart";

const axios = require("axios");

const ItemList = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [modalAppear, setModalAppear] = useState(false);

  return (
    <div className="container-fluid">
      <DemoModal
        title={"Item Detail"}
        show={modalAppear}
        onClose={() => {
          setModalAppear(false);
        }}
        content={
          <ItemDetail
            onBuy={() => {
              dispatch(itemAdded({ item: selectedProduct }));
              setModalAppear(false);
            }}
            product={selectedProduct}
          ></ItemDetail>
        }
        footer={
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                setModalAppear(false);
              }}
            >
              Close
            </button>
            <button
              onClick={() => {
                dispatch(itemAdded({ item: selectedProduct }));
                setModalAppear(false);
              }}
              className="btn btn-primary ml-1"
            >
              {" "}
              Buy Now
            </button>
          </div>
        }
      />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
        {props.apiData.map((product) => {
          return (
            <Item
              key={product.id}
              product={product}
              onSelect={(product) => {
                setSelectedProduct(product);
                setModalAppear(true);
              }}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
