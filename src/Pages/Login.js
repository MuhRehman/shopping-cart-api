//// will draw a form. username and password.
import React, { Component, useState, useContext } from "react";
import "./css/Style.css";
import { Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";
import { AppContext } from "../Components/AppContext";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../Store/auth/auth";
import { useSelector } from "react-redux";

const Login = () => {
  const context = useContext(AppContext);
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [validation, setValidation] = useState(false);
  const [alertAppear, setAlertAppear] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setValidation(true);
    let form = e.currentTarget;

    if (form.checkValidity()) {
      let data = {
        identifier: username,
        password: password,
      };

      dispatch(signIn(data));
    }
    /// this is a comment
  };

  if (isLoggedIn == true) return <Redirect to="/profile" />;

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
        width: "450px",
        margin: "auto",
        background: "#ffffff",
        boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
        padding: "40px 55px 45px 55px",
        borderRadius: "15px",
        marginTop: "130px",
      }}
    >
      {/* <div className="col-4"></div> */}
      <div className="">
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

        {alertAppear == false ? (
          <Form noValidate validated={validation} onSubmit={onSubmit}>
            <h3>Sign In</h3>

            <Form.Group>
              <label>Username</label>
              <input
                required
                type="input"
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter email"
              />

              <Form.Control.Feedback type="valid">
                Very Good
              </Form.Control.Feedback>

              <Form.Control.Feedback type="invalid">
                Username is mandatory
              </Form.Control.Feedback>
            </Form.Group>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Enter password"
              />

              <Form.Control.Feedback type="valid">
                Very Good
              </Form.Control.Feedback>

              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </Form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Login;
