import React, { useEffect, useState } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";
import FormCheckInput from "react-bootstrap/FormCheckInput";

export default function EditUserDetail(props) {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [blocked, setBlocked] = useState(false);

  const [ready, setReady] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setBlocked(props.user.blocked);
    setRole(props.user.role);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ///// verify that all the inputs are valid  .... VALIDATION ...

    setReady(true);

    let form = e.currentTarget;

    if (form.checkValidity()) {
      setIsLoading(true); /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
      props.onSubmit({ password, blocked, role }); //// if all goood .... /// post the data to the Api
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
    <div
      style={{
        width: "",
        margin: "auto",
        background: "#ffffff",
        boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
        // marginTop: "10px",
        padding: "0px 55px 0px 55px",
        borderRadius: "15px",
      }}
    >
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center w-100">
              {props.user.picture != null ? (
                <img
                  src={`https://mangakure.com/${props.user.picture.url}`}
                  style={{
                    height: "190px",
                    margin: "auto",
                    objectFit: "contain",
                  }} //// explanation  udhaar/////
                  className="mt-3 rounded-circle"
                  alt="..."
                />
              ) : (
                <img
                  src="images/avatar.png"
                  style={{
                    height: "190px",
                    margin: "auto",
                    objectFit: "contain",
                  }} //// explanation  udhaar/////
                  className="mt-3 rounded-circle"
                  alt="..."
                />
              )}
            </div>
            <Form.Group controlId="formGridPassword">
              <Form.Label>
                Full Name <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                as="input"
                value={props.user.FullName}
                type="text"
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>
                Username <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                as="input"
                value={props.user.username}
                type="text"
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>
                Email <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                as="input"
                value={props.user.email}
                type="text"
                disabled
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form
              noValidate
              validated={ready}
              onSubmit={onSubmit}
              className=""
              style={{
                margin: "0",
                position: "absolute",
                top: "50%",

                transform: "translateY(-50%)",
                width: "inherit",
              }}
            >
              <Form.Group controlId="formGridEmail">
                <Form.Group controlId="formGridPassword">
                  <Form.Label>
                    Status <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                      checked={blocked}
                      onChange={(e) => {
                        blocked === true ? setBlocked(false) : setBlocked(true);
                      }}
                    />
                    <label className="custom-control-label" for="customSwitch1">
                      Blocked
                    </label>
                  </div>
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>
                    New Password <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <Form.Control
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder=""
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>
                    Role <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <Form.Control
                    required
                    as="select"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    type="text"
                    placeholder=""
                  >
                    {props.roles.map((role) => (
                      <option key={role.id}>{role.name}</option>
                    ))}

                    {/* <option>customer</option>
                    <option>delivery</option>
                    <option>sys manager</option>
                    <option>user</option> */}
                  </Form.Control>
                </Form.Group>
              </Form.Group>

              <Button className="mt-4" variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
