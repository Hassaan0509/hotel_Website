import { createReducer } from "@reduxjs/toolkit";

const initialState = { openDate: false };

export const dateShow = createReducer(initialState, {
  changeDate: (state, action) => {
    state.openDate = action.payload;
  },
});
