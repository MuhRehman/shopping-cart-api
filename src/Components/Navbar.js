/// will draw a menu... simple
import React, { Component } from "react";
// import './App.css';
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../Store/auth/auth";

const Navbar = (props) => {
  let dispatch = useDispatch();
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">dd</Nav.Link>

    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    <nav collapseOnSelect className="navbar navbar-expand-sm   bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>
          {" "}
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="" to={"/additem"}>
                <div className="btn btn-sm  mr-3">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className="bi mb-1 mr-1 bi-plus-circle-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                  </svg>

                  <NavDropdown
                    className="bg-success"
                    title="Action On Items"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Link>
              <Link className="" to={"/updateitem"}>
                <button className="btn btn-sm btn-primary mr-3">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className="bi mb-1 mr-1 bi-plus-circle-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                  </svg>
                  Update Item
                </button>
              </Link>
            </li>
            <li>
              <Link className="" to={"/rejecteditem"}>
                <button className="btn btn-sm btn-primary mr-3">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className="bi mb-1 mr-1 bi-plus-circle-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                  </svg>
                  Rejected Item
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/vegetables"}>
                {" "}
                <button className="btn btn-sm btn-primary mr-3">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className="mb-1 mr-1 bi bi-suit-club"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a3.25 3.25 0 0 0-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 1 0 2.357 5.334.5.5 0 0 1 .844.518l-.003.005-.006.015-.024.055a21.893 21.893 0 0 1-.438.92 22.38 22.38 0 0 1-1.266 2.197c-.013.018-.02.05.001.09.01.02.021.03.03.036A.036.036 0 0 0 5.9 15h4.2c.01 0 .016-.002.022-.006a.092.092 0 0 0 .029-.035c.02-.04.014-.073.001-.091a22.875 22.875 0 0 1-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 0 1 .838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 1 0-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 0 0 8 1zm2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 1 1-2.007-8.187 2.79 2.79 0 0 1-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 0 1 8.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 0 1-.46 8.476 4.186 4.186 0 0 1-1.543-.298z"
                    />
                  </svg>
                  Vegetables
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/fruits"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className=" mb-1 mr-1 bi bi-tag"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                    />
                  </svg>
                  Fruits
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="" to={"/sign-in"}>
                {" "}
                <button className="btn btn-sm btn-primary mr-3">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className=" mb-1 mr-1 bi bi-door-open"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"
                    />
                    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z" />
                  </svg>
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/sign-up"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className="mb-1 mr-1  bi bi-person-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path
                      fillRule="evenodd"
                      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                  Sing Up
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/userinfo"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 16 16"
                    className=" mb-1 mr-1 bi bi-info-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                    <circle cx="8" cy="4.5" r="1" />
                  </svg>
                  User Info
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/verify"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    className="mb-1 mr-1 bi bi-patch-check"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Verify{" "}
                </button>
              </Link>
            </li>

            <li className="nav-item">{props.cart}</li>
            <li className="nav-item">
              <Link className="" to={"/checkout"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    class="bi bi-bag-check"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                    />
                    <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                    <path
                      fill-rule="evenodd"
                      d="M10.854 7.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 10.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Check Out
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/Profile"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-badge"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 1H4a1 1 0 0 0-1 1v11.755S4 12 8 12s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  Profile
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="" to={"/admin"}>
                <button className="btn btn-sm btn-primary">
                  <svg
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    class="bi bi-command"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 0 3.5 5H5V3.5a1.5 1.5 0 1 0-3 0zM6 6V3.5A2.5 2.5 0 1 0 3.5 6H6zm8-2.5A1.5 1.5 0 0 1 12.5 5H11V3.5a1.5 1.5 0 0 1 3 0zM10 6V3.5A2.5 2.5 0 1 1 12.5 6H10zm-8 6.5A1.5 1.5 0 0 1 3.5 11H5v1.5a1.5 1.5 0 0 1-3 0zM6 10v2.5A2.5 2.5 0 1 1 3.5 10H6zm8 2.5a1.5 1.5 0 0 0-1.5-1.5H11v1.5a1.5 1.5 0 0 0 3 0zM10 10v2.5a2.5 2.5 0 1 0 2.5-2.5H10z"
                    />
                    <path fill-rule="evenodd" d="M10 6H6v4h4V6zM5 5v6h6V5H5z" />
                  </svg>
                  Admin
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="">
                <button
                  onClick={() => {
                    // localStorage.removeItem("currentUser");
                    // localStorage.removeItem("jwt");

                    dispatch(userLoggedOut());
                  }}
                  className="btn btn-sm btn-primary"
                >
                  <svg
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    class="bi bi-box-arrow-left"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.354 11.354a.5.5 0 0 0 0-.708L1.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14 13.5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5H7A1.5 1.5 0 0 0 5.5 4v1.5a.5.5 0 0 0 1 0V4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 0-1 0V12A1.5 1.5 0 0 0 7 13.5h7z"
                    />
                  </svg>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
