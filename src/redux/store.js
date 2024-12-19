import { configureStore } from "@reduxjs/toolkit";
import wheaterReducer from './wheaterSlice'

export const store = configureStore({
    reducer: {
        wheater: wheaterReducer,
    }
})