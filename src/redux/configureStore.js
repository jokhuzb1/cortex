import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import amountSlice from "./amountSlice";

const reducer = combineReducers({
    amount: amountSlice
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thun: false })]
});


export default store;