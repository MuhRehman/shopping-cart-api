import { combineReducers } from "redux";
import auth from "./auth/auth";
import cart from "./cart";
import products from "./entities/products";

export default combineReducers({ auth, cart, products });
