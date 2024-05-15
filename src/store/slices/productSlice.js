import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (categoryId, thunkApi) => {
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err)
        }
    }
)

const productSlice = createSlice ({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default productSlice.reducer