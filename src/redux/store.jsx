import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: counterReducer, //User the reducer from the slice
});

export default store;