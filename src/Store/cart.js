import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
	name: "cart",
	initialState:
		JSON.parse(localStorage.getItem("cart")) != null
			? JSON.parse(localStorage.getItem("cart"))
			: [],

	reducers: {
		itemAdded: (cart, action) => {
			let singleCartItem = cart.filter(
				(itemCart) => itemCart.id === action.payload.item.id
			)

			if (singleCartItem[0]) {
				singleCartItem[0].quantity += 1

				singleCartItem[0].totalCost =
					singleCartItem[0].price * singleCartItem[0].quantity

				/// also please update the cookie variable
				localStorage.setItem("cart", JSON.stringify(cart))
			} else {
				const item = {
					...action.payload.item,
					totalCost: action.payload.item.price,
					quantity: 1,
				}
				cart.push(item)
				localStorage.setItem("cart", JSON.stringify(cart))
			}
		},

		itemIncrease: (cart, action) => {
			let singleCartItem = cart.filter(
				(itemCart) => itemCart.id === action.payload.id
			)

			if (singleCartItem[0]) {
				/// for unexpected situations

				singleCartItem[0].quantity += 1

				singleCartItem[0].totalCost =
					singleCartItem[0].price * singleCartItem[0].quantity

				localStorage.setItem("cart", JSON.stringify(cart))

				///// Javascript objects are by reference. ---- not by value /////
			}
		},

		itemDecrease: (cart, action) => {
			let singleCartItem = cart.filter((item) => item.id == action.payload.id)
			if (singleCartItem[0]) {
				if (singleCartItem[0].quantity - 1 == 0) {
					cart = cart.filter((item) => item.id != action.payload.id)
					localStorage.setItem("cart", JSON.stringify(cart))
					return cart
				}

				singleCartItem[0].quantity -= 1 //// mutate /// change
				singleCartItem[0].totalCost =
					singleCartItem[0].price * singleCartItem[0].quantity

				localStorage.setItem("cart", JSON.stringify(cart))
			}
		},

		itemDelete: (cart, action) => {
			cart = cart.filter((item) => item.id != action.payload.id)
			localStorage.setItem("cart", JSON.stringify(cart))
			return cart
		},
	},
})

export default slice.reducer

export const {
	itemAdded,
	itemIncrease,
	itemDelete,
	itemDecrease,
} = slice.actions
