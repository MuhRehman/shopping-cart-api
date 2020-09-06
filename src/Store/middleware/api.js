const axios = require("axios");

const api = (store) => (next) => (action) => {
  if (action.type != "apiCallStarted") return next(action); /// apna kaam jaaari rakko...hmara laina dainaa nahi hey

  const { url, method, data, onSuccess, onFail, onStart } = action.payload;

  next(action); /// dev tools pe action log ho jaye ..

  store.dispatch({ type: onStart });

  //////// call the  APi as per the payload of the action

  ///////// base url should come from env ....   ////

  axios({
    baseURL: "https://mangakure.com",
    url,
    method,
    data,
  })
    .then((response) => {
      //// we should dispatch  the data.
      store.dispatch({
        type: onSuccess,
        payload: response.data,
      });
    })
    .catch((error) => {
      store.dispatch({
        type: onFail,
      });
      ///// fail ho gaya //// we should dispatch the error
    });
};

export default api;
