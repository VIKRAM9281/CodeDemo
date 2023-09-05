import { createSlice } from "@reduxjs/toolkit";

const ResponceSlice=createSlice({
    name:"empdata",
    initialState:{
        responceData:[]
    },
    reducers:{
        EmployeeData(state,action){
            console.log(action.payload)
            state.responceData.push(action.payload)
        }
    }
})
export const {EmployeeData}=ResponceSlice.actions
export default ResponceSlice.reducer