import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import sidebarSlice from "./slices/sidebarSlice";
import categorySlice from "./slices/categorySlice";


export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        category: categorySlice,
        products: productSlice
    }
})