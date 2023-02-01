import { createReducer } from "@reduxjs/toolkit";

const initialState = { c: "light" };

export const mode = createReducer(initialState, {
  LIGHT: (state) => {
    state.c = "light";
  },
  DARK: (state) => {
    state.c = "dark";
  },
});
