import { createSlice } from "@reduxjs/toolkit";

interface PlaygroundState{
    testData:number | null;
}

const initialState:PlaygroundState={
    testData:null
}

export const playgroundSlice=createSlice({
    name:'PlaygroundSlice',
    initialState,
    reducers:{
        setTestData:(store)=>{
            store.testData=1;
        }
    }
})

export const {setTestData}=playgroundSlice.actions;