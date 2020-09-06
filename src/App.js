import React, { Component, useEffect } from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import ShoppingCart from "./Components/ShoppingCart"
import UserInfo from "./Pages/UserInfo"
import Checkout from "./Pages/Checkout"
import Navbar from "./Components/Navbar"
import Fruits from "./Pages/Fruits"
import Vegetables from "./Pages/Vegetables"
import AddItem from "./Pages/AddItem"
import ModifyItem from "./Pages/ModifyItem"
import VerifyItems from "./Pages/VerifyItems"
import RejectedItem from "./Pages/RejectedItem"
import { Provider } from "react-redux"
import store from "./Store/configureStore"
import Testing from "./Components/Testing"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"
import { loadProducts } from "./Store/entities/products"
import AlertProvider from "./Components/AlertProvider"

const App = () => {
	useEffect(() => {
		store.dispatch(loadProducts())
	}, [])

	return (
		<Provider store={store}>
			<Router>
				<Navbar cart={<ShoppingCart />} />
				<AlertProvider />

				<Switch>
					<Route exact path="/">
						<Login></Login>{" "}
					</Route>
					<Route exact path="/updateitem">
						{" "}
						<ModifyItem />{" "}
					</Route>
					<Route exact path="/rejecteditem">
						{" "}
						<RejectedItem />{" "}
					</Route>
					<Route exact path="/additem">
						{" "}
						<AddItem />{" "}
					</Route>
					<Route exact path="/vegetables">
						{" "}
						<Vegetables />{" "}
					</Route>
					<Route exact path="/fruits">
						{" "}
						<Fruits />{" "}
					</Route>

					<Route path="/sign-in">
						{" "}
						<Login></Login>
					</Route>
					<Route path="/sign-up">
						{" "}
						<SignUp></SignUp>
					</Route>
					<Route path="/userinfo">
						{" "}
						<UserInfo></UserInfo>
					</Route>
					<Route path="/checkout">
						<Checkout></Checkout>
					</Route>
					<Route path="/verify">
						<VerifyItems></VerifyItems>
					</Route>
					<Route path="/testing">
						<Testing name={"Imran Khan"}></Testing>
					</Route>
					<Route path="/profile">
						<Profile></Profile>
					</Route>
					<Route path="/admin">
						<Admin></Admin>
					</Route>
				</Switch>
				{/* <PageCom></PageCom> */}
			</Router>
		</Provider>
	)
}
export default App
