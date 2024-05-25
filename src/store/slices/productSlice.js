// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"

// export const getProducts = createAsyncThunk(
//     'products/getProducts',
//     async (categoryId, thunkApi) => {
//         try {
//             const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
//             return res.data
//         } catch (err) {
//             return thunkApi.rejectWithValue(err)
//         }
//     }
// )

// const productSlice = createSlice ({
//     name: 'products',
//     initialState: {
//         list: [],
//         isLoading: false
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getProducts.pending, (state) => {
//             state.isLoading = true
//         })
//         builder.addCase(getProducts.fulfilled, (state, action) => {
//             state.list = action.payload
//             state.isLoading = false
//         })
//         builder.addCase(getProducts.rejected, (state) => {
//             state.isLoading = false
//         })
//     }
// })

// export default productSlice.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products`
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filterProductsByCategory: (state, action) => {
        const selectedCategoryId = action.payload
        state.filtered = state.list.filter((product) => product.category.id === selectedCategoryId)
    },
    showAllProducts: (state) => {
      state.filtered = state.list
    },
    filterProductsByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filtered = state.list.filter((product) => {
        const productName = product.title.toLowerCase();
        return productName.includes(searchTerm);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.filtered = state.list
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {filterProductsByCategory, showAllProducts, filterProductsByName} = productsSlice.actions

export default productsSlice.reducer;
