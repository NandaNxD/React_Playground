import { createSlice } from "@reduxjs/toolkit";

interface AppState{
    count:number
}

const initialState:AppState={
    count:0
}

export const appSlice = createSlice({
	name: "AppSlice",
	initialState,
	reducers: {
        incrementCounter:(store)=>{
            store.count++;
        }
    },
});

export const {incrementCounter}=appSlice.actions