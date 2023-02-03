import { createReducer } from "@reduxjs/toolkit";

const initialState = { min: undefined };

export const minPrice = createReducer(initialState, {
  SET_MIN_PRICE: (state, action) => {
    state.min = action.payload;
  },
});
