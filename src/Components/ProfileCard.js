import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Stars from "./Stars";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../Store/auth/auth";
function ProfileCard(props) {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div
      className="col mt-3"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="card">
        {currentUser.picture != null ? (
          <img
            src={`https://mangakure.com/${currentUser.picture.url}`}
            style={{ height: "190px", margin: "auto", objectFit: "contain" }} //// explanation  udhaar/////
            className="mt-3 rounded-circle"
            alt="..."
          />
        ) : (
          <img
            src="./images/card1.png"
            style={{ height: "190px", margin: "auto", objectFit: "contain" }} //// explanation  udhaar/////
            className="mt-3 rounded-circle"
            alt="..."
          />
        )}

        <div className="p-3 ">
          <div>
            <b>Name :</b>
            {currentUser.FullName}

            <button
              onClick={() => {
                // localStorage.removeItem("currentUser");
                // localStorage.removeItem("jwt");

                dispatch(userLoggedOut());
              }}
              className="btn  mt-4 btn-sm btn-primary"
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
          </div>
          <div>
            <b>User Name :</b>
            {currentUser.username}{" "}
          </div>
          <div>
            <b>Email :</b>
            {currentUser.email}{" "}
          </div>
          <div>
            <b>Company Name :</b>
            {currentUser.client.CompanyName}{" "}
          </div>
          <div>
            <b>City :</b>
            {currentUser.client.City}{" "}
          </div>
          <div>
            <b>Address :</b>
            {currentUser.client.Address}{" "}
          </div>
          <div>
            <b>Country :</b>
            {currentUser.client.Country}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
