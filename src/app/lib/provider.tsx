"use client";

import * as React from "react";

import { Provider } from "react-redux";
import { store } from "./store";

export interface IReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: IReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
