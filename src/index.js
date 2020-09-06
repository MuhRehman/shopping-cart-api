import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,    ///// to ensure that your APP is a pure function
  document.getElementById("root")
);

///// pure function will give you the same output for the same input values.

///////  Add(2,2); //// 4    ///// pure function
//// manipulate("gold" "today");    ////2.9000///   33300 /// 2.5    ///// impure function

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
