import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
//import reducer from "./cart";
import reducer from "./RootReducer";
import logger from "./middleware/logger";
import api from "./middleware/api";

const store = configureStore({
  reducer,                ////////// yeh reducers
  middleware: [...getDefaultMiddleware(), logger, api],   //// yeh pipe hey
});

export default store;    ////// STORE//////
