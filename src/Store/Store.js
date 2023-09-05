import { configureStore } from "@reduxjs/toolkit";
import ResponceSlice from "../Components/ResponceSlice";
export const Store=configureStore({
    reducer:{
        responceData:ResponceSlice
    }
})