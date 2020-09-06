import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import ProfileCard from "../Components/ProfileCard";
import { AppContext } from "../Components/AppContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Store/auth/auth";
function Profile(props) {
  const context = useContext(AppContext);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn != true) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 "></div>
        <div className="col-md-4  text-center">
          <ProfileCard></ProfileCard>
        </div>
        <div className="col-md-4 "></div>
      </div>
    </div>
  );
}

export default Profile;
