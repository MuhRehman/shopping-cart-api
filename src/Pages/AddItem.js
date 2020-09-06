import React, { useEffect, useState } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";

export default function AddItem(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("150");
  const [currency, setCurrency] = useState("Rs");
  const [unit, setUnit] = useState("Kg");
  const [category, setCategory] = useState("Fruits");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ready, setReady] = useState(false);
  const [alertAppear, setAlertAppear] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setTitle("");
    setPrice("150");
    setCurrency("Rs");
    setUnit("Kg");
    setCategory("Fruits");
    setDescription("");
    setImage("");
    setReady(false);
    setIsLoading(false);
    setAlertAppear(false);
    setAlertType("");
    setAlertMsg("");
    setUrlImage("");
  };

  const postData = () => {
    //// post the data to the Api

    let fields = {};

    /////////// What are the Data fields
    fields["title"] = title;
    fields["description"] = description;
    fields["price"] = price;
    fields["unit"] = unit;
    fields["currency"] = currency;
    fields["category"] = category;

    ///////////////////////

    const formData = new FormData();

    formData.append("files.image", image, image.fileName); /// Strapi accepts files on "files.AttributeName"
    ////// Append the Data fields..
    formData.append("data", JSON.stringify(fields)); /// the second attribute strapi requires is "data" where we have all the dataFields

    axios({
      method: "post",
      url: "https://mangakure.com/dummies",
      data: formData, ////// data is the attribute for Axios for whatever object to be posted.
    })
      .then((success) => {
        reset();

        setAlertMsg("Record has been successfully created");
        setAlertType("success");
        setAlertAppear(true);
      })
      /// display that record has been uploaded.

      .catch((err) => {
        setIsLoading(false);
        setAlertMsg(err.message);
        setAlertType("danger");
        setAlertType(true);
        ////  display the error msg
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ///// verify that all the inputs are valid  .... VALIDATION ...

    setReady(true);

    let form = e.currentTarget;

    if (form.checkValidity()) {
      setIsLoading(true); /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
      postData(); //// if all goood .... /// post the data to the Api
    }
  };

  if (isLoading == true)
    return (
      <center className="mt-4">
        {" "}
        <Spinner animation="grow" size={"lg"} variant="primary"></Spinner>
      </center>
    );

  return (
    <div>
      <Form
        noValidate
        validated={ready}
        onSubmit={onSubmit}
        style={{
          width: "450px",
          margin: "auto",
          background: "#ffffff",
          boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
          marginTop: "30px",
          padding: "20px 55px 45px 55px",
          borderRadius: "15px",
        }}
      >
        <Form.Group controlId="formGridEmail">
          <Form.Group controlId="formGridPassword">
            <Form.Label>
              Category <span style={{ color: "red" }}>*</span>
            </Form.Label>

            <Form.Control
              required
              as="select"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder=""
            >
              <option>Vegetable</option>
              <option>Fruits</option>
            </Form.Control>
          </Form.Group>

          <Form.Label>
            Title <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            required
            minLength={3}
            maxLength={50}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
          />
          <Form.Control.Feedback type="valid">
            {" "}
            Very Good{" "}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {" "}
            Value is required. Please input a Valid Title{" "}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Price <span style={{ color: "red" }}>*</span>{" "}
            </Form.Label>
            <Form.Control
              required
              min={0}
              max={1000}
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              placeholder="Price"
            />
            <Form.Control.Feedback type="valid">
              {" "}
              Very Good{" "}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {" "}
              Value is required. (between 0 to 1000) Please input a numeric
              value{" "}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Currency<span style={{ color: "red" }}>*</span>{" "}
            </Form.Label>
            <Form.Control
              as="select"
              name="currency"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
              type="text"
              placeholder="Currency"
            >
              <option>Rs</option>
              <option>$</option>
              <option>‎€</option>
              <option>AED</option>
              <option>AUD</option>
              <option>CAD</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Unit <span style={{ color: "red" }}>*</span>
            </Form.Label>

            <Form.Control
              required
              as="select"
              name="unit"
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value);
              }}
              type="text"
              placeholder="Unit"
            >
              <option>KG</option>
              <option>Unit</option>
              <option>Litter</option>
              <option>Dozen</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            as="textarea"
            rows="3"
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className={"form-label col-form-label"}>
            {" "}
            Item Picture{" "}
          </Form.Label>

          {urlImage === "" ? (
            ""
          ) : (
            <img
              className="form-control mb-2"
              style={{
                height: "120px",
                margin: "auto",
                objectFit: "contain",
              }}
              src={urlImage}
            ></img>
          )}

          <Form.Control
            required
            name="image"
            //value={state.image.fileName}

            onChange={(e) => {
              setImage(e.target.files[0]);
              setUrlImage(URL.createObjectURL(e.target.files[0]));
            }}
            type="file"
          />
          {/* <Form.Control required name="file" type="text" value={state.img} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} as="text" style={{display:"none"}} /> */}
          <Form.Control.Feedback type="valid">
            {" "}
            Very Good{" "}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Upload a Picture of the Product{" "}
          </Form.Control.Feedback>
        </Form.Group>
        <Alert
          msg={alertMsg}
          seconds={5}
          type={alertType}
          appear={alertAppear}
          onDisappear={() => {
            setAlertAppear(false);
            setAlertMsg("");
            setAlertType("");
          }}
        ></Alert>
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
