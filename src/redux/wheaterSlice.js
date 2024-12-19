import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWheater = createAsyncThunk("wheater/fetchWheater", async (city, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/data/2.5/wheater?q=${city}&appid=806801d0f27985f95c058f4d955f3b74`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.mesage)
    }
})
const wheaterSlice = createSlice({
    name: "wheater",
    initialState: { 
        wheaterData: null,
        error: null,
        loading: false,
     },
     extraReducers: (builder) => {
        builder.addCase(fetchWheater.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchWheater.fulfilled, (state, action) => {
            state.wheaterData = action.payload;
            state.loading = false
        }).addCase(fetchWheater.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false
        })
     }
})

export default wheaterSlice.reducer