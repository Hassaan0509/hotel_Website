import { createReducer } from "@reduxjs/toolkit";

const initialState = { max: undefined };

export const maxPrice = createReducer(initialState, {
  SET_MAX_PRICE: (state, action) => {
    state.max = action.payload;
  },
});
