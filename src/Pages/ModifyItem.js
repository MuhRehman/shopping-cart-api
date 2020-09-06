import React, { Component, useState, useContext, useEffect } from "react";
import { Button, Form, Col, Spinner, Modal } from "react-bootstrap";
import axios from "axios";
import DemoModal from "../Components/DemoModal";
import SmartTable from "../Components/SmartTable";

import { useSelector, useDispatch } from "react-redux";
import ProductForm from "../Components/ProductForm";

const ModifyItem = (props) => {
  const { list: productsList, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const [ModalShow, setModalShow] = useState("");
  const [id, setId] = useState("");

  if (isLoading == true)
    return (
      <center className="mt-4">
        {" "}
        <Spinner animation="grow" size={"lg"} variant="primary"></Spinner>
      </center>
    );

  return (
    <div>
      <DemoModal
        show={ModalShow}
        content={<ProductForm selectedId={id} onClose={() => setModalShow(false)} />}
        onClose={() => setModalShow(false)}
      />
      <SmartTable
        onModify={(id) => {
          setId(id);
          setModalShow(true);
        }}
        content={productsList}
      ></SmartTable>
    </div>
  );
};

export default ModifyItem;
