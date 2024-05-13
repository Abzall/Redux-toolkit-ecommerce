import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunkApi) => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err)
        }
    }
)

const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default categoriesSlice.reducer