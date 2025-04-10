import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userslice"

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})