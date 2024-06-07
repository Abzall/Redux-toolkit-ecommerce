import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";


const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.categoriesStatus = STATUS.LOADING
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.categoriesStatus = STATUS.SUCCESED
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.categoriesStatus = STATUS.FAILED
        })
    }
})

export const getCategories = createAsyncThunk(
    'categories/getAsyncCategories', async () => {
        const response = await axios.get(`${BASE_URL}products/categories`)
        return response.data
    }
)

export default categorySlice.reducer