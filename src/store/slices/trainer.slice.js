import { createSlice } from "@reduxjs/toolkit";

export const trainerSlice = createSlice({
    name: "trainer",
    initialState: "" ,
    reducers:{
        setTrainerSlice: (state, action) => action.payload

    }
})

export const {setTrainerSlice} = trainerSlice.actions
export default trainerSlice.reducer