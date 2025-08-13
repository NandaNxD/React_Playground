import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/appSlice";
import { playgroundSlice } from "./slices/playgroundSlice";

export const store=configureStore({
    reducer:{
        app:appSlice.reducer,
        playground:playgroundSlice.reducer
    }
})