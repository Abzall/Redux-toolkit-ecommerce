import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  singleProduct: [],
  singleProductStatus: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESED;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    })
    // Single Product
    .addCase(getSingleProduct.pending, (state, action) => {
        state.singleProductStatus = STATUS.LOADING
    })
    .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload
        state.singleProductStatus = STATUS.SUCCESED
    })
    .addCase(getSingleProduct.rejected, (state, action) => {
        state.singleProductStatus = STATUS.FAILED
    })
  },
});

// getting the products list limited numbers
export const getProducts = createAsyncThunk(
  "getProducts/product",
  async (limit) => {
    const response = await axios.get(`${BASE_URL}products?limit=${limit}`);
    return response.data;
  }
);

// getting single product
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct/product",
  async (id) => {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    return response.data;
  }
);

export default productSlice.reducer;
