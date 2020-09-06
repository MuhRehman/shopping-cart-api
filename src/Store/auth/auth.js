import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState:
    JSON.parse(localStorage.getItem("user")) != null
      ? {
          user: JSON.parse(localStorage.getItem("user")),
          isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
        }
      : { user: {}, isLoggedIn: false, jwt: "", isLoading: false },

  reducers: {
    userLoggedIn: (auth, action) => {
      auth.isLoading = false;
      if (action.payload.user != null && action.payload.jwt != "") {
        auth.user = action.payload.user;
        auth.isLoggedIn = true;
        auth.jwt = action.payload.jwt;

        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem(
          "isLoggedIn",
          JSON.stringify(action.payload.isLoggedIn)
        );
        localStorage.setItem("jwt", action.payload.jwt);
      }
    },
    userLoginFailed: (auth, action) => {
      auth.isLoading = false;
    },
    userLoginStarted: (auth, action) => {
      auth.isLoading = true;
    },

    userLoggedOut: (auth, action) => {
      auth.user = {};
      auth.isLoggedIn = false;
      auth.jwt = "";

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwt");
    },
  },
});

export default slice.reducer;

export const {
  userLoggedIn,
  userLoggedOut,
  userLoginFailed,
  userLoginStarted,
} = slice.actions;

////// hmara Convetion  ///

// command  -- subject     ////// action creators   //// order --- subject

// subjject - event   //// item Added
//               //// userLoggedIn

/////////////////////////

///////// signIn the User ///

const url = "/auth/local";
export const signIn = (data) => {
  console.log(userLoggedIn.type);
  console.log(userLoginFailed.type);
  console.log(userLoginStarted.type);

  return {
    type: "apiCallStarted",
    payload: {
      url,
      method: "post",
      data,
      onSuccess: userLoggedIn.type,
      onStart: userLoginStarted.type,
      onFail: userLoginFailed.type,
    },
  };
};
