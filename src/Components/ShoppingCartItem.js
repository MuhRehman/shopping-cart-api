import React, { Component, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { itemIncrease, itemDecrease, itemDelete } from "../Store/cart";
const ShoppingCartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img
            className="img-responsive"
            src={`https://mangakure.com/${props.product.image.url}`}
            style={{ height: "90px", margin: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="col-12 m-auto text-sm-center col-sm-12 text-md-left col-md-3 text-center">
          <h4 className="">
            <strong>{props.product.title}</strong>
          </h4>
          <h4>
            <small>{props.product.title}</small>
          </h4>
        </div>

        <div className="col-12 m-auto  col-sm-12  border-primary text-sm-center col-md-7 text-md-right row">
          <div className="col-12  col-md-4 text-md-right">
            <div className="form-control form-control-label">
              Price: {props.product.price} / {props.product.unit}{" "}
              <span className="text-muted"></span>
            </div>
          </div>

          <div class="col-12 col-lg-3  col-md-5 ">
            <div className=" input-group">
              <span class="input-group-btn">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(itemIncrease({ id: props.product.id }));
                  }}
                  class="quantity-left-minus btn form-control  border-primary btn-number"
                  data-type="minus"
                  data-field=""
                >
                  +
                </button>
              </span>
              <input
                type="text"
                value={props.product.quantity}
                id="quantity"
                name="quantity"
                class="form-control input-number"
              />
              <span class="input-group-btn ">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(itemDecrease({ id: props.product.id }));
                  }}
                  class="quantity-right-plus form-control btn border-primary btn-number"
                  data-type="plus"
                  data-field=""
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div className="col-12  col-md-2 text-md-right">
            <div className="form-control form-control-label pl-0">
              Total: {props.product.totalCost}{" "}
              <span className="text-muted"></span>
            </div>
          </div>

          <div className="col-12  col-md-1 p-0 ">
            <button
              onClick={() => {
                dispatch(itemDelete({ id: props.product.id }));
              }}
              type="button"
              className="btn form-control btn-outline-danger btn-xs"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
