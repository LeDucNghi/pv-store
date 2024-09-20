import { authReducer } from "./features/auth";
import { cartReducer } from "./features/cart";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
