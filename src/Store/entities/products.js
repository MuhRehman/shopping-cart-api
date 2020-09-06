import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
  },

  reducers: {
    productsRequested: (products, action) => {
      products.isLoading = true;
    },

    productsAdded: (products, action) => {
      products.isLoading = false;
      products.list = action.payload;
    },

    productsAddFailed: (products, action) => {
      products.isLoading = false;
    },
    productUpdateFailed: (products, action) => {
      products.isLoading = false;
    },
    productUpdated: (products, action) => {
      products.isLoading = false;
      products.list = products.list.map((product) => {
        if (product.id === action.payload.id) return action.payload;
        else return product;
      });
    },
    productUpdateRequested: (products, action) => {
      products.isLoading = true;
    },
  },
});

export default slice.reducer;

export const {
  productsAdded,
  productsAddFailed,
  productsRequested,
} = slice.actions;

const url = "/dummies"; ////// env file se aye ga...

export const loadProducts = () => ({
  type: "apiCallStarted",
  payload: {
    url,
    method: "get",
    data: {},
    onSuccess: productsAdded.type,
    onStart: productsRequested.type,
    onFail: productsAddFailed.type,
  },
});

export const updateProduct = (data, id) => {
  let fullUrl = url + "/" + id;

  return {
    type: "apiCallStarted",
    payload: {
      url: fullUrl,
      method: "put",
      data,
      onSuccess: slice.actions.productUpdated.type,
      onStart: slice.actions.productUpdateRequested.type,
      onFail: slice.actions.productUpdateFailed.type,
    },
  };
};
