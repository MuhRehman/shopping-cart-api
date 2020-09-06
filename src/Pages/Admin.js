import React, { Component, useState, useContext, useEffect } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import DemoModal from "../Components/DemoModal";
import SmartTable from "../Components/SmartTable";
import EditUserDetail from "../Components/EditUserDetail";
import { AppContext } from "../Components/AppContext";

const Admin = (props) => {
  const [roles, setRoles] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [show, setShow] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://mangakure.com/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((response) => {
        // handle success
        // console.log(response.data);
        setUserList(response.data);

        ///////////  /    Explaination udhaar  //////
        let roleNames = {};
        response.data.map((user) => {
          roleNames[user.role.name] = user.role.name;
        });

        setRoles(
          Object.keys(roleNames).map((key, index) => {
            return { name: key, id: index };
          })
        );

        ////////////////////   / / ////////////
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const postDataForUpdate = (data) => {
    //// post the data to the Api

    let fields = {};

    /////////// What are the Data fields
    //
    if (data.password != "") fields["password"] = data.password;

    fields["blocked"] = data.blocked;
    //fields["role"] = data.role;

    console.log(selectedData.id);
    console.log(fields);

    axios({
      method: "put",
      url: `https://mangakure.com/users/${selectedData.id}`,
      data: fields, ////// data is the attribute for Axios for whatever object to be posted.
    })
      .then((success) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SmartTable
        onModify={(id) => {
          setShow(true);
          let selectedData = userList.filter((item) => item.id == id);
          setSelectedData(selectedData[0]);
        }}
        content={userList}
      ></SmartTable>
      <DemoModal
        show={show}
        onClose={() => {
          setShow(false);
        }}
        content={
          
            <EditUserDetail
              onSubmit={(data) => {
                console.log(data);
                postDataForUpdate(data);
              }}
              user={selectedData}
              roles={roles}
            ></EditUserDetail>
         
        }
      ></DemoModal>
    </div>
  );
};

export default Admin;
