/// will draw a form for signup. ... bla bla

import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const SignUp = () => {
  const [validation, setValidation] = useState(false);
  const [username, setUsername] = useState("");
  const [FullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
    let data = {
      username: username,
      FullName: FullName,
      password: password,
      email: email,
    };

    axios({
      method: "post",
      url: "https://mangakure.com/auth/local/register",
      data,
    })
      .then((success) => {
        console.log(success);
      })

      .catch((err) => {
        console.log(err);

        ////  display the error msg
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let form = e.currentTarget;

    if (form.checkValidity()) postData();

    setValidation(true);
  };

  return (
    <div
      className="mt-3 mr-5"
      style={{
        width: "450px",
        // margin: "auto",
        float: "right",
        background: "#ffffff",
        boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
        padding: "40px 55px 45px 55px",
        borderRadius: "15px",
      }}
    >
      <Form noValidate validated={validation} onSubmit={onSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            required
            name="FullName"
            className="form-control"
            value={FullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="First name"
          />
          <Form.Control.Feedback type="valid">Very Good</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            First Name is mandatory
          </Form.Control.Feedback>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="input"
            required
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <Form.Control.Feedback type="valid">Very Good</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Last Name is mandatory
          </Form.Control.Feedback>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            required
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="valid">Very Good</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Username is mandatory
          </Form.Control.Feedback>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <Form.Control.Feedback type="valid">Very Good</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Password is mandatory
          </Form.Control.Feedback>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="sign-in">sign in?</a>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
