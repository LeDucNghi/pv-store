import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "@/models";
import { RootState } from "../store";

export interface CartState {
  cart: Product[];
}

const initialState = {
  cart: [],
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cart.actions;

export const selectSuccess = (state: RootState) => state.cart.cart;

export const cartReducer = cart.reducer;
