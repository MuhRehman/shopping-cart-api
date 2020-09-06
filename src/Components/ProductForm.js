import React, { useState, useEffect } from "react";
import { Button, Form, Col, Spinner, Modal } from "react-bootstrap";
import { updateProduct } from "../Store/entities/products";
import { useSelector, useDispatch } from "react-redux";

const ProductForm = (props) => {
  const [selectedProduct] = useSelector((state) =>
    state.products.list.filter((item) => item.id == props.selectedId)
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const [id, setId] = useState("");
  const [price, setPrice] = useState("150");
  const [currency, setCurrency] = useState("Rs");
  const [unit, setUnit] = useState("Kg");
  const [category, setCategory] = useState("Fruits");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [ready, setReady] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setId(selectedProduct.id);
    setTitle(selectedProduct.title);
    setPrice(selectedProduct.price);
    setCurrency(selectedProduct.currency);
    setUnit(selectedProduct.unit);
    setCategory(selectedProduct.category);
    setDescription(selectedProduct.description);
    setImage(selectedProduct.image);
    setImageUrl(`https://mangakure.com/${selectedProduct.image.url}`);
  }, []);

  const reset = () => {
    setId("");
    setTitle("");
    setPrice("150");
    setCurrency("Rs");
    setUnit("Kg");
    setCategory("Fruits");
    setDescription("");
    setImage({});
    setReady(false);
  };

  const postDataForUpdate = () => {
    let fields = { title, description, price, unit, currency, category };

    const formData = new FormData();

    if (image instanceof Blob) {
      formData.append("files.image", image, image.name);
      formData.append("data", JSON.stringify(fields));
    } else formData.append("data", JSON.stringify(fields));

    dispatch(updateProduct(formData, id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ///// verify that all the inputs are valid  .... VALIDATION ...

    setReady(true);

    let form = e.currentTarget;

    if (form.checkValidity()) {
      /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
      postDataForUpdate();
      props.onClose(); //// if all goood .... ///Tell the parent you are ready to be closed
    }
  };

  return (
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
            name="category"
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
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
        />
        <Form.Control.Feedback type="valid"> Very Good </Form.Control.Feedback>
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
            Value is required. (between 0 to 1000) Please input a numeric value{" "}
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
        {imageUrl !== "" ? (
          <img
            className="form-control mb-2"
            style={{
              height: "120px",
              margin: "auto",
              objectFit: "contain",
            }}
            src={imageUrl}
          ></img>
        ) : (
          ""
        )}
        <Form.Control
          name="image"
          //value={this.state.image.name}
          onChange={(e) => {
            this.setState({
              [e.target.name]: e.target.files[0],
              imageUrl: URL.createObjectURL(e.target.files[0]),
            });
          }}
          type="file"
        />
        <Form.Control
          required
          name="file"
          type="text"
          value={image}
          onChange={(e) => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          as="text"
          style={{ display: "none" }}
        />{" "}
        */}
        <Form.Control.Feedback type="valid"> Very Good </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please Upload a Picture of the Product{" "}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-4" variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default ProductForm;
