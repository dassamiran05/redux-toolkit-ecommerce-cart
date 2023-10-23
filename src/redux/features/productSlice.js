import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteProduct,
  fetchProductsAPI,
  postProductsAPI,
} from "./productsApi";

const initialState = {
  data: [],
  isLoading: false,
  //   postSuccess:false,
  //   deleteSuccess:false,
  isError: false,
  error: "",
};

// First, create the thunk
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProductsAPI();
    return products;
  }
);

//thunk should be created for post single product
export const addProducts = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const products = postProductsAPI(data);
    return products;
  }
);
//Delete thunk
export const adeleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const products = deleteProduct(id);
    return products;
  }
);

const productSlice = createSlice({
  name: "productslice",
  initialState,
  // reducers:{
  //   togglePostSuccess:(state) => {
  //       state.postSuccess = false
  //   }
  //   toggleDeleteSuccess:(state) => {
  //       state.deleteSuccess = false
  //   }
  // },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getProducts.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // Add user to the state array
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        // Add user to the state array
        state.data = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
// export const { togglePostSuccess, toggleDeleteSuccess } = productSlice.actions;
export default productSlice.reducer;
