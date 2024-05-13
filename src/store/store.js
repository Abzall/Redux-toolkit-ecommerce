import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import productSlice from "./slices/productSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice
    }
})