import { cartReducer } from "./features/cart";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
  cart: cartReducer,
});
